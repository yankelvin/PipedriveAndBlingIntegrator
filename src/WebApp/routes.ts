import {Router} from 'express';

import IntegratorRoutes from './routes/IntegratorRoutes';
import OrderRoutes from './routes/OrderRoutes';
import EarningRoutes from './routes/EarningRoutes';

const routes = Router();

IntegratorRoutes.router(routes);
OrderRoutes.router(routes);
EarningRoutes.router(routes);

export default routes;
