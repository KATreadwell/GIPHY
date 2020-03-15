var superheroes = ["Wonder Woman", "Fairchild", "Batman", "Deadpool"]; 
// var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=H8ekHWBMvA58EYCBvasMgLnzt5MaF9Fe&q=" + superhero + "&limit=10&offset=0&lang=en";
    

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
        }
    }
})


// $(document).on("click", ".superhero", displaySuperheroInfo);{
//         renderButtons();
// }

// function renderButtons(){
//     $("button").on("click", function(){
//         var superhero = $(this).attr("data-superhero");
//         var superheroes = ["Wonder Woman", "Fairchild", "Batman", "Deadpool"]; 
//         var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=H8ekHWBMvA58EYCBvasMgLnzt5MaF9Fe&q=" + superhero + "&limit=10&offset=0&lang=en";
    
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function(response){
//         console.log(JSON.stringify(response));
//         var results = response.data;
//         $("#superheroes-view").empty();
//         for (var i = 0; i < results.length; i++){
//             var gifDiv = $("<div>");
//             var rating = results[i].rating;
//             var p = $("<p>").text("Rating: " + rating);
//             superheroImage.attr("src", reults[i].images.fixed_height.url);
//             var superheroesView = '$("#superheroes-view")';
//             $("#superheroes-view").append('<img src="' + response.data.images + '">');
//         }
        
//     })
//     })
    // $("#buttons-view").empty();
    // for (var i=0; i<superheroes.length; i++){
    //     var a = $("<button>");
    //     a.addClass("superhero");
    //     a.attr("data-name", superheroes[i]);
    //     $("#buttons-view").append(a);
    //         }
    //     };
        
    


// function displaySuperheroInfo(){
//     var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=H8ekHWBMvA58EYCBvasMgLnzt5MaF9Fe&q=" + superhero + "&limit=10&offset=0&lang=en";
//     var superhero = $(this).attr("data-name");
//     var superheroes = ["Wonder Woman", "Fairchild", "Batman", "Deadpool"];

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function(response){
//         console.log(JSON.stringify(response));
//         $("#superheroes-view").empty();
//         var superheroesView = '$("#superheroes-view")';
//         $("#superheroes-view").appen('<img src="' + response.data.images + '">');
//     })
      
    
// }




