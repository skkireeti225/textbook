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
