import { Request, Response } from 'express';
import { Webhook } from '../services/webhook';
import { ReservationService } from '../services/reservation-service';
import { DatabaseService } from '../services/database-service';

const sgMail = require('@sendgrid/mail');

class SendMagicLinkEmail {
  static async send(reservation: any) {
    const database = new DatabaseService();
    const guest = reservation.primaryGuest;
    // save guest to guests
    const middleName = guest.middleInitial || '';
    const doc = {
      reservationId: reservation.id,
      fullName: `${guest.firstName} ${middleName} ${guest.lastName}`,
      phoneNumber: guest.phoneNumber,
      clientId: 'none',
      hotelId: reservation.property.id,
      createdAt: new Date(),
    };
    await database.save(doc);

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: guest.email, // reservation.primaryGuest.email, // Change to your recipient
      from: 'devrupt.developer@gmail.com', //TODO: Change to hotel phone number
      subject: `${reservation.property.name} Guest Messenger`,
      templateId: process.env.SENDGRID_EMAIL_TEMPLATE_ID,
      dynamic_template_data: {
        Hotel_Name: reservation.property.name,
        App_Url: `${process.env.GUEST_APP}?reservationId=${reservation.id}`,
        Subject: `${reservation.property.name} Guest Messenger`,
      },
    };

    return await sgMail.send(msg);
  }
}

export const setup = async (req: Request, res: Response) => {
  const webhook = new Webhook();
  res.status(201).json({
    data: await webhook.setup(),
  });
};


export const incoming = async (req: Request, res: Response) => {
  if (req.body.type === 'checked-in' && req.body.data) {
    const reservationService = new ReservationService();

    await SendMagicLinkEmail.send(
      await reservationService.getReservationById(req.body.data.entityId)
    );
  }
  res.status(204).end();
};
