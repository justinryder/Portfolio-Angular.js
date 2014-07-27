(function(app){
	app.controller('ProjectController', ['$scope', '$log', '$http', '$routeParams', function($scope, $log, $http, $routeParams){
		$http.get('json/projects/' + $routeParams.project + '.json')
			.success(function(data){
				$scope.project = data;
			})
			.error(function(data){
				$log.error('Failed to load project ' + $routeParams.project + '.');
				$log.log(data);
			});
	}]);
}(portfolioApp));