

$.ajax({
    url:("https://randomuser.me/api/"),
    dataType:'json',
    success: function(data){
        var userFirstName = data.results[0].name.first;
        var userLastName = data.results[0].name.last;
        var userPhoto = data.results[0].picture.large;
        var userState = data.results[0].location.state;
        console.log(userFirstName);
        $('body').append("<h1>" + userFirstName + " " + userLastName + "<br>"+ "<img src ="+ userPhoto +"></img>" + "<br>"+ "State: "+userState + "</h1>");
        var namelength = userFirstName.length;

        $('body').append("<h1>" + "User's first name is " + userFirstName + " and their name is " + namelength + " letters long.  <h1>");
    }
    
});
