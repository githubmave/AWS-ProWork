'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1',  function($scope,$http,$routeParams,GroupProjService) {

                 $scope.selectedCat={};

                 $scope.selectedProj={};
                 
                 $scope.routeId=$routeParams.itemRID;
                 
                 $scope.test="xxxxxxxxxx";
                 
                // $scope.testMe=GroupProjService.list();
                 $scope.groupedProjList=GroupProjService.list();
                 
             //    $scope.groupedProjList=[{"ID":"2","Name":"Jonathan","Age":"45"}];

     //*****get json data************************************
       $http.get('js/projectcat.json').success(function(data){
       	
       	  $scope.projcatList=data.jobcategory;

       });
 
 //**********get json data
       $http.get('js/ProWorkJson.json').success(function(data){
       	
       	  $scope.projectList=data.job;
         
       });
 
        
 //********show category details " button click call*******************************************
 
          $scope.groupingProj=function(){
          	
          	
          	         if($scope.selectedCat.ID!=""){
			                 	
                        $scope.groupedProjList=GroupProjService.clear();
			                 	   
			         }
                 	
                 	angular.forEach($scope.projectList,function(s){
                 		
   		                 	   if(s.PROJECTCATID==$scope.selectedCat.ID){
			                 	    GroupProjService.save(s);
				                 	   
			                 	   } 	
			           
                  });
                  
       };    
       
       
 //******** show projects details link click*******
 
       
  })
  
  
  
  
  .controller('MyCtrl2', function($scope,GroupProjService) {
  	
  	$scope.groupedProjList2=GroupProjService.list();
  	
  	

  });
