let image =
  "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/be9d20e996b20bcd09f593947e733df9~c5_720x720.jpeg?x-expires=1665374400&x-signature=euuclQQcqVF2aqdOxhknfGOPfZY%3D";

const imgs = document.getElementsByTagName("img");
for (let i = 0; i < imgs.length; i++) {
  imgs[i].src = image;
}
