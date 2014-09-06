(function(app){
	app.directive('resumeJobSummary', function(){
		return {
			restrict: 'E',
			templateUrl: 'html/resume-job-summary.html',
			scope: {
				job: '='
			}
		};
	});
}(portfolioApp));