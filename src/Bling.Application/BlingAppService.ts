import BlingFacade from "../Bling.Infrastructure/BlingFacade";
import ICreateOrderResponse from "../Bling.Domain/Interfaces/ICreateOrderResponse";
import IGetOrdersResponse from "../Bling.Domain/Interfaces/IGetOrdersResponse";

class BlingAppService {
    public async createOrder(xmlOrders: string[]): Promise<ICreateOrderResponse[]> {
        const response: ICreateOrderResponse[] = [];

        for (const order of xmlOrders) {
            response.push(await BlingFacade.createOrder(order));
        }

        return response;
    }

    public async getOrders(): Promise<IGetOrdersResponse> {
        return await BlingFacade.getOrders();
    }
}

export default new BlingAppService();
