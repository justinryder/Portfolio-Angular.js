(function(app){
	app.controller('MenuController', ['$scope', '$log', '$http', function ($scope, $log, $http) {
		$scope.title = 'Menu';

		$http.get('json/menuLinks.json')
			.success(function(data){
				$scope.links = data;
			})
			.error(function(data){
				$log.error('Failed to load menu links.');
				$log.log(data);
			});
	}]);
}(portfolioApp));