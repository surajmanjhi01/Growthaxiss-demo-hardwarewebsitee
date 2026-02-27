export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  description: string
  shortDescription: string
  category: string
  color: string
  size: string
  material: string
  image: string
  images: string[]
  inStock: boolean
  rating: number
  reviews: Review[]
  specifications: Record<string, string>
}

export interface Review {
  id: string
  author: string
  rating: number
  comment: string
  date: string
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface CheckoutForm {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zipCode: string
  paymentMethod: "card" | "paypal"
  cardNumber: string
  expiryDate: string
  cvv: string
}
