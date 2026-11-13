import Cards from "./Cards"

export default function CardList({ products }) {

    return (
        <div className=" product-section d-flex flex-wrap gap-3 justify-content-flex-start">
                {
                    products.map((product) => (
                        <Cards
                            key={product.id}
                            product={product}
                        />
                    ))
                }
        </div>
    )
}