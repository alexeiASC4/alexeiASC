
var userNat;
$.ajax({
    url: ("https://randomuser.me/api/"),
    dataType: 'json',
    success: function (data) {
        var userFirstName = data.results[0].name.first;
        var userLastName = data.results[0].name.last;
        var userPhoto = data.results[0].picture.large;
        var userState = data.results[0].location.state;
        var userNat = data.results[0].nat;
        console.log(userFirstName);
        $('body').append("<h1>" + userFirstName + " " + userLastName + "<br>" + "<img class='img-circle' src =" + userPhoto + "></img>" + "<br>" + "State: " + userState + "</h1>");
    $.ajax({  
    url: ("https://restcountries.eu/rest/v2/alpha/"+ userNat),
    dataType:'json',
    success: function (data){
        var natName=data.name;
        $('body').append("<h1>" + "Country: " + natName + "</h1>");
    }
    
    });
    }

});

