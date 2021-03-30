import { Request, Response } from 'express';
import { IntegrationService } from '../services/integration-service';


export const integration = async (req: Request, res: Response) => {
    const integration = new IntegrationService();

    res.status(201).json({
        data: await integration.create()
    });
};
