import Link from "next/link"
import Image from "next/image"
const CategoryCard = ({category}:{category:{categoryName:string, categoryImage:string}}) => {
    return (
        <div className="card sm:w-32 lg:w-44 bg-ghost">
            <Link href="#">
                <figure className="px-5 hover:-translate-y-1.5 hover:drop-shadow-2xl h-44 transition">
                    <Image src={`https://dim-next-client-6cw21mr48-mqayum.vercel.app${category.categoryImage}`} width={300} height={300} alt="Category" className="rounded-xl" />
                </figure>
            </Link>
            <div className="flex justify-center items-center text-center mt-3">
                <Link href="#"><h2 className="card-title">{category.categoryName}</h2></Link>
            </div>
        </div>
    )
}
export default CategoryCard