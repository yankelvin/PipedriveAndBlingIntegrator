import {Router} from 'express';
import OrderController from '../Controllers/OrderController';

class OrderRoutes {
    public router(routes: Router): void {
        routes.get('/api/orders', OrderController.GetOrders);
    }
}

export default new OrderRoutes();
