import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    images: string[];
  }
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<Product[], void>({
      query: () => 'products',
    }),
    getSingleProduct:builder.query<Product[], void>({
        query:(product)=> `products/search?q=${product}` 
    }),
  }),
});

export const { useGetAllProductsQuery , useGetSingleProductQuery} = productsApi;
