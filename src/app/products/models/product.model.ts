
export  class Product {
  id: number;
  name: string;
  isEssential: boolean;


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
    if (json.isEssential !== null) {
      this.isEssential = !!json.isEssential;
    }
  }
}
