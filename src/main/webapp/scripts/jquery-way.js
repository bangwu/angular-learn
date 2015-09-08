$(document).ready(function(){
    var nameEle = $("#name");
    var nameVal = $("#nameValue");

    nameEle[0].addEventListener('keyup', nameChange);

    function nameChange() {
        nameVal.html(this.value)
    }
});