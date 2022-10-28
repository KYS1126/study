
var cityList = ["seoul", "incheon", "busan", "gwangju", "jeju", "jeonju"];

//지역과 아이콘 보내기
//foreach jq니까 가능
$(".temp").each(function(i){
    var temp = getCurrentTemp(cityList[i])
    //this = temp
    var iconURL = "https://openweathermap.org/img/wn/"
    $(this).text(temp.celsius + "℃")
    $(this).prev().children().attr("src", iconURL + temp.icon + ".png")
})

$(".location").on({
    "click" : function() {
        var q = $(this).children(".q").attr("id")
        var redirectURL = "pages/weather_location.html?q=" + q;
        location.href = redirectURL;
    }

})