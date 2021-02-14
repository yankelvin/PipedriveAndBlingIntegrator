import {config} from './config';

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from "../src/WebApp/routes";

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
        this.express.get("/", (req, res) => {
            return res.send("Tudo ok");
        })
    }
}

export default new App().express;
