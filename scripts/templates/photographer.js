/**
 * @param data {string}
 * @returns {{name, getUserCardDOM: (function(): HTMLElement), picture: string}}
 */
const photographerTemplate = data => {
  const { name, id, city, country, tagline, price, portrait } = data;
  const picture = `assets/photographers/Photographers ID Photos/${portrait}`;

  const getUserCardDOM = () => {
    const article = document.createElement("article");
    setClassNameArticle(article, "");
    setAriaLabel(article, "article");

    const img = document.createElement("img");
    setClassNameArticle(img, "__container__img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", name);
    setAriaLabel(img, "image du photographe");

    const imgContainer = document.createElement("div");
    setAppendChild(imgContainer, img);
    setClassNameArticle(imgContainer, "__container");

    const h2 = document.createElement("h2");
    setTextContent(h2, name);
    setClassNameArticle(h2, "__title");
    setAriaLabel(h2, "nom du photographe");

    const p1 = document.createElement("p");
    setTextContent(p1, ` ${city}, ${country}`);
    setClassNameArticle(p1, "__city");
    setAriaLabel(p1, "pays et ville du photographe");

    const p2 = document.createElement("p");
    setTextContent(p2, tagline);
    setClassNameArticle(p2, "__tagline");
    setAriaLabel(p2, "catchphrase du photographe");

    const p3 = document.createElement("p");
    setTextContent(p3, `${price}€/jour`);
    setClassNameArticle(p3, "__price");
    setAriaLabel(p3, "prix du photographe par jour");

    const link = document.createElement("a");
    link.href = "../../photographer.html";

    setAppendChild(article, link);
    setAppendChild(link, imgContainer);
    setAppendChild(link, h2);
    setAppendChild(article, p1);
    setAppendChild(article, p2);
    setAppendChild(article, p3);

    return (article);
  };
  return { name, picture, getUserCardDOM };
};