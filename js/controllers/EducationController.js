(function(app){
	app.controller('EducationController', ['$scope', '$http', function($scope, $http){
		$scope.education = "Education";

		$http.get('json/classesBySemester.json').success(function(data){
			$scope.classesBySemester = data;
		});
	}]);
}(portfolioApp));