export let weatherData = [];

export const GET = async (city) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=052dcf7dab959be99253fb6a4b550a00&units=metric`
  );
  const weatherData = res.json();
  return weatherData;
};
