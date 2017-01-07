angular.module('App').service("loginRegistrationService", ["$q","$http", function($q, $http) {
	this.loginCheck = function(user, pass) {
		var data = $.param({
			user: user,
			pass: pass
		});
		var config = {
			headers : {
				'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
			}
		};

		return $http.post('http://localhost/routing/server/api/login', data, config);
	};
}]);
