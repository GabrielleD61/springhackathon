/*global $*/
$( document ).ready(function() {
        
        $.get("header.html", function(data){
            $("#header").html(data);
        })
    
    $.get("head.html", function(data){
            $("#head").replaceWith(data);
        })
     $(".clothing").click(function() {
         $(this).toggleClass("selected")
    
     });
    
    
    
});
