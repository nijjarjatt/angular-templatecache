/// <reference path="../../../typings/index.d.ts" />

import * as config from "./config";
import * as controllers from "./controllers";

let app = angular.module('sampleApp', ['ui.router']);

app

.config(config.appConfig)
.controller('appCtrl', controllers.AppCtrl);

