/**
 * @param data
 * @returns {{name, getUserCardDOM: (function(): HTMLElement), picture: string}}
 */
const photographerTemplate = data => {
  const { name, id, city, country, tagline, price, portrait } = data;
  const picture = `assets/photographers/Photographers ID Photos/${portrait}`;

  /**
   * @returns {HTMLElement}
   */
  const getUserCardDOM = () => {
    const article = document.createElement("article");
    article.className = "photographer_section__article";
    setAriaLabel(article, "article");

    const img = document.createElement("img");
    img.className = "photographer_section__article__img";
    img.setAttribute("src", picture);
    img.setAttribute("alt", name);
    setAriaLabel(img, "image du photographe");

    const h2 = document.createElement("h2");
    h2.className = "photographer_section__article__title";
    h2.textContent = name;
    setAriaLabel(h2, "nom du photographe");

    const p1 = document.createElement("p");
    p1.textContent = `${country}, ${city}`;
    setAriaLabel(p1, "pays et ville du photographe");

    const p2 = document.createElement("p");
    p2.textContent = tagline;
    setAriaLabel(p2, "catchphrase du photographe");

    const p3 = document.createElement("p");
    p3.textContent = `${price}€/jour`;
    setAriaLabel(p3, "prix du photographe par jour");

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);

    return (article);
  };
  return { name, picture, getUserCardDOM };
};