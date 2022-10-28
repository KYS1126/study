//주소를 다 가져온다.
var currentURL = location.href
//스크립트에서 제공하는 객체
var urlObj = new URL(currentURL)
//URL 객체에서 searchParams라는 정보를 가져올수있다.
var params = urlObj.searchParams
var q = params.get("q")

var result = getCurrentWeather(q)
console.log(result)

$("#temp").text(result.main.temp + "℃")
$("#wind").text(result.wind.speed + "m/s") 