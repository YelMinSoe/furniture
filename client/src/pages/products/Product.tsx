// Library imports

// Local imports
import { products, filterList } from "@/data/products"
import ProductCard from "@/components/products/ProductCard"
import ProductFilter from "@/components/products/ProductFilter"
import Pagination from "@/components/products/Pagination"

const Product = () => {
  return (
    <div className="container mx-auto">
      <section className="flex flex-col lg:flex-row">
        <section className="my-8 mr-4 ml-4 w-full lg:ml-0 lg:w-1/5">
          <ProductFilter filterList={filterList} />
        </section>
        <section className="lg:4/5 w-full lg:ml-0">
          <h1 className="my-8 ml-4 text-2xl font-bold">All Products</h1>
          <div className="gapy12 mb-12 grid grid-cols-1 gap-6 px-4 md:grid-cols-2 md:px-0 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
          <Pagination />
        </section>
      </section>
    </div>
  )
}

export default Product
