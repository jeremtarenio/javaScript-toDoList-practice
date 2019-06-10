/*
$("li").click(function () {
    //changing css properties
    
    if ($(this).css("color") == "rgb(0, 0, 0)") {
        console.log("true");
        $(this).css({
            color: "white",
            textDecoration: "none"
        });
    } else {
        $(this).css({
            color: "black",
            textDecoration: "line-through"
        });
    }

});
*/

/*$("body").on("keypress", function(event){
    console.log(event.which);
})*/

/*$("li").click(function () {
    $(this).toggleClass("completed");
});*/

$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

$("ul").on("click", ".delete", function (event) {
    //.parent() means parent tag
    $(this).parent().fadeOut(350, function () {
        //post event
        $(this).remove();
    });
    event.stopPropagation(); //prevents event bubbling
})

$("input").on("keypress", function (event) {
    if (event.which == 13) {
        var toDo = $(this).val();

        $("ul").append("<li><span class=\"delete\"><i class=\"far fa-trash-alt\"></i> </span>" + toDo + "</li>");

        $(this).val("");
    }


})
