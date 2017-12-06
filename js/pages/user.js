/**
 * Created by arpit on 23/10/17.
 */
function SaveUser() {
    var isvalidated = true;
    $("#form-user").find("input,textarea,select").filter('[required]:visible').each(function (i, requiredField) {

        if ($(requiredField).val() == '') {
            $(requiredField).closest(".form-group").addClass("has-error");
            isvalidated = false;
        }
    });

    if(isvalidated) {
        //Save User
    }
}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#user-img')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}