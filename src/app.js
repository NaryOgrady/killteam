import { appConfig } from 'resources/config';

export class App {
  constructor() {
    this.router = null;
  }

  configureRouter(config, router) {
    config.title = appConfig.title;
    config.map(appConfig.routes);

    this.router = router;
  }
}
