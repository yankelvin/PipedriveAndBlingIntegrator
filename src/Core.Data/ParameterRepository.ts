import Parameter from '../Core.Domain/Parameter';
import IParameter from '../Core.Domain/Interfaces/IParameter';
import IParameterRepository from '../Core.Domain/Interfaces/IParameterRepository';

class ParameterRepository implements IParameterRepository {
    async searchByName(name: string): Promise<IParameter> {
        return Parameter.findOne({name: name});
    }
}

export default new ParameterRepository();
