/**
 * Created by arpit on 23/10/17.
 */

function ToggleFilters(){
    if($("#appls-filter-pane").css('display') == "none")
    {
        $("#appls-filter-pane").show();
        $("body").addClass("filter-open");
    }
    else{
        $("#appls-filter-pane").hide();
        $("body").removeClass("filter-open");
    }
}