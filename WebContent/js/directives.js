(function(){
	var app = angular.module("Directives",[]);
	
	app.directive("ordersShow", function(){
		return {
			restrict: "E",
			templateUrl: "content/components/orders.html"
		}
	});
	
	app.directve("menuShow", function(){
		return {
			restrict: "E",
			templateUrl: "content/components/menu.html"
		}
	});
	
	app.directive("Staff", function(){
		return {
			restrict: "E",
			templateUrl: "content/components/staff.html"
		}
	});
	
	app.directive("Restaurant", function(){
		return {
			restrict: "E",
			templateUrl: "content/components/restaurent.html"
		}
	});
	
	app.directive("Analytics", function(){
		return {
			restrict: "E",
			templateUrl: "content/components/analytics.html"
		}
	});
})();