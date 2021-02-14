import {Router} from 'express';
import IntegratorController from '../Controllers/IntegratorController';

class PublicationRoutes {
    public router(routes: Router): void {
        routes.post('/api/integrator', IntegratorController.Integrate);
    }
}

export default new PublicationRoutes();
