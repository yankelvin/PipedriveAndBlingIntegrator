import IParameter from '../Core.Domain/Interfaces/IParameter';
import ParameterRepository from '../Core.Data/ParameterRepository';

class ParameterService {
    public async searchByName(name: string): Promise<IParameter> {
        return await ParameterRepository.searchByName(name);
    }
}

export default new ParameterService();
