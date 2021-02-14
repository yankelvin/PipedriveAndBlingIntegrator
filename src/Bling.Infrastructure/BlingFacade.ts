import Parser from "xml2js";
import axios, {AxiosRequestConfig} from "axios";

import ParameterService from "../Core.Application/ParameterService";

import ICreateOrderResponse from "../Bling.Domain/Interfaces/ICreateOrderResponse";
import IGetOrdersResponse from "../Bling.Domain/Interfaces/IGetOrdersResponse";

class BlingFacade {
    private requestUrl: string;
    private token: string;

    private apiConfig: AxiosRequestConfig = {
        headers: {
            'Content-Type': 'text/xml',
        }
    };

    constructor() {
        this.fillParameters().then();
    }

    public async createOrder(order: string): Promise<ICreateOrderResponse> {
        return axios.post(`${this.requestUrl}pedido?apikey=${this.token}&xml=${order}`, this.apiConfig)
            .then(response => {
                return Parser.parseStringPromise(response.data).then(result => {
                    return result;
                });
            })
            .catch(error => {
                throw error;
            })
    }

    public async getOrders(): Promise<IGetOrdersResponse> {
        return axios.get(`${this.requestUrl}pedidos?apikey=${this.token}`, this.apiConfig)
            .then(response => {
                return Parser.parseStringPromise(response.data).then(result => {
                    return result;
                });
            })
            .catch(error => {
                throw error;
            })
    }

    private async fillParameters(): Promise<void> {
        const urlParameter = await ParameterService.searchByName("BLING_URL");
        this.requestUrl = urlParameter.value;

        const tokenParameter = await ParameterService.searchByName("BLING_TOKEN");
        this.token = tokenParameter.value;
    }
}

export default new BlingFacade();

