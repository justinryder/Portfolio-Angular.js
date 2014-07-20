(function(app){
	app.directive('semesterClassSummary', function(){
		return {
			restrict: 'E',
			templateUrl: 'html/directives/semester-class-summary.html',
			scope: {
				semester: '='
			}
		};
	})
}(portfolioApp));