'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
//angular.module('myApp.services', []).
  //value('version', '0.1');
  
  

var module = angular.module('myApp.services', []);


module.service('GroupProjService', function () {
    
  // var groupedProjList=[{'id':'4','name':'bernie','age':'15'}];
      var groupedProjList=[{}];

   
   //********save projects
   
   this.save=function(project){
   	
   	  
   	groupedProjList.push(project);
   	
   	
   };
   
   
   this.clear=function(){
   	
   	  groupedProjList=[{}];
   	  return groupedProjList;
   	
   };
   
   this.list=function(){
   	
   	return groupedProjList;
   	
   };

});