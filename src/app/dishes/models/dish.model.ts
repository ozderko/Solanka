export class Dish {
  id: number;
  name: string;
  recipe: string;
  description: string;

  constructor(json) {
    this.parse(json);
  }

  private parse(json) {
    if (json.id) {
      this.id = json.id;
    }
    if (json.name) {
      this.name = json.name;
    }
    if (json.recipe) {
      this.recipe = json.recipe;
    }
    if (json.description) {
      this.description = json.description;
    }
  }
}
