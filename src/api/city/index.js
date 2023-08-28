
import request from '../../utils/request'
const API = Object.freeze({
  'GET_CITY': 'https://geolocation-db.com/json/',
  'GET_WEATHER': `https://api.openweathermap.org/data/2.5/weather?`,
})

//根据ip获取城市信息
export const reqGetCityInfo = () =>
  request.get(API.GET_CITY)

//根据城市获取天气信息
export const reqGetWeatherInfo = (city,key) =>
  request.get(API.GET_WEATHER+`q=${city}&appid=${key}`)