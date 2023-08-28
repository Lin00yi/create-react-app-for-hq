import React, { useEffect, useState } from "react";
import "./index.css";
import { reqGetCityInfo,reqGetWeatherInfo } from "../../api/city";
import { motion } from "framer-motion";


//根据ip获取城市信息
const getCityInfo = async () =>
  await reqGetCityInfo()

//根据城市获取天气
const myOwnKey = "b47c26cdb71bca9ecff92fef52e296d6";
const getCityWeather = async (city) =>
  await reqGetWeatherInfo(city, myOwnKey);

export default function Index() {
  const [location, setLocation] = useState({
    cityInfo: null, //城市信息
    cityWeather: null,  //天气信息
  });
  useEffect(() => {
    console.log('Fetching data...')
    const fetchCityInfoAndWeather = async () => {
      const cityInfo = await getCityInfo();
      const cityWeather = await getCityWeather('HangZhou');
      setLocation({ cityInfo, cityWeather });
    }
    fetchCityInfoAndWeather();
}, []);
  console.log('Rendering component...')
  const { cityInfo, cityWeather } = location;

  return (
    <>
      <motion.div
        className="city"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        City: {cityInfo?.country_name} {cityInfo?.city}
      </motion.div>
      <div className="location">
        Latitude: {cityInfo?.latitude}, Longitude: {cityInfo?.longitude}
      </div>
      <motion.div
        className="weather"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Weather: {cityWeather?.weather[0].main}
      </motion.div>
    </>
  );
}
