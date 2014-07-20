(function(app){
	app.controller('ResumeController', ['$scope', '$http', function($scope, $http) {
		$scope.resume = "Resume";

		/*$scope.jobSummaries = [
			{
				'employer': {
					'name': 'MyWebGrocer',
					'website': '//www.mywebgrocer.com',
					'logoImageSrc': 'images/MyWebGrocer-logo.jpg'
				},
				'jobTitle': 'Junior Software Engineer',
				'startDate': 'June 2013',
				'endDate': null,
				'responsibilities': [
					'Develop new features for the Shopper Identity team.',
					'Work in a collaborative Agile environment with local and remote team members.',
					'Use BDD and TDD to ensure a quality product.'
				]
			}
		];*/

		$http.get('json/resumeJobSummaries.json').success(function(data){
			$scope.jobSummaries = data;
		});
	}]);
}(portfolioApp));