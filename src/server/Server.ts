import * as express from 'express';
import * as compression from 'compression';
import * as helmet from 'helmet';
import * as fs from 'fs';
import * as path from 'path';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { App } from '../client/App';
import { StaticRouter } from 'react-router-dom';
import { Request, Response, NextFunction } from 'express';
const template = require('lodash.template');

class Server {
  private PORT: string;
  private template: any;
  private express = express();

  constructor(port: string) {
    const filePath = path.resolve(__dirname, '../client/index.html');
    const baseTemplate = fs.readFileSync(filePath);

    this.template = template(baseTemplate);
    this.PORT = port;

    this.middleware();
    this.routes();
    this.listen();
  }

  middleware() {
    this.express.use(compression());
    this.express.use(helmet());
    this.express.use(express.static('dist'));
  }

  routes() {
    this.express.use((req: Request, res: Response) => {
      const context: { [key: string]: any; url?: string } = {};
      const body: string = ReactDOMServer.renderToString(
        React.createElement(StaticRouter, { location: req.url, context }, React.createElement(App))
      );

      if (context.url) {
        res.redirect(context.url);
      }

      res.send(this.template({ body }));
    });
  }

  listen() {
    this.express.listen(this.PORT, () => {
      console.log('Server listening on ' + this.PORT);
    });
  }
}

const server = new Server(process.env.PORT || '3030');
