angular.module('App').component('loginComp', {
	templateUrl: 'template/login-template.html',	
	controller: ["loginRegistrationService", function(loginRegistrationService){
		this.userLogin = function() {
			var response = loginRegistrationService.loginCheck(this.username, this.userpass);
			response.then(function suc(res){
				console.log(res.data.sts);
			}, function err(error) {
				console.log(error);
			});
		}
	}]
});