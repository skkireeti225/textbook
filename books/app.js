var guruApp = angular.module('guruApp', ['ui.router','ui.bootstrap']);

guruApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/notebook');
    
    $stateProvider
	    
	    .state('workbench', {
	        url: '',
	        templateUrl: 'app/views/workbench.html',
	        controller: ''
	    })  
        .state('notebook', {
            url: '',
            templateUrl: 'app/views/notebook.html'
        });
        
        
});
