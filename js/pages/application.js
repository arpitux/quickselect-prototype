$(document).ready(function(){

	$(".select2").select2({
		tags: true,
		tokenSeparators: [',',' '],
		width: '100%',
		multiple: true
	});

	$(".form-group input").on("focus", function(){
		$(this).parent().parent().removeClass("has-error");
	})

	$("#brokers-list .broker-card").on('click',function(){
		$("#brokers-list .broker-card").removeClass("selected");
		$(this).addClass("selected");
	});
});

function SaveApplCard(btn){
	var card_id = $(btn).data("closecard");
	var isvalidated = true;
	$("#form-" + card_id).find("input,textarea,select").filter('[required]:visible').each(function(i, requiredField){

        if($(requiredField).val()=='')
        {
            $(requiredField).closest(".form-group").addClass("has-error");
			isvalidated = false;
        }
    });
	if(isvalidated){
		$(btn).addClass("btn-primary").removeClass("btn-danger");
		$("#" + card_id).removeClass("active").addClass("collapsed").addClass("complete");
		$("#" + card_id + " > .card-body").slideUp();
	}
	else{
		$(btn).removeClass("btn-primary").addClass("btn-danger");
		var top_dist = $(window).width() < 768 ? 80 :138;
		$('html,body').animate({
			scrollTop: $("#" + card_id).offset().top - top_dist},
		'slow');
	}
}

function ToggleApplCard(link){
	var open_card_id = $(link).data("opencard");
	$(".appl-card:not('#"+ open_card_id +"')").removeClass("active").addClass("collapsed");
	$(".appl-card:not('#"+ open_card_id +"') > .card-body").slideUp();

	if($("#" + open_card_id).hasClass("active")){
		$("#" + open_card_id).addClass("collapsed").removeClass("active");
		$("#" + open_card_id + " > .card-body").slideUp();
	}
	else
	{
		$("#" + open_card_id).removeClass("collapsed").addClass("active").slideDown();
		$("#" + open_card_id + " > .card-body").slideDown(function(){
			var top_dist = $(window).width() < 768 ? 80 : 138;
			$('html,body').animate({
				scrollTop: $("#" + open_card_id).offset().top - top_dist},
			'slow');
		});
		 
	}
}

function EditApplName() {
	$("#appl-name-view-pane").hide();
	$("#appl-name-edit-pane").show();
}
function SaveApplName() {
	$("#appl-name-edit-pane").hide();
	$("#appl-name-view-pane").show();
}
function CancelApplNameEdit(){
	$("#appl-name-edit-pane").hide();
	$("#appl-name-view-pane").show();
}


