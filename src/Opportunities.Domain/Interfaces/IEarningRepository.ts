import IEarning from './IEarning';

interface IEarningRepository {
    add(earning: IEarning): Promise<IEarning>;

    find(): Promise<IEarning[]>;

    findByDate(date: Date): Promise<IEarning>;
}

export default IEarningRepository;
