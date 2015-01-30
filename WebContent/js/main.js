(function(){
	var app = angular.module("MainModule",[]);
	app.controller("TabController", function() {
		this.tab = {};
		this.setTab = function(setTab) {
	    	this.tab = setTab;
	    };
		this.isSet = function(checkTab) {
			return this.tab === checkTab;
		};	    
	});
	
	app.directive("orders", function(){
		return {
			restrict: "E",
			templateUrl: "content/components/orders.html"
		};
	});
	
	app.directive("menus", function(){
		return {
			restrict: "E",
			templateUrl: "content/components/menus.html"
		};
	});
	
	app.directive("staff", function(){
		return {
			restrict: "E",
			templateUrl: "content/components/staff.html"
		};
	});
	
	app.directive("restaurant", function(){
		return {
			restrict: "E",
			templateUrl: "content/components/restaurant.html"
		};
	});
	
	app.directive("analytics", function(){
		return {
			restrict: "E",
			templateUrl: "content/components/analytics.html"
		};
	});
})();