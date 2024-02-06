import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
var liveServer = require("live-server");

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
