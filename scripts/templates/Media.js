class Media {
  constructor(data) {
    this.id = data.id;
    this.photographerId = data.photographerId;
    this.title = data.title;
    this.likes = data.likes;
    this.date = data.date;
    this.price = data.price;
  }

  getMediaCardDom() {
    throw new Error("This is an abstract method and must be overridden.");
  }

  getMediaLightBox() {
    throw new Error("This is an abstract method and must be overridden.");
  }
}