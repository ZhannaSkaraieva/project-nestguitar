export class CreateGuitarDto {
  title: string;
  vendorCode: string;
  reviews: string;
  rating: number;
  article: string;
  type: string;
  strings: number;
  description: string;
  price: number;
  stocked: boolean;
  image: string;
  quantity: number;
}

// {
//   "title": "Fender Stratocaster",
//   "vendorCode": "FND12345",
//   "reviews": "",
//   "rating": 5,
//   "article": "FSTRAT2025",
//   "type": "Электрогитара",
//   "strings": 6,
//   "description": "Легендарная гитара Fender Stratocaster.",
//   "price": 25000,
//   "stocked": true,
//   "image": "/image/fender.png",
//   "quantity": 10
// }
