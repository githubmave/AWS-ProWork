

     //*********Project category*****************
     
     
     var JSONObj_projcat={};
     var JSONObj_projs={};

     
      //*********Projects category*****************
    
$.getJSON('projectcat.json', function(data) {
		
		    JSONObj_projcat=data.jobcategory;
			var output = '<ul>';
			$.each(JSONObj_projcat, function(key, val) {
				//output += '<li>' + val.name + '</li>';
				
		     output += '<li>' +val.TITLE +"***,"+ val.ID + "***,"+val.DELETED +'</li>';

				
			});
			output +='</ul>';
		
			$('#update').prepend(output);
        });
        
     //*********Projects*****************
        
$.getJSON('ProWorkJson.json', function(data) {
	
	        JSONObj_projs=data.job;
	        
			var output = '<ul>';
			$.each(JSONObj_projs, function(key, val) {
				output += '<li>' +val.DUEDATE +"***,"+ val.PROJECTCATID + "***,"+val.STARTDATE +"***,"+val.COMPANYCODE +"***,"+ val.JOBTITLE + "***,"+val.COMPANYNAME +"***,"+val.JOBPRIORITY + "***,"+val.JOBID + "***,"+val.CONTACTNAME +"***,"+val.JOBNUMBER +'</li>';
				
			});
			output +='</ul>';
			$('#update3').prepend(output);
				//	$('#update4').prepend('asfdafdafd');

	
        });
	
	//	$('#update4').prepend('asfdafdafd');

	  
	//**********lookup projects, print out projects title
	
 
 $.getJSON('projectcat.json', function(data) {
		
		   // JSONObj_projcat=data.jobcategory;
			
			//$.getJSON('ProWorkJson.json', function(data1) {
			
			//	$.each(JSONObj_projcat, function(key1, val1) {
					var output4 = '<ul>';
	
                    $.each(JSONObj_projs, function(key2, val2) {
                    	
                    	if(val2.PROJECTCATID==27){
    				      output4 += '<li>' + val2.JOBTITLE + '</li>';
					      
					    }  
				   });
	               output4 +='</ul>';
				    $('#update4').prepend(output4);
				    
				    //*******************
				    
				    var output5 = '<ul>';
	
                    $.each(JSONObj_projs, function(key2, val2) {
                    	
                    	if(val2.PROJECTCATID==2){
    				      output5 += '<li>' + val2.JOBTITLE + '</li>';
					      
					    }  
				   });
	               output5 +='</ul>';
				    $('#update5').prepend(output5);
				    
				   //**************** 
				   
				       var output6 = '<ul>';
	
                    $.each(JSONObj_projs, function(key2, val2) {
                    	
                    	if(val2.PROJECTCATID==4){
    				      output6 += '<li>' + val2.JOBTITLE + '</li>';
					      
					    }  
				   });
	               output6 +='</ul>';
				    $('#update6').prepend(output6);
				    
				    //***********
				    var output7 = '<ul>';
	
                    $.each(JSONObj_projs, function(key2, val2) {
                    	
                    	if(val2.PROJECTCATID==9){
    				      output7 += '<li>' + val2.JOBTITLE + '</li>';
					      
					    }  
				   });
	               output7 +='</ul>';
				    $('#update7').prepend(output7);
				    
				    //*****************
				    
				      var output8 = '<ul>';
	
                    $.each(JSONObj_projs, function(key2, val2) {
                    	
                    	if(val2.PROJECTCATID==11){
    				      output8 += '<li>' + val2.JOBTITLE + '</li>';
					      
					    }  
				   });
	               output8 +='</ul>';
				    $('#update8').prepend(output8);
				    
				    
				    
      });
    
    
    
			


