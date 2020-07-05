class ListOffer {
  constructor(name, item, content, category, listingOffer_id, coordinates) {
    (this.name = name),
    (this.item = item),
    (this.category = category),
      (this.content = content),
      (this.listingOffer_id = listingOffer_id);
    this.coordinates = coordinates;
  }
}
export default ListOffer;
