
$(document).ready(function(){
    $("#logo").click(function(){
        $("main").load("/main.html main");
    });
  });

  $(document).ready(function(){
    $("#about").click(function(){
        $("main").load("/about.html main");
    });
  });
  
  $(document).ready(function(){
    $("#contact").click(function(){
        $("main").load("/contact.html main");
    });
  });
 