import {config} from './config';

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from "./WebApp/routes";

class App {
    public express: express.Application;

    public constructor() {
        this.express = express();

        this.middlewares();
        this.routes();
        App.database();
    }

    private static database(): void {
        mongoose.connect(config.connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        }).then();
    }

    private middlewares(): void {
        this.express.use(express.json());
        this.express.use(bodyParser.urlencoded({extended: true}));
        this.express.use(bodyParser.json());
    }

    private routes(): void {
        this.express.use(routes);
    }
}

export default new App().express;
