/**
 * Created by arpit on 23/10/17.
 */

function ToggleContacts() {
    $(".m-sidebar").toggleClass("expanded");
}

$(document).ready(function(){
    $(".dictionaries-list a[data-toggle='tab']").on('click', function(){
        $(".dictionaries-list a[data-toggle='tab']").removeClass("active");
        $(this).addClass("active");
        $(".m-sidebar").removeClass("expanded");
    });
});