export interface Products {
  id: number,
  title: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  stock: Number,
  brand: String,
  category: String,
  thumbnail: String,
  images:  String,


}

export interface ResultadoPeticion{
total:	Number,
skip:	Number,
limit:	number,
products:	Array<Products>,
}


export interface ProductoConId extends Products{
  id : number;
}

export interface ProductoParcial extends Partial <Products>{

}
