import * as controllers from "../controllers";

export function appConfig($stateProvider: ng.ui.IStateProvider, 
	$urlRouterProvider: ng.ui.IUrlRouterProvider) {

    $stateProvider

    .state('home', {
        url: '/',
        controller: controllers.AppCtrl,
        controllerAs: 'ac',
        templateUrl: 'home.html'
    })

    $urlRouterProvider.otherwise("/");
}