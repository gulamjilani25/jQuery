$(document).ready(function(){
    $('#sform').submit(function(){
        var name = $('#sname').val();
        var classname = $('#sclass').val(); 
        var country = $('#scountry').val(); 

        alert("Hello "+ name + " Class : " + classname + " country  " + country);
});
});