var superheroes = ["Venom", "Wonder Woman", "Batman", "Deadpool"];

$("#add-superhero").on("click", function(event){
    event.preventDefault();
    var superhero = $("#superhero-input").val().trim();
    superheroes.push(superhero);
    addSuperheroButton();  
});

$("#buttons-view").on("click", ".superhero", displaySuperheroInfo);
    
function addSuperheroButton(){
    $("#buttons-view").empty();
    for (var i = 0; i < superheroes.length; i++){
        var a = $("<button>");
        a.addClass("superhero");
        a.attr("superhero-name", superheroes[i]);
        a.text(superheroes[i]);
        $("#buttons-view").append(a);
        $('#superhero-input').val("");
    }
}

addSuperheroButton();

function displaySuperheroInfo (e){
    e.stopPropagation();
    var superhero = $(this).attr("superhero-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=H8ekHWBMvA58EYCBvasMgLnzt5MaF9Fe&q=" + superhero + "&limit=10&offset=0&lang=en";
    console.log("superhero: " , superhero);
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
                superheroImage.attr("still", results[i].images.fixed_height_still.url);
                superheroImage.attr("src", results[i].images.fixed_height_still.url);
                superheroImage.attr("animate", results[i].images.fixed_height.url);
                superheroImage.attr("state", "still");
                gifDiv.prepend(p);
                gifDiv.prepend(superheroImage);
                $("#superhero-view").prepend(gifDiv);
                }
        })
}      

$("#superhero-view").on("click", "img", function(){
    var state = $(this).attr("state");
    if (state === "still"){
        $(this).attr("src", $(this).attr("animate"));
        $(this).attr("state", "animate");
        }
    else{
        $(this).attr("src", $(this).attr("still"));
        $(this).attr("state", "still");
        }
})
    



