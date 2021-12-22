import {
  constructRoutes,
  constructApplications,
  constructLayoutEngine,
} from 'single-spa-layout';
import { registerApplication, start } from 'single-spa';
import { loadEmberApp } from 'single-spa-ember';

const routes = constructRoutes(document.querySelector('#single-spa-layout'), {
  loaders: {
    topNav: '<h1>Loading topnav</h1>',
  },
  errors: {
    topNav: '<h1>Failed to load topnav</h1>',
  },
});
const applications = constructApplications({
  routes,
  loadApp: ({ name }) => {
    return System.import(name);
  },
});
// Delay starting the layout engine until the styleguide CSS is loaded
const layoutEngine = constructLayoutEngine({
  routes,
  applications,
  active: false,
});

applications.forEach((app) => {
  if (app.name === 'people') {
    const peopleDomain = 'http://localhost:4201/people';
    // const peopleDomain = isLocal
    //   ? "http://localhost:4201/people"
    //   : "https://ember-micro-frontends.github.io/people";
    registerApplication(
      'people',
      () => {
        const appName = 'people';
        const appUrl = `${peopleDomain}/assets/people.js`;
        const vendorUrl = `${peopleDomain}/assets/vendor.js`;
        return loadEmberApp(appName, appUrl, vendorUrl);
      },
      (location) => location.pathname.startsWith('/people/') // why do i need a trailing slash and why does this break everything else??
    );
  } else {
    registerApplication(app);
  }
});
// register ember app separately

System.import('@react-mf/styleguide').then(() => {
  // Activate the layout engine once the styleguide CSS is loaded
  layoutEngine.activate();
  start();
});
