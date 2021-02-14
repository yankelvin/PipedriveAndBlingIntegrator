import {Request, Response} from 'express';
import EarningAppService from "../../Opportunities.Application/EarningAppService";
import EarningMapper from "../../Opportunities.Application/Mappers/EarningMapper";

class EarningController {
    public async GetEarnings(req: Request, res: Response): Promise<Response> {
        try {
            const result = await EarningAppService.findAllEarnings();

            if (!result) {
                return res.status(400).json({
                    success: false,
                    data: null,
                    errors: ["Error in get earnings."]
                } as ICoreResponse);
            }

            const viewModel = EarningMapper.DomainToViewModel(result);

            return res.status(200).json({
                success: true,
                data: viewModel,
                errors: []
            } as ICoreResponse);
        } catch (error) {
            return res.status(500).json({
                success: false,
                data: null,
                errors: [error.message]
            } as ICoreResponse);
        }
    }
}

export default new EarningController();
