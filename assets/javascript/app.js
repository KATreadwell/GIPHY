var superheroes = ["Wonder Woman", "Fairchild", "Batman", "Deadpool"];
var superhero = 0;

$("#add-superhero").on("click", function(event){
    event.preventDefault();
    var superhero = $("#superhero-input").val().trim();
    superheroes.push(superhero);
    addSuperheroButton();
    
    function addSuperheroButton(){
        var a = $("<button>");
        for (var i = 0; i < superheroes.length; i++){
        a.addClass("superhero");
        a.attr("superhero-name", superheroes[i]);
        a.text(superheroes[i]);
        a.attr("data-state", "still");
        $("#buttons-view").append(a);
        // $('#superhero-input').text("");
        }
    }
});

$(document).on("click", ".superhero", displaySuperheroInfo);
    

function displaySuperheroInfo (){
    var superhero = $(this).attr("superhero-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=H8ekHWBMvA58EYCBvasMgLnzt5MaF9Fe&q=" + superhero + "&limit=10&offset=0&lang=en";
    
    $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
            var results = response.data;
            $("#superhero-view").empty();
            for (var i = 0; i < results.length; i++) {
                // $(".gif").on("click", function(){
                //     var state = $(this).attr("data-state");
                //     if (state === "still"){
                //         $(this).attr("src", $(this).attr("data-animate"));
                //         $(this).attr("data-state", "animate");
                //     }
                //     else{
                //         $(this).attr("src", $(this).attr("data-still"));
                //         $(this).attr("data-state", "still");
                //     }
                // })
                var gifDiv = $("<div>");
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);
                var superheroImage = $("<img>");
                superheroImage.attr("src", results[i].images.fixed_height.url);
                gifDiv.prepend(p);
                gifDiv.prepend(superheroImage);
                $("#superhero-view").prepend(gifDiv);
                }
        })
}      


    
    



