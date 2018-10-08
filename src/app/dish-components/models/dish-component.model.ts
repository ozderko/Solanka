export class DishC {
  id: number;
  weight: number;
  dishId?: number;
  productId?: number;

  constructor(json) {
    this.parse(json);
  }

  private parse(json) {
    if (json.id) {
      this.id = json.id;
    }
    if (json.weight) {
      this.weight = json.weight;
    }
    if (json.dishId) {
      this.dishId = json.dishId;
    }
    if (json.productId) {
      this.productId = json.productId;
    }
  }
}
