/// <reference path="../../../typings/index.d.ts" />

import * as config from "./config";
import * as controllers from "./controllers";

let app = angular.module('tempCacheApp', ['ui.router']);

app

.config(config.appConfig)
.run(config.appRun)
.controller('appCtrl', controllers.AppCtrl);

