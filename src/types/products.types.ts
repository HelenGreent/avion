export interface IProduct {
  brand: string
  category: string
  created_at: string
  depth: null | number
  description: string
  diameter: null | number
  height: null | number
  id: string
  image_url: string
  length: null | number
  price: number
  qty: number
  title: string
  type: string
  width: string
}

export interface IBasketProduct extends IProduct {
  count: number
}

export interface IFilterParams {
  category: string
  type: string
  price: string
  brand: string
}

export interface IQueryParams {
  dateSort: 'Sort Oldest to Newest' | 'Sort Newest to Oldest' | 'Random Order'
}
