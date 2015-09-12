$(document).ready(function () {
    var nameEle = $("#name");
    var nameVal = $("#nameValue");
    var pets = $("#pets");

    nameEle[0].addEventListener('keyup', nameChange);

    function nameChange() {
        nameVal.html(this.value)
    }

    function init() {
        $.ajax({
            url: "/api/pets", method: "get", success: function (data) {
                for (var i = 0; i < data.length; i++) {
                    pets.append($("<li>").html(data[i].name));
                }
            }
        })
    }

    init();
});