function ChangePassword(){
	var isvalidated = true;
	$("#form-change-password").find("input").filter('[required]:visible').each(function(i, requiredField){

        if($(requiredField).val().trim() == '')
        {
            $(requiredField).closest(".form-group").addClass("has-error");
			isvalidated = false;
		}
		
		if(isvalidated) {
			if($("#txt-new-ps").val().trim() != $("#txt-conf-ps").val().trim()){
				$("#lbl-error").html("New Password and confirm password don't match!");
				isvalidated = false;
			}
			
		}
    });
	if(isvalidated){
		$("#form-change-password").submit();
	}
}