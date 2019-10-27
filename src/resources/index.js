import { PLATFORM } from "aurelia-pal";

export async function configure(config) {
  config.globalResources([
    PLATFORM.moduleName('./elements/nav-bar.html'),
    PLATFORM.moduleName('./elements/kt-select')
  ]);
}
