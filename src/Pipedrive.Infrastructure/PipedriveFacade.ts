import axios, {AxiosRequestConfig} from 'axios';

import IDeal from "../Pipedrive.Domain/Interfaces/IDealResponse";
import ParameterService from "../Core.Application/ParameterService";

class PipedriveFacade {
    private requestUrl: string;
    private token: string;

    private apiConfig: AxiosRequestConfig = {
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        }
    };

    constructor() {
        this.fillParameters().then();
    }

    public async searchDeals(term: string, status: string): Promise<IDeal> {
        const url = `${this.requestUrl}deals/search?term=${term}&status=${status}&start=0&api_token=${this.token}`;

        return axios.get(url, this.apiConfig)
            .then((response) => {
                return response.data.data;
            })
            .catch((error) => {
                throw error;
            })
    }

    private async fillParameters(): Promise<void> {
        const urlParameter = await ParameterService.searchByName("PIPEDRIVE_URL");
        this.requestUrl = urlParameter.value;

        const tokenParameter = await ParameterService.searchByName("PIPEDRIVE_TOKEN");
        this.token = tokenParameter.value;
    }
}

export default new PipedriveFacade();
