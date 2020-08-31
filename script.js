$(document).ready(function() {
    // Check to see if a city has been saved in local storage
    var lastCity = localStorage.getItem("lastCitySearched") || "";
    // Initialize array of cities searched for search history updates
    let citiesSearched = [lastCity];
  
    function updateCities(city) {
      var cityDropdown = $("#city-history")[0];
      var citySearched = document.createElement("option");
      citySearched.value = city;
      cityDropdown.appendChild(citySearched);
      localStorage.setItem("lastCitySearched", city);
    }
    // Get the last city searched for and set initial dropdown
    updateCities(lastCity);
  
    $("#searchBtn").click(function() {
      var city = $("#city-search").val();
      //current day ajax request
      $.ajax({
        dataType: "JSON",
        type: "GET",
        url:
          "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" +
          "&APPID=c7d2a279fe29531afb14530d758718b6",
        success: function(response) {
          var cityLat = response.coord.lat;
          var cityLon = response.coord.lon;
  
          //current day
          $("#temp-current").text("Current Temperature: " + response.main.temp + "°F");
          $("#city-name-current").text("City: " + response.name);
          $("#humidity-current").text("Humidity: " + response.main.humidity + "%");
          $("#wind-current").text("Wind Speed: " + response.wind.speed + " mph");
          $("#current-date").text(moment().format("dddd" + ", " + "MMMM Do YYYY"));
  
          // latitiude and logitude, 5 day weather ajax request
          $.ajax({
            dataType: "JSON",
            type: "GET",
            url: "https://api.openweathermap.org/data/2.5/onecall?lat=" +
              cityLat + "&lon=" + cityLon + "&units=imperial&exclude=hourly,minutely&APPID=c7d2a279fe29531afb14530d758718b6",
            success: function(response) {
              // Check that the city we search for is not already in the list
              if (!citiesSearched.includes(city)) {
                // this is mutative. if thats not ok you can uncomment the next line
                citiesSearched.push(city);
                //   citiesSearched = [...citiesSearched, city];
                updateCities(city);
              }

                        //current day UV index
                        $('#uv-current').text("UV Index: " + (response.current.uvi));

                         //current-day icon
                        icon = response.current.weather[0].icon;
                        $('#icon-current').attr('src', '');
                        var iconURL = 'https://openweathermap.org/img/wn/' + icon + '@2x.png';
                        $('#icon-current').attr('src', iconURL);

                        //day-one info
                        $('#date-one').text(moment().add(1, 'day').format('dddd'));
                        $("#temp-one").text("Temperature: " + (response.daily[0].temp.min) + "-" + (response.daily[0].temp.max) + "°F");
                        $('#humidity-one').text("Humidity: " + (response.daily[0].humidity + "%"));
                       
                        
                        iconOne = response.daily[0].weather[0].icon;
                        $('#icon-one').attr('src', '');
                        var iconURLOne = 'https://openweathermap.org/img/wn/' + iconOne + '@2x.png';
                        $('#icon-one').attr('src', iconURLOne);


                        
                        
                        //day 2 info
                        $('#date-two').text(moment().add(2, 'day').format('dddd'));
                        $("#temp-two").text("Temperature: " + (response.daily[1].temp.min) + "-" + (response.daily[1].temp.max) + "°F");
                        $('#humidity-two').text("Humidity: " + (response.daily[1].humidity + "%"));
                       

                        iconTwo = response.daily[1].weather[0].icon;
                        $('#icon-two').attr('src', '');
                        var iconURLTwo = 'https://openweathermap.org/img/wn/' + iconTwo + '@2x.png';
                        $('#icon-two').attr('src', iconURLTwo);


                        
                        
                        //day 3 info
                        $('#date-three').text(moment().add(3, 'day').format('dddd'));
                        $("#temp-three").text("Temperature: " + (response.daily[2].temp.min) + "-" + (response.daily[2].temp.max) + "°F");
                        $('#humidity-three').text("Humidity: " + (response.daily[2].humidity + "%"));
                       

                        iconThree = response.daily[2].weather[0].icon;
                        $('#icon-three').attr('src', '');
                        var iconURLThree = 'https://openweathermap.org/img/wn/' + iconThree + '@2x.png';
                        $('#icon-three').attr('src', iconURLThree);

                        
                        
                        //day 4 info
                        $('#date-four').text(moment().add(4, 'day').format('dddd'));
                        $("#temp-four").text("Temperature: " + (response.daily[3].temp.min) + "-" + (response.daily[3].temp.max) + "°F");
                        $('#humidity-four').text("Humidity: " + (response.daily[3].humidity + "%"));
                        

                        iconFour = response.daily[3].weather[0].icon;
                        $('#icon-four').attr('src', '');
                        var iconURLFour = 'https://openweathermap.org/img/wn/' + iconFour + '@2x.png';
                        $('#icon-four').attr('src', iconURLFour);

                        
                        
                        //day 5 info
                        $('#date-five').text(moment().add(5, 'day').format('dddd'));
                        $("#temp-five").text("Temperature: " + (response.daily[4].temp.min) + "-" + (response.daily[4].temp.max) + "°F");
                        $('#humidity-five').text("Humidity: " + (response.daily[4].humidity + "%"));
                        

                        iconFive = response.daily[4].weather[0].icon;
                        $('#icon-five').attr('src', '');
                        var iconURLFive = 'https://openweathermap.org/img/wn/' + iconFive + '@2x.png';
                        $('#icon-five').attr('src', iconURLFive);

                       
                       
                       
                        // changing the color of the uv index

                        
                        $('#uv-current').removeClass('uvIndexRed uvIndexYellow uvIndexGreen');
                        if(response.current.uvi >= 8){
                            $('#uv-current').addClass('uvIndexRed');
                        } else if(response.current.uvi >= 4 && response.current.uvi<= 7.99){
                            $('#uv-current').addClass('uvIndexYellow');
                        }else{
                            $('#uv-current').addClass('uvIndexGreen');
                        }
                        
                    }

                })
            }

    
        })

    });
});    