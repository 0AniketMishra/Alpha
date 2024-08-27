import React from 'react'
import Link from 'next/link'

const Grid = () => {
    const dummy = "This is dummy Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa eget egestas purus viverra accumsan in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Turpis massa sed elementum tempus egestas sed sed risus pretium. Dignissim enim sit amet venenatis urna cursus. Habitant morbi tristique senectus et netus et malesuada fames. Viverra adipiscing at in tellus integer feugiat. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet."

    const items = [
        // { id: 1, title: "Glock 19: Semi-automatic pistol with preinstalled suppresor", image: 'https://nationalinterest.org/sites/default/files/main_images/U78%20(1).jpg', price: "$400", reviews: 5, sellerName: 'The Smuglers', sellerId: 'None', description: dummy, category: "Arms and Ammunation" },
        { id: 2, title: "Account Based Hacking Services: Google,Facebook,Instagram etc(Only Username Required)", category: "SErvices", image: 'https://cms-assets.themuse.com/media/lead/01212022-1047259374-coding-classes_scanrail.jpg', price: "$240", reviews: 5, sellerName: 'The Hackers', sellerId: 'None', description: "" },
        { id: 1, title: "Glock 19: Semi-automatic pistol with preinstalled suppresor", image: 'https://images.unsplash.com/photo-1544473244-f6895e69ad8b', price: "$400", reviews: 5, sellerName: 'The Smuglers', sellerId: 'None', description: dummy, category: "DUMMY" },
        { id: 2, title: "Glock 19: Semi-automatic pistol with preinstalled suppresor", image: 'https://images.unsplash.com/photo-1544473244-f6895e69ad8b', price: "$400", reviews: 5, sellerName: 'The Smuglers', sellerId: 'None', description: dummy, category: "DUMMY" },
        { id: 3, title: "Glock 19: Semi-automatic pistol with preinstalled suppresor", image: 'https://images.unsplash.com/photo-1544473244-f6895e69ad8b', price: "$400", reviews: 5, sellerName: 'The Smuglers', sellerId: 'None', description: dummy, category: "DUMMY" },

    ]
    return (
        <div>
            <section className="text-gray-600 body-font pt-2">
                <div className="container px-2 pt-3 mx-auto" bis_skin_checked="1">
                    <h1 className='text-white text-xl uppercase font-bold mb-8 mr-0 ml-0'>Available Items</h1>
                    <div className="flex flex-wrap -m-2" bis_skin_checked="1">

                        {items.map(item => {
                            return (

                                <Link key={item.id} href={{ pathname: '/items/' + item.id, query: { title: item.title, id: item.id, image: item.image, price: item.price, reviews: item.reviews, sellerName: item.sellerName, sellerId: item.sellerId, description: item.description, } }}
                                    className="lg:w-1/4 md:w-1/2 p-2 w-full hover:scale-[1.05] transition-all duration-150 ease-out" bis_skin_checked="1">

                                    <img alt="ecommerce" className="object-fill  object-center w-160 h-90 rounded-lg " src={item.image} />

                                    <div className="mt-4" bis_skin_checked="1">
                                        <h3 className="text-gray-200 text-xs uppercase tracking-widest title-font mb-1">{item.category}</h3>
                                        <h2 className="text-white title-font text-md font-medium">{item.title}</h2>
                                        <p className="mt-1 text-blue-400 font-bold">{item.price}</p>
                                    </div>

                                </Link>
                            )
                        })}



                    </div>
                </div>
            </section>
        </div>
    )
}

export default Grid
