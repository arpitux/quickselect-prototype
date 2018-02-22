/**
 * Created by arpit on 23/10/17.
 */

function ToggleContacts() {
    $(".m-sidebar").toggleClass("expanded");
}

$(document).ready(function () {
    $(".dictionaries-list a[data-toggle='tab']").on('click', function () {
        $(".dictionaries-list a[data-toggle='tab']").removeClass("active");
        $(this).addClass("active");
        $(".m-sidebar").removeClass("expanded");
    });

    /*********** Property Details Start ************/

    var json_properties = [
        { "name": "Property 1", "order": 1 },
        { "name": "Property 2", "order": 2 },
        { "name": "Property 3", "order": 3 },
        { "name": "Property 4", "order": 4 },
        { "name": "Property 5", "order": 5 },
        { "name": "Property 6", "order": 6 },
        { "name": "Property 1", "order": 7 },
        { "name": "Property 2", "order": 8 },
        { "name": "Property 3", "order": 9 },
        { "name": "Property 4", "order": 10 },
        { "name": "Property 5", "order": 11 },
        { "name": "Property 6", "order": 12 }
    ];
    
    $("#tbl_properties").jsGrid({
        width: "100%",
        data: json_properties,
        sorting: false,
        heading: false,
        editing: true,
        autoload: true,
        rowClass: function (item, itemIndex) {
            return "client-" + itemIndex;
        },
        rowClick: function(){
            return false;
        },
        editRowRenderer: function (item, itemIndex) {
            var grid = this;
            var $nameEditor = $("<input class='form-control'>").attr("type", "text").attr("name", "FirstName").val(item.name);

            var $updateButton = $("<button>").attr("type", "button").html("<i class='zmdi zmdi-check'></i>").addClass("btn btn-success btn-sm m-r-5");
            var $cancelButton = $("<button>").attr("type", "button").html("<i class='zmdi zmdi-close'></i>").addClass("btn btn-default btn-sm");

            $updateButton.on("click", function () {
                grid.updateItem(item, { name: $nameEditor.val() });
            });

            $cancelButton.on("click", function () {
                grid.cancelEdit();
            });

            return $("<tr class='jsgrid-edit-row'>")
                .append($("<td class='jsgrid-cell' width='100%'>").append($nameEditor))
                .append($("<td class='jsgrid-cell jsgrid-control-field jsgrid-align-center' style='width: 100px; max-width: 100px'>").append($updateButton)
                .append($cancelButton));
        },
        fields: [
            { name: "name", type: "text", validate: "required", width: '100%' },
            { name: "order", type: "number", editing: false, visible: false },
            {
                type: "control",
                width: 100,
                itemTemplate: function (value, item) {

                    //customizing default edit and delete button
                    var $result = $([]);

                    var grid = this._grid;
                    $result = $result.add(
                        $("<button>")
                            .addClass("btn btn-default btn-outline btn-sm m-r-5")
                            .html("<i class='zmdi zmdi-edit'></i>")
                            .attr({
                                type: "button",
                                title: "Edit"
                            })
                            .on("click", function (e) {
                                grid.editItem(item);
                                e.stopPropagation();
                            })
                    );

                    $result = $result.add(
                        $("<button>")
                            .addClass("btn btn-default btn-sm")
                            .html("<i class='zmdi zmdi-delete'></i>")
                            .attr({
                                type: "button",
                                title: "Delete"
                            })
                            .on("click", function (e) {
                                grid.deleteItem(item);
                                e.stopPropagation();
                            })
                    );

                    return $result;
                }
            }
        ],
        onRefreshed: function () {
            var $gridData = $("#tbl_properties .jsgrid-grid-body tbody");

            $gridData.sortable({
                update: function (e, ui) {
                    // array of indexes
                    var clientIndexRegExp = /\s*client-(\d+)\s*/;
                    var indexes = $.map($gridData.sortable("toArray", { attribute: "class" }), function (classes) {
                        return clientIndexRegExp.exec(classes)[1];
                    });

                    // arrays of items
                    var items = $.map($gridData.find("tr"), function (row) {
                        return $(row).data("JSGridItem");
                    });
                    console && console.log("Reordered items", items);
                }
            });
        },    // on done of re-order
        onInit: function(args) {
            $("#tbl_properties_container").mCustomScrollbar("scrollTo", "bottom");
        },
        onItemUpdating: function(args) {},   // before controller.updateItem
        onItemUpdated: function(args) {},    // on done of controller.updateItem
        onItemDeleting: function(args) {},   // before controller.deleteItem
        onItemDeleted: function(args) {},    // on done of controller.deleteItem

        onError: function(args) {},          // on fail of any controller call
    });

    $("#btn_add_property").on('click', function() {
        var newData = {
            "name": $("#txt_property").val(),
            "order": 1000 //calculate new order
        }
        $("#tbl_properties").jsGrid("insertItem", newData);
        $("#tbl_properties_container").mCustomScrollbar("scrollTo", "bottom");
    });

    /*********** Property Details End ************/

});
