// import { toggle, root } from "./script.js";

export const createEl = (el, text, ...attrs) => {
  const element = document.createElement(el);
  element.textContent = text;

  attrs.forEach((attr) => {
    element.setAttribute(attr?.name, attr?.value);
  });

  return element;
};

export const genOption = (province) => {
  const option = createEl(
    "option",
    province,
    {
      name: "value",
      value: province,
    },
    {
      name: "class",
      value: "province",
    }
  );
  return option;
};

export const genWeathCard = (data) => {
  let par = data.name;

  if (par.length >= 12) {
    par = par.slice(11);
  }

  const WrapperCard = createEl("div", "", {
    name: "class",
    value: "weath_card animationUpDown",
  });

  const imgBg = createEl(
    "img",
    "",
    {
      name: "src",
      value: "./assets/Vector-prova.svg",
    },
    { name: "class", value: "imgBg" }
  );
  const topSide = createEl("div", "", {
    name: "class",
    value: "weath-top",
  });

  const topText = createEl("div", "", {
    name: "class",
    value: "weath_top_text",
  });

  const temp = createEl("p", `${Math.round(data.main.temp)}°`, {
    name: "class",
    value: "weath_temp",
  });

  const desc = createEl("p", `${data.weather[0].description} >`, {
    name: "class",
    value: "weath_desc",
  });

  const imgContainer = createEl("div", "", {
    name: "class",
    value: "imgContainer",
  });
  const img = createEl(
    "img",
    "",
    {
      name: "src",
      value: `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
    },
    {
      name: "class",
      value: "weath_img",
    },
    {
      name: "alt",
      value: "weather-icon",
    }
  );

  const bottomSide = createEl("div", "", {
    name: "class",
    value: "weath_bottom",
  });
  const bottomText = createEl("div", "", {
    name: "class",
    value: "weath_bottom_text",
  });

  const place = createEl("p", `${par},${data.sys.country} `, {
    name: "class",
    value: "weath_place",
  });

  const maxMin = createEl(
    "p",
    `
  ${Math.round(data.main.temp_max)}° ~ ${Math.round(data.main.temp_min)}°`,
    {
      name: "class",
      value: "weath_max_min",
    }
  );
  imgContainer.appendChild(img);
  topSide.append(topText, imgContainer);
  topText.append(temp, desc);
  bottomSide.appendChild(bottomText);
  bottomText.append(place, maxMin);
  WrapperCard.append(imgBg, topSide, bottomSide);

  return WrapperCard;
};

export const genSingleWeath = (data) => {
  let par = data.name;

  if (par.length >= 12) {
    par = par.slice(11);
  }
  const container = createEl("div", "", {
    name: "class",
    value: "single_weather",
  });
  const containerCity = createEl("div", "", {
    name: "class",
    value: "city_container",
  });
  const iconContainer = createEl("div", "", {
    name: "class",
    value: "icon_container",
  });
  const posIcon = createEl(
    "img",
    "",
    {
      name: "src",
      value: "./assets/location.png",
    },
    { name: "class", value: "location" }
  );
  const city = createEl("p", `${par},${data.sys.country}`, {
    name: "class",
    value: "single_weather_city",
  });

  const weathIcon = createEl(
    "img",
    "",
    {
      name: "src",
      value: `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
    },
    { name: "class", value: "single_weath_icon animationUpDown" }
  );
  const tempWeathContainer = createEl("div", "", {
    name: "class",
    value: "temp_weath_Container",
  });
  const tempDegreesContainer = createEl("div", "", {
    name: "class",
    value: "temp_degrees_container",
  });
  const degrees = createEl("p", "°", { name: "class", value: "temp_degrees" });
  const temp = createEl("p", `${Math.round(data.main.temp)}`, {
    name: "class",
    value: "single_weath_temp",
  });
  const weath = createEl("p", data.weather[0].main, {
    name: "class",
    value: "single_weath_desc",
  });

  const containerminMaxFl = createEl("div", "", {
    name: "class",
    value: "container_min_max_fl",
  });

  const minMax = createEl(
    "span",

    `${Math.round(data.main.temp_max)}° /${Math.round(data.main.temp_min)}°`,
    { name: "class", value: "single_weath_minmax" }
  );
  const feelsLike = createEl(
    "span",
    `Feels like ${Math.round(data.main.feels_like)}°`,
    {
      name: "class",
      value: "single_weath_fl",
    }
  );

  const paraContainer = createEl("div", "", {
    name: "class",
    value: "container_parametr",
  });

  const windbg = createEl(
    "img",
    "",
    { name: "src", value: "./assets/Vector-prova.svg" },
    { name: "class", value: "paramethbg" }
  );
  const humbg = createEl(
    "img",
    "",
    { name: "src", value: "./assets/Vector-prova.svg" },
    { name: "class", value: "paramethbg" }
  );
  const visbg = createEl(
    "img",
    "",
    { name: "src", value: "./assets/Vector-prova.svg" },
    { name: "class", value: "paramethbg" }
  );
  const windContainer = createEl("div", "", {
    name: "class",
    value: "parametr_wind",
  });

  const windTop = createEl("div", "", {
    name: "class",
    value: "wind_top_container",
  });
  const windNum = createEl("p", `${Math.round(data.wind.speed)} hm/h`, {
    name: "class",
    value: "wind_num",
  });
  const windImgContainer = createEl("div", "", {
    name: "class",
    value: "wind_image_container",
  });
  const windSvg = createEl(
    "img",
    "",
    {
      name: "src",
      value: "./assets/wind.gif",
    },
    { name: "class", value: "wind_svg" }
  );
  const windBottom = createEl("div", "", {
    name: "class",
    value: "wind_bottom_container",
  });

  const windText = createEl("p", "Wind", {
    name: "class",
    value: "wind_text",
  });

  const humContainer = createEl("div", "", {
    name: "class",
    value: "parametr_humidity",
  });

  const humTop = createEl("div", "", {
    name: "class",
    value: "hum_top_container",
  });
  const humNum = createEl("p", `${Math.round(data.main.humidity)}%`, {
    name: "class",
    value: "hum_num",
  });
  const humImgContainer = createEl("div", "", {
    name: "class",
    value: "hum_image_container",
  });
  const humSvg = createEl(
    "img",
    "",
    {
      name: "src",
      value: "./assets/water-drop.gif",
    },
    { name: "class", value: "hum_svg" }
  );
  const humBottom = createEl("div", "", {
    name: "class",
    value: "hum_bottom_container",
  });

  const humText = createEl("p", "Humidity", {
    name: "class",
    value: "hum_text",
  });

  const visContainer = createEl("div", "", {
    name: "class",
    value: "parametr_visibility",
  });

  const visTop = createEl("div", "", {
    name: "class",
    value: "vis_top_container",
  });
  const visNum = createEl("p", `${Math.round(data.visibility / 1000)} km`, {
    name: "class",
    value: "vis_num",
  });

  const visImgContainer = createEl("div", "", {
    name: "class",
    value: "vis_image_container",
  });
  const visSvg = createEl(
    "img",
    "",
    {
      name: "src",
      value: "./assets/blue-eye.gif",
    },
    { name: "class", value: "vis_svg" }
  );
  const visBottom = createEl("div", "", {
    name: "class",
    value: "vis_bottom_container",
  });

  const visText = createEl("p", "Visibility", {
    name: "class",
    value: "vis_text",
  });

  windTop.append(windNum, windImgContainer);
  windBottom.appendChild(windText);
  windImgContainer.appendChild(windSvg);
  windContainer.append(windbg, windTop, windBottom);
  humContainer.append(humbg, humTop, humBottom);
  humTop.append(humNum, humImgContainer);
  humImgContainer.appendChild(humSvg);
  humBottom.appendChild(humText);
  iconContainer.appendChild(weathIcon);
  visContainer.append(visbg, visTop, visBottom);
  visTop.append(visNum, visImgContainer);
  visImgContainer.appendChild(visSvg);
  visBottom.appendChild(visText);
  paraContainer.append(windContainer, humContainer, visContainer);
  containerminMaxFl.append(minMax, feelsLike);
  tempDegreesContainer.append(temp, degrees);
  tempWeathContainer.append(tempDegreesContainer, weath);
  containerCity.append(posIcon, city);
  container.append(
    containerCity,
    iconContainer,
    tempWeathContainer,
    containerminMaxFl,
    paraContainer
  );
  return container;
};
