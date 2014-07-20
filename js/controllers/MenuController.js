(function(app){
	app.controller('MenuController', function ($scope, $http) {
		$scope.title = 'Menu';

		$http.get('json/menuLinks.json')
			.success(function(data){
				console.log(data);
				$scope.links = data;
			})
			.error(function(data){
				$scope.links = [{name:'Links failed to load.', url:'#/'}];
			});
	});	
}(portfolioApp));