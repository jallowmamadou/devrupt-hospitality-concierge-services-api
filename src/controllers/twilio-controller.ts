import { Request, Response } from 'express';
import firebase from '../firebase';

const AccessToken = require('twilio').jwt.AccessToken;
const VoiceResponse = require('twilio').twiml.VoiceResponse;

export const getToken = async (req: Request, res: Response) => {
  const VoiceGrant = AccessToken.VoiceGrant;

  const outgoingApplicationSid = process.env.TWILIO_VOICE_APP_SID;
  const identity = 'BER';

  const voiceGrant = new VoiceGrant({
    outgoingApplicationSid: outgoingApplicationSid,
    incomingAllow: true,
  });

  const token = new AccessToken(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_API_KEY,
    process.env.TWILIO_API_SECRET,
    { identity: identity }
  );

  token.addGrant(voiceGrant);

  res.status(200).json({
    token: token.toJwt(),
  });
};

export const incoming = async (req: Request, res: Response) => {
  const twiml = new VoiceResponse();

  if (req.body.To) {
    const guest = await firebase
      .firestore()
      .collection('guests')
      .where('phoneNumber', '==', `${req.body.From}`)
      .get()
      .then((snapshot) => {
        let documents: any[] = [];
        snapshot.forEach((doc) => {
          documents.push(doc.data());
        });

        return documents;
      });

    const dial = twiml.dial({ callerId: req.body.From });
    const client = dial.client();

    client.identity(guest[0]['hotelId']);

    client.parameter({
      name: 'reservationId',
      value: guest[0]['reservationId'],
    });

    client.parameter({
      name: 'fullName',
      value: guest[0]['fullName'],
    });

    res.set('Content-Type', 'text/xml');
    res.send(twiml.toString());
  }
  res.end();
};
