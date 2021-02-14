import {Router} from 'express';
import EarningController from '../Controllers/EarningController';

class EarningRoutes {
    public router(routes: Router): void {
        routes.get('/api/earnings', EarningController.GetEarnings);
    }
}

export default new EarningRoutes();
