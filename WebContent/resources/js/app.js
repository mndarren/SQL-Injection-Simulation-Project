$(document).ready(function() {
 
    //Stops the submit request
    $("#formWithoutProtection").submit(function(e){
           e.preventDefault();
    });
    
    //checks for the button click event
    $("#buttonWithoutProtection").click(function(e){
           
            //get the form data and then serialize that
//            dataString = $("#formWithoutProtection").serialize();
            
            //get the form data using another method 
            var userName = $("input#userName").val(); 
            var userPass = $("input#userPassword").val();
            var protection = $('input[name=protection]:checked', '#formWithoutProtection').val();
            
            var s = {
            		userName: userName,
            		userPass: userPass,
            		protection: protection
            };
            
            //make the AJAX request, dataType is set to json
            //meaning we are expecting JSON data in response from the server
            $.ajax({
                type: "POST",
                url: "UserInformation",
                data: s,
                dataType: "json",
                
                //if received a response from the server
                success: function( data, textStatus, jqXHR) {
                    //our country code was correct so we have some information to display
                     if(data.success){
                    	 $("#ajaxResponse").html("");
//                    	 $("#ajaxResponse").append("protection = " + protection);
                    	 $.each(data.users, function(index,user){
                             $("#ajaxResponse").append("<b>User Name:</b> " + user.userId + " ");
                             $("#ajaxResponse").append("<b>User Pass:</b> " + user.userPass + " ");
                             $("#ajaxResponse").append("<b>Type:</b> " + user.type + " ");
                             $("#ajaxResponse").append("<b>Account Balance:</b> " + user.accountBalance + "<br>");
                    	 });
                     } 
                     //display error message
                     else {
                         $("#ajaxResponse").html("<div><b>User ID or password in Invalid!</b></div>");
                     }
                },
                
                //If there was no resonse from the server
                error: function(jqXHR, textStatus, errorThrown){
                     console.log("Something really bad happened " + textStatus);
                      $("#ajaxResponse").html(jqXHR.responseText);
                },
                
                //capture the request before it was sent to server
                beforeSend: function(jqXHR, settings){
                    //adding some Dummy data to the request
                    settings.data += "&dummyData=whatever";
                    //disable the button until we get the response
                    $('#buttonWithoutProtection').attr("disabled", true);
                },
                
                //this is called after the response or error functions are finsihed
                //so that we can take some action
                complete: function(jqXHR, textStatus){
                    //enable the button 
                    $('#buttonWithoutProtection').attr("disabled", false);
                }
      
            });        
    });
 
});