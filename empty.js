$('document').ready(function(){
    $('#emptybtn').click(function(){
        $('#box').empty();
        $('#removebtn').click(function(){
            $('#box').remove();
    });
});
$('#removebtn').click(function(){
    $('#box').remove();
});

});
