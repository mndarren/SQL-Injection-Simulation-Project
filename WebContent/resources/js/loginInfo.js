
$(document).ready(function(){
	$("#userInfoSubmit").click(function(){
		
		var userName = $("#userNameInput").val();
		var userPass = $("#userPasswordInput").val();
		
		if(userName === "" || userPass === ""){
			alert("Not enough information!");
			return;
		}
		
		$.get('GreetingServlet',{"userName": userName, "userPass": userPass},
				function(responseText){
			$("#resultArea").empty()
							.text(responseText);
		});
	});
});