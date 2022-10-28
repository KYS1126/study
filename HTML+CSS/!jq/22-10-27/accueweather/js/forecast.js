var url = "https://api.openweathermap.org/data/2.5/weather?"
url += "appid=e71ea3e721ae8408882a438c2f46a855"
url += "&units=metric"
url += "&lang=kr"
url += "&q="

//현재 날씨의 모든 정보 얻어오기
function getCurrentWeather (city) {
    var detaObj;
    var openWeatherAPI = url
    // console.log(openWeatherAPI)

    $.ajax({
        type: "GET",  //서버에 get방식으로 요청을 함.
        url: openWeatherAPI += city,
        dataType: "json", //json으로 데이터를 받겠다.(받아올 데이터 타입)
        async: false,  //비동기x=>false 를 주면 동기로 만듬. , 동기=서버와의 요청과 응답을 하나하나씩 한다, 비동기 = 요청과 응답을 순서와상관없이 처리한다.
        success: function(data) {  //API call 성공할때
            console.log(data.main); //원하는 데이터만 콘솔로 가져올수 있음.
            console.log(data.wind.speed)
            console.log(data.dt)
            console.log(data.weather[0].icon)
            detaObj = data //동기로 만들어준 이유는 리턴값을 해줄수있다.
        },
        error: function(requset, status, error) {  //API call 실패할때
            console.log(requset, status, error);
        }

    })
    return detaObj;
}

// getCurrentWeather()

//지역별 현재 온도 얻어오기
function getCurrentTemp (city) {
    var temp = {} //temp라는 객체데이터를 만듬
    var openWeatherAPI = url


    $.ajax({
        type: "GET",  //서버에 get방식으로 요청을 함.
        url: openWeatherAPI += city,
        dataType: "json", //json으로 데이터를 받겠다.(받아올 데이터 타입)
        async: false,  //비동기x=>false 를 주면 동기로 만듬. , 동기=서버와의 요청과 응답을 하나하나씩 한다, 비동기 = 요청과 응답을 순서와상관없이 처리한다.
        success: function(data) {  //API call 성공할때
            temp.celsius = data.main.temp.toFixed(0) //온도 넣어주기
            temp.icon = data.weather[0].icon //아이콘
        },
        error: function(requset, status, error) {  //API call 실패할때
            console.log(requset, status, error);
        }
    })

    console.log(temp)
    return temp
}


// getCurrentTemp ()