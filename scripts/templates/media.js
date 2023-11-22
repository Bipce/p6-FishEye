class Media {
  constructor(data) {
    this.id = data.id;
    this.photographerId = data.photographerId;
    this.title = data.title;
    this.image = data.image;
    this.likes = data.likes;
    this.date = data.date;
    this.price = data.price;
    this.video = data.video;
  }

  getMediaCardDom() {
    return (`
      <a href="#">
        <article>
          <img src="./../assets/photographers/Mimi/${this.image}" alt="Animals_Rainbow" height="200" width="200">
          <div>
            <p>${this.title}</p>
            <img src="../../assets/icons/heart.svg" alt="heart">
          </div>
        </article>
      </a>
    `);
  }

  getAsideCard() {
    return (`
    <aside>Test</aside>
    `);
  }
}