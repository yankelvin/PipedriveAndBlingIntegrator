import IParameter from './IParameter';

interface IParameterRepository {
    searchByName(name: string): Promise<IParameter>;
}

export default IParameterRepository;
