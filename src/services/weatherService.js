const API_KEY = "00b2d8afd40ccc395d5053796899f1aa";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (city) => {
  const response = await fetch(
    `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
  );

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("City not found ❌");
    }
    if (response.status === 429) {
      throw new Error("API limit exceeded ⚠️");
    }
    throw new Error("Something went wrong 😢");
  }

  return response.json();
};
