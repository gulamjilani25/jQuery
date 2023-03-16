$(document).ready(function(){
    $('#hidebtn').click(function(){
       /*$('#box').hide("slow");*/
       $('#box').hide(2000,function(){
           console.log("now it is hidden");
       /*$('#box').hide("fast");*/
       /*$('#box p').hide();*/
   
    });
   });
   
    $('#showbtn').click(function(){
       /*$('#box').show();*/
       $('#box').show(2000,function(){;
       /*$('#box').show("fast");*/
       /*$('#box p').show();*/
       console.log("now it is show");
   
   });
   
   });
   
   $('#togglebtn').click(function(){
       $('#box').toggle(2000);
       console.log("Hey toogle");
   
   });
   
   });