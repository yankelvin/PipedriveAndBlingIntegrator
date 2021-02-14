import IEarning from "../Opportunities.Domain/Interfaces/IEarning";
import EarningRepository from "../Opportunities.Data/EarningRepository";

class EarningAppService {
    public async addEarning(earning: IEarning): Promise<void> {
        const date = earning.date;
        date.setHours(0);
        date.setMinutes(0);
        date.setMilliseconds(0);

        const earningsToday = await EarningRepository.findByDate(date);

        if (!earningsToday) {
            await EarningRepository.add(earning);
        } else {
            earningsToday.value += earning.value;
            await earningsToday.save();
        }
    }

    public async findAllEarnings(): Promise<IEarning[]> {
        return await EarningRepository.find();
    }
}

export default new EarningAppService();
