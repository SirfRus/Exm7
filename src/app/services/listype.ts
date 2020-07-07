
export class listype {    
    
  id?: number;
  name: string;
  articul: string;
  category: string;
  price: number;
  prod: string;
  weight: number;
  count: number;
    

  constructor(id, name, articul, category, price, prod, weight, count) {
    this.id = id;
    this.name = name;
    this.articul = articul;
    this.category = category;
    this.price = price;
    this.prod = prod;
    this.weight = weight;
    this.count = count;
  }  
}