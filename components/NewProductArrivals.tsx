import ProductCard from "./ProductCard";
import {useGetHomeProductsQuery} from "../api/visitorApi";

const NewProductArrivals = () => {
        const {data, isSuccess} = useGetHomeProductsQuery();

        if (isSuccess){
                const products = data.products;
                console.log(products)
                return (
                    <>
                        <h1 className="text-center text-2xl py-10 font-extrabold uppercase">Latest Product Arrivals</h1>
                        <div className="flex justify-center flex-wrap gap-10">
                                {products.map((elem, i) => <ProductCard product={elem} key={i}/>)}
                        </div>
                    </>
                )
        }
        else
        return <></>
}
export default NewProductArrivals