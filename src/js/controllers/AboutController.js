(function(app){
	app.controller('AboutController', ['$scope', '$log', '$http', function ($scope, $log, $http) {
		$http.get('json/contactLinks.json')
			.success(function(data){
				$scope.contactLinks = data;
			})
			.error(function(data){
				$log.error('Failed to load contactLinks.');
				$log.log(data);
			});

		$http.get('json/technicalExperience.json')
			.success(function(data){
				$scope.programmingExperience = data.programming;
				$scope.softwareExperience = data.software;
				$scope.osExperience = data.operatingSystems;
			});
	}]);
}(portfolioApp));