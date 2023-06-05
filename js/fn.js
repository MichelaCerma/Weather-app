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

export const genWeathCard = () => {
  const WrapperCard = createEl("div", "", {
    name: "class",
    value: "weath_card",
  });

  const imgBg = createEl(
    "img",
    "",
    {
      name: "src",
      value: "./assets/Vector 1.png",
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

  const temp = createEl("p", "34°", {
    name: "class",
    value: "weath_temp",
  });

  const desc = createEl("p", "mostly idk >", {
    name: "class",
    value: "weath_desc",
  });

  const img = createEl(
    "img",
    "",
    {
      name: "src",
      value: "",
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

  const place = createEl("p", "Sicily, Italy", {
    name: "class",
    value: "weath_place",
  });

  const maxMin = createEl("p", "12° - 15°", {
    name: "class",
    value: "weath_max_min",
  });

  topSide.append(topText, img);
  topText.append(temp, desc);
  bottomSide.appendChild(bottomText);
  bottomText.append(place, maxMin);
  WrapperCard.append(imgBg, topSide, bottomSide);
  return WrapperCard;
};
