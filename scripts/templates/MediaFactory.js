class MediaFactory {
  constructor(data) {
    this.data = data;
  }

  /**
   * @returns {Media}
   */
  get() {
    if (this.data.hasOwnProperty("image")) {
      return new Image(this.data);
    } else if (this.data.hasOwnProperty("video")) {
      return new Video(this.data);
    }
  }
}