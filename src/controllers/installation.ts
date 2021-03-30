import { Request, Response } from 'express';
import { IntegrationService } from '../services/integration-service';

/**
 * Install a application.
 *
 * @param {e.Request} req
 * @param {e.Response} res
 * @returns {Promise<e.Response<any, Record<string, any>>>}
 */
export const install = async (req: Request, res: Response) => {
    const integration = new IntegrationService();

    res.status(201).json({
        integration: await integration.create()
    });
};
