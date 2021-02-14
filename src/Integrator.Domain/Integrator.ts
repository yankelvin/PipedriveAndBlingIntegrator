import Parser from "xml2js";
import {v4 as uuidv4} from "uuid";
import {remove} from "remove-accents";

import Order from "./Shared/IOrder";
import IDeal from "../Pipedrive.Domain/Interfaces/IDealResponse";

class Integrator {
    public async dealToOrder(deal: IDeal): Promise<string[]> {
        const builder = new Parser.Builder();
        const orders = this.orderMapper(deal);

        return orders.map(order => builder.buildObject(order));
    }

    private orderMapper(deal: IDeal): Order[] {
        const orders: Order[] = [];

        deal.items.forEach((data) => {
            orders.push({
                pedido: {
                    cliente: {
                        nome: remove(data.item.title)
                    },
                    itens: {
                        item: [
                            {
                                codigo: uuidv4(),
                                descricao: remove(data.item.title),
                                qtde: "1",
                                vlr_unit: data.item.value.toString()
                            }
                        ]
                    }
                }
            })
        });

        return orders;
    }
}

export default new Integrator();
