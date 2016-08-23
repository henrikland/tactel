export default class Article {
  constructor(data) {
    this.id    = parseInt(data.Artikelid[0]);
    this.name  = data.Namn[0];
    this.price = parseFloat(data.Prisinklmoms[0]).toFixed(2);

    this.volumeMl = parseFloat(data.Volymiml[0]);
    this.alcoholPercent = parseFloat(data.Alkoholhalt[0]);
  }
}
