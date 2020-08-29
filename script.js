$(document).ready(function(){
    $('#searchBtn').click(function(){
        var city = $('#city-search').val();

        if(city != " "){

            $.ajax({
                
                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial' + '&APPID=c7d2a279fe29531afb14530d758718b6',
                type: "GET",
                dataType: "jsonp",
                success: function(data){
                    var widget = show(data);

                    $("#show").html(widget);
                    $('#city-search').val('');
                }
            })

        }else{
            $("#error").html('Field cannot be empty');
        }
    })

});

function show(data){
    return "<h2><strong>Current Weather </strong></h2" +
           "<h3><strong>Weather</strong>: "+ data.weather[0].main +"</h3>" + 
           "<h3><strong>Description</strong>: "+ data.weather[0].description +"</h3>"; 

        }          