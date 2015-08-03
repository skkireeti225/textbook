guruApp.controller("WorkbenchCtrl", ['$scope', '$state', '$stateParams', '$sce', function($scope, $state, $modal, $http, $stateParams, $sce) {
	console.log($scope.guruObj.workbenches); // [{ wname:'', num:2, des:'', notebook: 'tab1',  workflow:'tab2', jenkins:'tab3' }]
	var wbs = $scope.guruObj.workbenches[$scope.guruObj.currWorkbench]; // wbs = { wname:'', num:2, des:'', notebook: 'tab1',  workflow:'tab2', jenkins:'tab3' }
	console.log(wbs);
	function getWorkbenchViews() {
		$scope.wbviews = {};  
		angular.forEach(wbs, function(v, k ) { 
			console.log(k +  ' ' + v);
			if(k === 'notebook' || k === 'workflow' || k === 'jenkins')
			$scope.wbviews[k] = v;
		});
	}
	getWorkbenchViews();
	
	$scope.wbview = $scope.wbviews.notebook;
	$scope.updateView = function(name) {
		$scope.wbview = $scope.wbviews[name];
	};
	console.log(typeof $scope.wbview);
	
}]);
;guruApp.controller("MainCtrl", ['$scope', '$state', '$modal', '$http','$sce',  function($scope, $state, $modal, $http, $sce) {
   $scope.guruObj = {};
   var guruObj = $scope.guruObj;
   
   $scope.go = function (state) {
       $state.go(state);
   };
   $scope.back = function (state) {
       $state.go(state);
   };
  
   guruObj.notebooks =
   [{
	  
	      Notebook: 'Textbook1'
	    
	      },
	      {
	     
	      Notebook: 'Textbook2',
	      
	      },
	      {
	      
	      Notebook: 'Textbook3',
	      
	      },
	        {
	    
	      Notebook: 'Textbook4',
	     
	      },
	      {
	      
	      Notebook: 'Textbook5',
	      
	      }]; 
   
   
   guruObj.workbenches = [{
	      id: 1,
	      Name: 'JAVASCRIPT',
	      description:'This is my JAVASCRIPT work bench',
	      Clustersize:4,
	      vd:'4/24/15',
	      status:'Available'
	      },
	      {
	      id: 2,
	      Name: 'JQUEERY',
	      description:'This is my JQUEERY work bench',
	      Clustersize:2,
	      status:'Available'
	      },
	      {
	      id: 3,
	      Name: 'ANGULAR JS',
	      description:'This is my ANGULAR JS work bench',
	      Clustersize:0,
	      status:'NA'
	      },
	        {
	      id: 4,
	      Name: 'GRUNT JS',
	      description:'This is my GRUNT JS work bench',
	      Clustersize:10,
	      status:'Available'
	      },
	      {
	      id: 5,
	      Name: 'D3.JS',
	      description:'This is my D3.JS work bench',
	      Clustersize:0,
	      status:'NA'
	      }];
   
   
   var ModalInstanceCtrl = function ($scope, $modalInstance, pData) {

	   	  $scope.data = pData;
	   	  $scope.ok = function () {
	   		  
	   	    $modalInstance.close();
	   	  };

	   	  $scope.cancel = function () {
	   	    $modalInstance.dismiss('cancel');
	   	  };
	   	};
   
   $scope.workbenchDia = function(){
	   var tempelateurl = "app/views/workbenchCreation.html";
	   
	//   var controller = "ModalInstanceCtrl";
	   
	   var success = function(){
		   
		   console.log($scope.data);  
	   };
	   
	   var failure = function(){
		   
		   console.log('Modal dismissed at: ' + new Date());
	   };
	   
	   $scope.openDialog(tempelateurl, ModalInstanceCtrl, success, failure);
	      
   };
   
   
   $scope.schedular = function(){
	   
 var tempelateurl = "app/views/model.html";
	   
	 //  var controller = "ModalInstanceCtrl";
	   
	   var success = function(){
		   
		   console.log($scope.data);  
	   };
	   
	   var failure = function(){
		   
		   console.log('Modal dismissed at: ' + new Date());
	   };
	   
	   $scope.openDialog(tempelateurl, ModalInstanceCtrl,  success, failure);
	   
	   
   };
   

     
   $scope.openDialog = function(tempelateurl, controller, success, failure) {
	   
	   
	   
	   $scope.data = {
			    name:'',
	    		time:'',
	    		date:'',
	    		repeat:''	
	    };
	    
	 var modalInstance = $modal.open({
	        templateUrl:tempelateurl,
	        controller: controller,
	        size:'sm',
	        resolve: {
	        	pData: function()  {
	        		return $scope.data;
	        	}
	          }
	        
	      }); 

	    
	      modalInstance.result.then(function () {
	    	  success();
	       }, function () {
	    	   failure();
	      }); 
	    };
	    

	 
}]);
;guruApp.service('ModelService', function(){
     
    this.submitData = function(data) {
    	  var req = {
    		         method: 'GET',
    		         url: 'http://example2.com',
    		         headers: {
    		           'Content-Type': undefined
    		         },
    		         bdata: data
    		    };
    		     
    		      $http(req).success(function(){}).error(function(){});
    	   };
    	
    
   
 
});
;var guruApp = angular.module('guruApp', ['ui.router','ui.bootstrap']);

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
