import {ourproduct} from "../content/index"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Link} from "react-router-dom"
const Products = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
    <div className="flex items-center font-Sue  justify-center ">
    <h1 className=" text-primary text-5xl text-center md:first-letter:text-left not-italic font-normal leading-[normal] capitalize">Free Special Recipes</h1>
    </div>
    <Carousel 
   infinite={true}
   autoPlay={true}
   autoPlaySpeed={4000}
    responsive={responsive}
    removeArrowOnDeviceType={["tablet", "mobile","desktop"]}>
      {ourproduct.map((product, index) => (
        <div
         key={index}
        className="mx-auto p-10 transform  rounded-lg bg-white dark:bg-slate-800 shadow-2xl duration-300 hover:scale-105 hover:shadow-lg ">
          <img className="h-52 w-full object-cover rounded-lg object-center" src={product.img} alt="Product Image" />
          <div className="p-4">
            <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">{product.name}</h2>
            <p className="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
              <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
              <p className="ml-auto text-base font-medium text-green-500">20% off</p>
            </div>
            <a href="#" className="flex items-center mt-8 justify-center rounded-md bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-scondary focus:outline-none focus:ring-4 focus:ring-blue-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to cart</a>
          </div>
        </div>
      ))}
    </Carousel>
    </>
  )
}

export default Products