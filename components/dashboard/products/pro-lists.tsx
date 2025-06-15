import ProductCard from "./pro-card"


function ProductsLists() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-4">
        <div className="w-full flex gap-2 flex-col px-5">
          <h1 className="text-2xl font-semibold">Products List</h1>
        <p className="xl:max-w-4xl md:max-w-[80%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum suscipit, rem tempora laboriosam itaque, magnam beatae laudantium non cupiditate placeat dolor eaque doloremque a. Corporis ex eos alias quae dolorum?</p>
        </div>
        <div className="flex flex-wrap gap-4 flex-row justify-center">
          {Array.from({ length: 10 }).map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>
    </div>
  )
}

export default ProductsLists