import { StageComponent } from "aurelia-testing";
import { PLATFORM } from 'aurelia-pal';
import { bootstrap } from 'aurelia-bootstrapper';

describe('the KtSelect component', ()=> {
  let component;

  beforeEach(async () => {
    component = StageComponent
      .withResources(PLATFORM.moduleName('teams/new-team'))
      .inView('<view></view>');
    await component.create(bootstrap);
  });

  it('creates all the options', () => {
    let list = document.getElementsByClassName('select-list');
  });
});
