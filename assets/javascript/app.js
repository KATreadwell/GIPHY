var superheroes = ["Wonder Woman", "Fairchild", "Batman", "Deadpool"];
var superhero = "wonder woman" 

//add a superhero button
$("#add-superhero").on("click", function(event){
    event.preventDefault();
    var superhero = $("#superhero-input").val().trim();
    console.log("button pushed")
    superheroes.push(superhero);
    addMovieButton();
    
    function addMovieButton(){
        var a = $("<button>");
        for (var i = 0; i < superheroes.length; i++){
        a.addClass("superhero");
        a.attr("superhero-name", superheroes[i]);
        a.text(superheroes[i]);
        $("#buttons-view").append(a);
        // $('#superhero-input').text("");
        }
    }
});

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

$(document).on("click", ".superhero", displaySuperheroInfo);
    
    



