import { App } from 'app';
import { appConfig } from 'resources/config';

class RouterStub {
  constructor() {
    this.routes = null;
  }

  configure(handler) {
    handler(this);
  }

  map(routes) {
    this.routes = routes;
  }
}

describe('the App module', () => {
  let mockedApp;
  let mockedRouter;

  beforeEach(() => {
    mockedRouter = new RouterStub();
    mockedApp = new App();
    mockedApp.configureRouter(mockedRouter, mockedRouter);
  });

  it('contains a router property', () => {
    expect(mockedApp.router).toBeDefined();
  });

  it('has the correct title', () => {
    expect(mockedApp.router.title).toEqual(appConfig.title);
  });

  it('router has the correct routes', () => {
    expect(mockedApp.router.routes).toEqual(appConfig.routes);
  });
});
