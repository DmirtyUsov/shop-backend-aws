//import { Products } from '../assets/products'

const Products = [
  {
    "count": 4,
    "description": "Short Product Description1",
    "id": "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
    "price": 2.4,
    "title": "ProductOne"
  },
  {
    "count": 6,
    "description": "Short Product Description3",
    "id": "7567ec4b-b10c-48c5-9345-fc73c48a80a0",
    "price": 10,
    "title": "ProductNew"
  },
  {
    "count": 7,
    "description": "Short Product Description2",
    "id": "7567ec4b-b10c-48c5-9345-fc73c48a80a2",
    "price": 23,
    "title": "ProductTop"
  },
  {
    "count": 12,
    "description": "Short Product Description7",
    "id": "7567ec4b-b10c-48c5-9345-fc73c48a80a1",
    "price": 15,
    "title": "ProductTitle"
  },
  {
    "count": 7,
    "description": "Short Product Description2",
    "id": "7567ec4b-b10c-48c5-9345-fc73c48a80a3",
    "price": 23,
    "title": "Product"
  },
  {
    "count": 8,
    "description": "Short Product Description4",
    "id": "7567ec4b-b10c-48c5-9345-fc73348a80a1",
    "price": 15,
    "title": "ProductTest"
  },
  {
    "count": 2,
    "description": "Short Product Descriptio1",
    "id": "7567ec4b-b10c-48c5-9445-fc73c48a80a2",
    "price": 23,
    "title": "Product2"
  },
  {
    "count": 3,
    "description": "Short Product Description7",
    "id": "7567ec4b-b10c-45c5-9345-fc73c48a80a1",
    "price": 15,
    "title": "ProductName"
  }
]

exports.handler = async function (event) {
  console.log('request:', JSON.stringify(event, undefined, 2));
  const productId = event.pathParameters.productId;
  const product = Products.find(item => item.id == productId);
  let statusCode = 204; // or 404?
  let body = `{"Error Message": "ProductId ${productId} not found"}`;
  if (product) {
    statusCode = 200;
    body = JSON.stringify(product);
  }
  return {
    statusCode,
    headers: { 'Content-Type': 'application/json' },
    body,
  };
};