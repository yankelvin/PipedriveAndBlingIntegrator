import Earning from "../Opportunities.Domain/Earning";
import IEarning from "../Opportunities.Domain/Interfaces/IEarning";
import IEarningRepository from "../Opportunities.Domain/Interfaces/IEarningRepository";

class EarningRepository implements IEarningRepository {
    async add(earning: IEarning): Promise<IEarning> {
        return Earning.create(earning);
    }

    async find(): Promise<IEarning[]> {
        return Earning.find();
    }

    async findByDate(date: Date): Promise<IEarning> {
        return Earning.findOne({date: {$gte: date}});
    }
}

export default new EarningRepository();
