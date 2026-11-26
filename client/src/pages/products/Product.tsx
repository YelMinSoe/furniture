// Library imports

// Local imports
import { products, filterList } from "@/data/products"
import ProductCard from "@/components/products/ProductCard"
import ProductFilter from "@/components/products/ProductFilter"
import Pagination from "@/components/products/Pagination"

const Product = () => {
  return (
    <div>
      <section className="">
        <section className="">
          <ProductFilter
            title="Furnitures Made By"
            filterList={filterList.categories}
          />
          <ProductFilter
            title="Furnitures Types"
            filterList={filterList.types}
          />
        </section>
        <section className="">
          <h1 className="">All Products</h1>
          <div className="">
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </section>
      </section>
    </div>
  )
}

export default Product
