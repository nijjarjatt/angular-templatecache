export interface IAppCtrl {
	message: string;
};

export class AppCtrl implements IAppCtrl{	
	message: string;

	static $inject: any[] = ['$templateCache'];

	constructor(private $templateCache: ng.ITemplateCacheService){
		this.message = 'Message';
		console.log($templateCache.get('./views/home.html'));
	}
}