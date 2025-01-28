import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useProduct } from '../context/ProductContext';

const About = ({loading}) => {

    const { currentProduct, setCurrentProduct } = useProduct();
    const [data, setData] = useState(null)


    return (
        <div>
            <section className="text-gray-600 body-font ">
                <div className="container max-w-custom px-8 py-14 mx-auto">
                    <div className="flex flex-col  w-full mb-10" bis_skin_checked="1">
                        <h2 className="text-xs text-orange-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-black dark:text-white">Features & Highlights</h1>
                    </div>
                    <div className="flex flex-wrap -m-4" bis_skin_checked="1">
                        {currentProduct?.highlightFeatures?.map((feature) => (

                            <div key={feature.title} className="p-4 md:p-2  md:w-1/3" bis_skin_checked="1">
                                <div className="flex rounded-lg h-full dark:bg-def bg-gray-100 p-8 flex-col" bis_skin_checked="1">
                                    <div className="flex items-center mb-3" bis_skin_checked="1">
                                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0" bis_skin_checked="1">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                            </svg>
                                        </div>
                                        <h2 className="dark:text-white text-black text-lg title-font font-medium">{feature.title}</h2>
                                    </div>
                                    <div className="flex-grow" bis_skin_checked="1">
                                        <p className="leading-relaxed text-base text-gray-500 dark:text-gray-400">{feature.description}</p>
                                        <a className="mt-3 text-orange-500 inline-flex items-center">Learn More
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </div>
    )
}

export default About