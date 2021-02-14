import Integrator from "../Integrator.Domain/Integrator";
import ICreateOrderResponse from "../Integrator.Domain/Shared/ICreateOrderResponse";
import IEarning from "../Integrator.Domain/Shared/IEarning";

import BlingAppService from "../Bling.Application/BlingAppService";
import EarningAppService from "../Opportunities.Application/EarningAppService";

import PipedriveAppService from "../Pipedrive.Application/PipedriveAppService";
import IntegrateViewModel from "../Pipedrive.Application/ViewModels/IntegrateViewModel";

class IntegratorAppService {
    public async Integrate(message: IntegrateViewModel): Promise<ICreateOrderResponse[]> {
        const deals = await PipedriveAppService.searchDeals(message);

        const orders = await Integrator.dealToOrder(deals);

        const ordersResponse = await BlingAppService.createOrder(orders);

        for (const item of deals.items) {
            await EarningAppService.addEarning({
                value: item.item.value,
                date: new Date()
            } as IEarning);
        }

        return ordersResponse;
    }
}

export default new IntegratorAppService();
