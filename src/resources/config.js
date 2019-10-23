import { PLATFORM } from 'aurelia-pal';

export const appConfig = {
  title: 'Killteam Manager',
  routes: [
    {
      route: ['', 'teams'], name: 'teams', moduleId: PLATFORM.moduleName('teams/teams'), nav: true, title: 'Teams', settings: { icon: 'address-book-o' }
    },
    {
      route: 'tactics', name: 'tactics', moduleId: PLATFORM.moduleName('tactics/tactics'), nav: true, title: 'Tactics', settings: { icon: 'cogs' }
    },
    {
      route: 'teams/new', name: 'new-team', moduleId: PLATFORM.moduleName('teams/new-team'), nav: false, title: 'New Team'
    }
  ]
};
