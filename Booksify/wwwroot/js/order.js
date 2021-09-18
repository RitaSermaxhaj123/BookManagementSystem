var dataTable;

$(document).ready(function () {
    var url = window.location.search;
    loadDataTable("GetOrderList?status=all");
});


function loadDataTable(url) {
    dataTable = $('#tblData').DataTable({
        "ajax": {
            "url": "/Admin/order/" + url
        },
        "columns": [
            { "data": "id", "width": "13%" },
            { "data": "name", "width": "18%" },
            { "data": "phoneNumber", "width": "18%" },
            { "data": "applicationUser.email", "width": "18%" },
            { "data": "orderTotal", "width": "18%" }
        ]
    });
}