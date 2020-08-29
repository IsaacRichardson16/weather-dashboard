      $(document).ready(function () {
    $('#searchBtn').click(function() {
        var city = $("#city-search").val();

        //current day ajax request
        $.ajax({
            dataType: "JSON",
            type: "GET",
            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial' + '&APPID=c7d2a279fe29531afb14530d758718b6',
            success: function(response) {
              
                var cityLat = response.coord.lat
                var cityLon = response.coord.lon

            
                $("#temp-current").text("Temperature: " + (response.main.temp) + "°F")
                $('#city-name-current').text("City Name: " + (response.name))
                $('#humidity-current').text("Humidity: " + (response.main.humidity) + "%")
                $('#wind-current').text("Wind Speed: " + (response.wind.speed) + " mph")

                // latitiude and logitude, 5 day weather ajax request
                $.ajax({
                    dataType: "JSON",
                    type: "GET",
                    url: 'https://api.openweathermap.org/data/2.5/onecall?lat=' + cityLat + '&lon=' + cityLon + '&units=imperial&exclude=hourly,minutely&APPID=c7d2a279fe29531afb14530d758718b6',
                    success: function(response){
                        console.log(response)

                        //current day UV index
                        $('#uv-current').text("UV Index: " + (response.current.uvi));

                        //day-one info
                        $("#temp-one").text("Temperature: " + (response.daily[0].temp.min) + "-" + (response.daily[0].temp.max) + "°F");
                        // $('#city-name-one').text("City Name: " + (response.name))
                        $('#humidity-one').text("Humidity: " + (response.daily[0].humidity + "%"));
                        $('#wind-one').text("Wind Speed: " + (response.daily[0].wind_speed) + " mph");
                        $('#uv-one').text("UV Index: " + (response.daily[0].uvi));

                        //day 2 info
                        $("#temp-two").text("Temperature: " + (response.daily[1].temp.min) + "-" + (response.daily[1].temp.max) + "°F");
                        // $('#city-name-two').text("City Name: " + (response.name))
                        $('#humidity-two').text("Humidity: " + (response.daily[1].humidity + "%"));
                        $('#wind-two').text("Wind Speed: " + (response.daily[1].wind_speed) + " mph");
                        $('#uv-two').text("UV Index: " + (response.daily[1].uvi));

                        //day 3 info
                        $("#temp-three").text("Temperature: " + (response.daily[2].temp.min) + "-" + (response.daily[2].temp.max) + "°F");
                        // $('#city-name-three').text("City Name: " + (response.name))
                        $('#humidity-three').text("Humidity: " + (response.daily[2].humidity + "%"));
                        $('#wind-three').text("Wind Speed: " + (response.daily[2].wind_speed) + " mph");
                        $('#uv-three').text("UV Index: " + (response.daily[2].uvi));

                        //day 4 info
                        $("#temp-four").text("Temperature: " + (response.daily[3].temp.min) + "-" + (response.daily[3].temp.max) + "°F");
                        // $('#city-name-four').text("City Name: " + (response.name))
                        $('#humidity-four').text("Humidity: " + (response.daily[3].humidity + "%"));
                        $('#wind-four').text("Wind Speed: " + (response.daily[3].wind_speed) + " mph");
                        $('#uv-four').text("UV Index: " + (response.daily[3].uvi));

                        //day 5 info
                        $("#temp-five").text("Temperature: " + (response.daily[4].temp.min) + "-" + (response.daily[4].temp.max) + "°F");
                        // $('#city-name-five').text("City Name: " + (response.name))
                        $('#humidity-five').text("Humidity: " + (response.daily[4].humidity + "%"));
                        $('#wind-five').text("Wind Speed: " + (response.daily[4].wind_speed) + " mph");
                        $('#uv-five').text("UV Index: " + (response.daily[4].uvi));

                        
                    }

                })
            }

    
        })

    });
});    