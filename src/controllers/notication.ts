import { Request, Response } from 'express';
import firebase from '../firebase';

const db = firebase.firestore();
export const publish = async (req: Request, res: Response) => {
  const ref = await db
      .collection('notification_tokens')
      .doc(req.body.reservationId)
      .get();

  const sent = await firebase.messaging().sendToDevice(ref.data().token, {
    notification: {
      title: `New message from: ${req.body.reservationId}`,
      body: req.body.message,
      icon: '',
    },
  });

  res.status(201).json({
    published: sent,
  });
};
