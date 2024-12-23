import { Flag, MessageCircle, Star, ThumbsUp } from 'lucide-react'
import React from 'react'

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            name: "The Great Khali",
            rating: 3.4,
            userAvatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
            title: "Very Nice product had no issues with the nose candy. it was soft and smooth",
            images: ["https://th.bing.com/th/id/OIP.Z4ItBlTHgm8royFUqIufGgHaFl?rs=1&pid=ImgDetMain", "https://img.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2015/11/17/Production/LocalLiving/Images/we-salt1119.jpg?uuid=sFWP4I1lEeWs_2c66S3dKw"]
        },
        {
            id: 1,
            name: "The Great Khali",
            rating: 3.4,
            userAvatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
            title: "Very Nice product had no issues with the nose candy. it was soft and smooth",
            images: ["https://th.bing.com/th/id/OIP.Z4ItBlTHgm8royFUqIufGgHaFl?rs=1&pid=ImgDetMain", "https://img.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2015/11/17/Production/LocalLiving/Images/we-salt1119.jpg?uuid=sFWP4I1lEeWs_2c66S3dKw"]
        },]
    return (
        <div>
            <section className="text-gray-600 body-font overflow-hidden">

                <div className="container px-5 py-10 max-w-custom mx-auto" bis_skin_checked="1">
                    <div className="flex flex-col  w-full mb-10" bis_skin_checked="1">
                        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">Reviews By Customers</h1>
                    </div>
                    <div className="-my-8 " bis_skin_checked="1">


                        {reviews.map((review) => (
                            <div key={review.id} className="py-8 flex flex-wrap md:flex-nowrap" bis_skin_checked="1">
                                <div className="md:w-1/6 md:mb-0  flex-shrink-0 flex flex-col" bis_skin_checked="1">
                                    <div className='flex items-center'>
                                        <h1 className="font-semibold  text-xl dark:text-gray-200 text-black">{review.name}</h1>
                                        <h1 className="ml-2 flex md:hidden lg:hidden 2xl:hidden text-gray-500 text-lg">12 Jun 2019</h1>
                                    </div>
                                    <span className="flex items-center">
                                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        {/* <span className="text-gray-200 ml-3">4 Reviews</span> */}
                                    </span>
                                    <h1 className="mt-1 hidden md:flex lg:flex 2xl:flex text-gray-500 text-lg">12 Jun 2019</h1>
                                </div>
                                <div className=''>
                                    <div className="md:flex-grow mb-4" bis_skin_checked="1">
                                        <h2 className="text-xl font-medium dark:text-white text-black title-font mb-2">Very Nice Product .</h2>
                                        <p className="leading-relaxed ">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                                        <a className="text-indigo-500 inline-flex items-center mt-2">Learn More
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>

                                    {review.image && (
                                        <div className='flex'>
                                            <img alt="ecommerce" className=" w-36 h-36 rounded-lg" src="https://dummyimage.com/400x400" />
                                            <img alt="ecommerce" className="ml-4 w-36 h-36 rounded-lg" src="https://dummyimage.com/400x400" />

                                        </div>
                                    )}

                                </div>
                            </div>
                        ))}









                    </div>
                </div>
            </section>
        </div>
              
    )
}

export default Reviews