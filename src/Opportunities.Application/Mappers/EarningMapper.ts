import IEarning from "../../Opportunities.Domain/Interfaces/IEarning";

class EarningMapper {
    public DomainToViewModel(earnings: IEarning[]): IEarningViewModel[] {
        return earnings.map(function (earning) {
            return {
                value: earning.value,
                date: earning.date
            } as IEarningViewModel;
        });
    }
}

export default new EarningMapper();
