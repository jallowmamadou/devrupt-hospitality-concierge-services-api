import { Request, Response } from 'express';
import QRCode from 'qrcode';

export const generateCode = async (req: Request, res: Response) => {
  const opts = {
    errorCorrectionLevel: 'H',
    type: 'image/jpeg',
    quality: 0.3,
    margin: 1,
    color: {
      dark: '#010599FF',
      light: '#FFBF60FF',
    },
  };
  // With promises
  const reservationId = req.query.reservationId;
  const hotelId = req.query.hotelId;
  res
    .status(201)
    .json({
      data: await QRCode
          .toDataURL(
              `${process.env.GUEST_CONNECT}?reservationId=${reservationId}&hotelId=${hotelId}`
          )
    });
};
