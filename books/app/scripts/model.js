guruApp.service('ModelService', function(){
     
    this.submitData = function(data) {
    	  var req = {
    		         method: 'GET',
    		         url: 'http://example2.com',
    		         headers: {
    		           'Content-Type': undefined
    		         },
    		         bdata: data
    		    };
    		     
    		      $http(req).success(function(){}).error(function(){});
    	   };
    	
    
   
 
});
