export default class Article {
  constructor(data) {
    this.id    = parseInt(data.Artikelid[0]);
    this.name  = data.Namn[0];
    this.price = parseFloat(data.Prisinklmoms[0]).toFixed(2);

    this.volumeMl = parseFloat(data.Volymiml[0]);
    this.alcoholPercent = parseFloat(data.Alkoholhalt[0]);

    this.ecological = data.Ekologisk[0] === '1';
    this.kosher     = data.Koscher[0] === '1';
    this.ethical    = data.Etiskt[0] === '1';
  }
}
