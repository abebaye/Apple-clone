import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../css/stayle.css"

function Iphone() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/iphones.json")
      .then((res) => res.json())
      .then((products) => {
        setProducts(() => products.products);
      });
  }, []);

  console.log(products);
  let order = 1;
  return (
    <div>
      <section className="internal-page-wrapper top-100">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold">Iphones</div>
              <div className="brief-description">
                The best for the brightest.
              </div>
            </div>
          </div>
          {products.map((product) => {
            let id = product.product_url;
            let title = product.product_name;
            let img = product.product_img;
            let Brief = product.product_brief_description;
            let StartPrice = product.starting_price;
            let PriceRange = product.price_range;
            let productPage = "/iphone/" + id;          

            let productDiv = (
              <div
                key={id}
                className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
              >
                <div className={`col-sm-12 col-md-6 my-auto `}>
                  <div className="product-title">{title}</div>
                  <div className="product-brief">{Brief}</div>
                  <div className="starting-price">
                    {`Starting at ${StartPrice}`}
                  </div>
                  <div className="monthly-price">{PriceRange}</div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to={productPage}>Learn more</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={`col-sm-12 col-md-6 `}>
                  <div className="prodict-image">
                    <img src={img} alt="" />
                  </div>
                </div>
              </div>
            );
            return productDiv;
          })}
        </div>
      </section>
    </div>
  );
}
export default Iphone;








// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// function Iphone() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3003/iphones")
//       .then((res) => res.json())
//       .then((products) => {
//         setProducts(() => products.products);
//       });
//   }, []);

//   // console.log(products);
//   let order = 1;
//   return (
//     <div>
//       <section className="internal-page-wrapper top-100">
//         <div className="container">
//           <div className="row justify-content-center text-center">
//             <div className="col-12">
//               <div className="title-wraper bold">Iphones</div>
//               <div className="brief-description">
//                 The best for the brightest.
//               </div>
//             </div>
//           </div>
//           {products.map((product, id) => {

//             let productPage = "/iphone/" + id;

//             let productDiv = (
//               <div
//                 key={id}
//                 className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
//               >
//                 <div className="col-sm-12 col-md-6 my-auto">
//                   <div className="product-title">{product.product_name}</div>
//                   <div className="product-brief">
//                     {product.product_brief_description}
//                   </div>
//                   <div className="starting-price">
//                     {`Starting at ${product.starting_price}`}
//                   </div>
//                   <div className="monthly-price">{product.price_range}</div>
//                   <div className="links-wrapper">
//                     <ul>
//                       <li>
//                         <Link to={productPage}>Learn more</Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>

//                 <div className="col-sm-12 col-md-6">
//                   <div className="prodict-image">
//                     <img src={product.product_img} alt="" />
//                   </div>
//                 </div>
//               </div>
//             );
//             return productDiv;
//           })}
//         </div>
//       </section>
//     </div>
//   );
// }
// export default Iphone;
