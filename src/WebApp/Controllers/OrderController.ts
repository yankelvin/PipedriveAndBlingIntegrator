import {Request, Response} from 'express';
import BlingAppService from "../../Bling.Application/BlingAppService";

class OrderController {
    public async GetOrders(req: Request, res: Response): Promise<Response> {
        try {
            const result = await BlingAppService.getOrders();

            if (!result) {
                return res.status(400).json({
                    success: false,
                    data: null,
                    errors: ["Error in get orders."]
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
            } as ICoreResponse);
        }
    }
}

export default new OrderController();
