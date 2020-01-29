$(document).ready(function() {



    $('form').submit(function() {

        var city = $("textarea").val();
        console.log(city);

        $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=ec0deef819530a54ac3ee15b10286e28", function(data){
        console.log(data);
        console.log(data['main']['temp']);
        $("h2").html(data['main']['temp']);
    }, 'json');
        return false;
    });
});