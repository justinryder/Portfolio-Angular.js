(function(app){
	app.directive('semesterClassSummary', function(){
		return {
			restrict: 'E',
			templateUrl: 'html/semester-class-summary.html',
			scope: {
				semester: '='
			}
		};
	})
}(portfolioApp));