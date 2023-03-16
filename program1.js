$(document).click(function(){
    $("button").click(function(){
       
			// $(".main").hide("fast");
			$(".main").hide(5000,function(){
				$(".main").show(3000);
			});
	});
})

     
