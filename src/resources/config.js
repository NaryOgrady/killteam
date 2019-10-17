import { PLATFORM } from 'aurelia-pal';

export const appConfig = {
  title: 'Master Tools',
  routes: [
    {
      route: '', name: 'home', moduleId: PLATFORM.moduleName('home/home'), nav: true, title: 'Welcome'
    }
  ]
};
