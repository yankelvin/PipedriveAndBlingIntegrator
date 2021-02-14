import {Request, Response} from 'express';
import IntegrateViewModel from "../../Pipedrive.Application/ViewModels/IntegrateViewModel";
import IntegratorAppService from "../../Integrator.Application/IntegratorAppService";

class IntegratorController {
    public async Integrate(req: Request, res: Response): Promise<Response> {
        try {
            const body = req.body as IntegrateViewModel;

            const result = await IntegratorAppService.Integrate(body);

            if (!result) {
                return res.status(400).json({
                    success: false,
                    data: null,
                    errors: ["Unexpected error on integrate."]
                } as ICoreResponse);
            }

            return res.status(200).json({
                success: true,
                data: result,
                errors: []
            } as ICoreResponse);
        } catch (error) {
            return res.status(500).json({
                success: false,
                data: null,
                errors: [error.message]
            } as ICoreResponse)
        }
    }
}

export default new IntegratorController();
