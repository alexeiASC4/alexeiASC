$(document).ready(function(){

$.ajax({
    url: "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=1399194cadd59d8cc458b8fc47aaa502",
    dataType: 'json',
    success: function (data){
        console.log(data);
    }
})
});