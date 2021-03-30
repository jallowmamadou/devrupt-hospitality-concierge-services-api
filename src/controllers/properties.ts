import { Request, Response } from 'express';
/**
 * Find a property by id.
 *
 * @param {string} id
 * @returns {Promise<void>}
 */
import { PropertyService } from '../services/property-service';

export const findById = async (req: Request, res: Response) => {
  const service = new PropertyService();

  const reservation = await service.findProperty(req.params.id);

  return res.json(reservation);
};


export const exists = async (req: Request, res: Response) => {
  const service = new PropertyService();

  const reservation = await service.propertyExists(req.params.id);

  return res.json(reservation);
};
