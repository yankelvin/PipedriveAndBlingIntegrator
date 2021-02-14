import IntegrateViewModel from "./ViewModels/IntegrateViewModel";
import IDeal from "../Pipedrive.Domain/Interfaces/IDealResponse";
import PipedriveFacade from "../Pipedrive.Infrastructure/PipedriveFacade";

class PipedriveAppService {
    public async searchDeals(message: IntegrateViewModel): Promise<IDeal> {
        return await PipedriveFacade.searchDeals(message.pipedriveTerm, message.pipedriveStatus);
    }
}

export default new PipedriveAppService();
