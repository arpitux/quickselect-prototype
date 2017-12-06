/**
 * Created by arpit on 23/10/17.
 */

function ToggleFilters(){
    if($("#users-filter-pane").css('display') == "none")
    {
        $("#users-filter-pane").show();
        $("body").addClass("filter-open");
    }
    else{
        $("#users-filter-pane").hide();
        $("body").removeClass("filter-open");
    }
}