// import { useState } from "react";
// import "./App.css";
// import {
//   // useGetAllProductsQuery,
//   useGetSingleProductQuery,
// } from "./store/productsApi";
// import { useDebounce } from "./hooks";

// interface Product {
//   id: number;
//   title: string;
//   images: string;
//   price: number;
// }

// interface ProductsResponse {
//   products: Product[];
// }

// function App() {
//   const [input, setInput] = useState<any>("");
//   // const { data, error, isError, isLoading } = useGetAllProductsQuery();
//   const { data: singleProduct , isError , error , isLoading} = useGetSingleProductQuery<any>(input);

//   let listOfProducts: any = singleProduct;  
//   // console.log("data", singleProduct);
//   // console.log("listOfProducts", listOfProducts);
//   // console.log(listOfProducts?.products);
//   // const {data : singleProduct} =useGetSingleProductQuery()
//   // console.log(singleProduct);
//   // console.log(filteredList)
//   const debouncedInput:any = useDebounce(useGetSingleProductQuery(input))
//   console.log(debouncedInput)
//   let filteredList:Product[] = debouncedInput?.data?.products.filter((product:Product)=>product.title.toLowerCase().includes(input))

   
//   return (
//     <div className="App">
//       <input
//         type="text"
//         placeholder="Search for a product..."
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />
//       {isLoading && <p>Loading...</p>}
//       {isError && <p>Error loading data</p>}
  
//       <div>
//         <ol className="product-grid">
//           {filteredList?.map((item: Product) => (
//             <li key={item.id} className="product-card">
//               <img
//                 src={item.images[0]}
//                 alt={item.title}
//                 width={100}
//                 height={100}
//               />
//               <p>{item.title}</p>
//               <p>${item.price}</p>
//             </li>
//           ))}
//         </ol>
//       </div>
//     </div>
//   );
// }  

// export default App;


import { useState } from "react";
import "./App.css";
import {
  // useGetAllProductsQuery,
  useGetSingleProductQuery,
} from "./store/productsApi";
import { useDebounce } from "./hooks";

interface Product {
  id: number;
  title: string;
  images: string;
  price: number;
}

interface ProductsResponse {
  products: Product[];
}

function App() {
  const [input, setInput] = useState<any>("");
  // const { data, error, isError, isLoading } = useGetAllProductsQuery();
  const debouncedInput:any = useDebounce(input)
  const { data: singleProduct , isError , error , isLoading} = useGetSingleProductQuery<any>(debouncedInput);

  let listOfProducts: any = singleProduct;  
  // console.log("data", singleProduct);
  // console.log("listOfProducts", listOfProducts);
  // console.log(listOfProducts?.products);
  // const {data : singleProduct} =useGetSingleProductQuery()
  // console.log(singleProduct);
  // console.log(filteredList)
  console.log(debouncedInput)
  let filteredList:Product[] = singleProduct?.products.filter((product:Product)=>product.title.toLowerCase().includes(debouncedInput))

   
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search for a product..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error loading data</p>}
  
      <div>
        <ol className="product-grid">
          {filteredList?.map((item: Product) => (
            <li key={item.id} className="product-card">
              <img
                src={item.images[0]}
                alt={item.title}
                width={100}
                height={100}
              />
              <p>{item.title}</p>
              <p>${item.price}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}  

export default App;

