import { Request, Response } from 'express';
import { ReservationService } from '../services/reservation-service';

/**
 * Get reservation by id.
 *
 * @route GET /reservations/:id
 */
export const getReservationById = async (req: Request, res: Response) => {
  const service = new ReservationService();
  const reservation = await service.getReservationById(req.params.id);

  console.log('**** Reservation ****\n', reservation);

  res.json(reservation);
};

/**
 * Checkout reservation by id.
 *
 * @route GET /reservations/:id
 */
export const checkout = async (req: Request, res: Response) => {
  const service = new ReservationService();
  const reservation = await service.checkout(req.params.id);

  console.log('**** Reservation Checkout ****\n', reservation);

  res.json({
    status: 'done',
  });
};

/**
 * Get reservation by id folios.
 *
 * @route GET /reservations/:id/folios
 */
export const folios = async (req: Request, res: Response) => {
  const service = new ReservationService();
  const reservation = await service.getFolios(req.params.id);

  console.log('**** Reservation Folios ****\n', reservation);

  res.json(reservation);
};
