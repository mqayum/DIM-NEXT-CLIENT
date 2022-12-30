import CategoryCard from "./CategoryCard";
import productCategories from "../helpers/productCategories.json"
import designCategories from "../helpers/designCategories.json"

const CategoriesSection = ({type}:{type:string}) => {

    return (
        <>
            <h1 className="text-center text-2xl py-10 font-extrabold uppercase">{`Top ${type && type.toUpperCase() || ""} Categories`}</h1>
            <div className="flex justify-center flex-wrap gap-10">

                {type === "product" ?
                    productCategories.map((elem, i)=><CategoryCard category={elem} key={i} /> ) :
                    designCategories.map((elem, i)=><CategoryCard category={elem} key={i} /> )
                }
            </div>
        </>
    )
}
export default CategoriesSection