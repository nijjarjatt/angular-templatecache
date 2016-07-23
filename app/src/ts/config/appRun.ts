export function appRun($templateCache: ng.ITemplateCacheService) {
    $templateCache.put('home.html', 'Messages: {{ac.message}}');
}