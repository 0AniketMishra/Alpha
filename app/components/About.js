import React, { useEffect, useState } from 'react'

const About = ({info}) => {
    
    const [data, setData] = useState([])

    const features = [
        {
         title: "Shooting Stars", 
         description: "This is nothing just a dummy text made to fool people. The text looks too short lets make it long.."
        }, 
        {
          title: "Something other",
          description: "Now this looks great! the application is getting more logical... Soon it would become fully functional."
        }
    ]

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const query = "https://alpha-backend-v7bb.vercel.app/listing/"+info.id
                const response = await fetch(query);
                const res = await response.json();

                setData(res.highlightFeatures)
            } catch (error) {
                console.error('Error fetching listings:', error);
            }
        };
        fetchListings();
    }, []);

    
        

  return (
    <div>
          <section className="text-gray-600 body-font ">
              <div className="container max-w-custom px-8 py-14 mx-auto">
                  <div className="flex flex-col  w-full mb-10" bis_skin_checked="1">
                      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
                      <h1 className="sm:text-3xl text-2xl font-medium title-font text-black dark:text-white">Features & Highlights</h1>
                  </div>
                  <div className="flex flex-wrap -m-4" bis_skin_checked="1">
                    {data.map((feature) => (
                        
                        <div className="p-4 md:p-2  md:w-1/3" bis_skin_checked="1">
                            <div className="flex rounded-lg h-full dark:bg-def bg-white p-8 flex-col" bis_skin_checked="1">
                                <div className="flex items-center mb-3" bis_skin_checked="1">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0" bis_skin_checked="1">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                        </svg>
                                    </div>
                                    <h2 className="dark:text-white text-black text-lg title-font font-medium">{feature.title}</h2>
                                </div>
                                <div className="flex-grow" bis_skin_checked="1">
                                    <p className="leading-relaxed text-base text-gray-500 dark:text-gray-400">{feature.description}</p>
                                    <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                      
                      {/* <div className="p-4 md:p-2  md:w-1/3" bis_skin_checked="1">
                          <div className="flex rounded-lg h-full dark:bg-def bg-white p-8 flex-col" bis_skin_checked="1">
                              <div className="flex items-center mb-3" bis_skin_checked="1">
                                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0" bis_skin_checked="1">
                                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                          <circle cx="12" cy="7" r="4"></circle>
                                      </svg>
                                  </div>
                                  <h2 className="text-white text-lg title-font font-medium">The Catalyzer</h2>
                              </div>
                              <div className="flex-grow" bis_skin_checked="1">
                                  <p className="leading-relaxed text-base text-gray-400">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                  <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                                      </svg>
                                  </a>
                              </div>
                          </div>
                      </div> */}
                      {/* <div className="p-4 md:p-2  md:w-1/3" bis_skin_checked="1">
                          <div className="flex rounded-lg h-full dark:bg-def bg-white p-8 flex-col" bis_skin_checked="1">
                              <div className="flex items-center mb-3" bis_skin_checked="1">
                                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0" bis_skin_checked="1">
                                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                          <circle cx="6" cy="6" r="3"></circle>
                                          <circle cx="6" cy="18" r="3"></circle>
                                          <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                      </svg>
                                  </div>
                                  <h2 className="text-white text-lg title-font font-medium">Neptune</h2>
                              </div>
                              
                              <div className="flex-grow" bis_skin_checked="1">
                                  <p className="leading-relaxed text-base  text-gray-400">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                  <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                                      </svg>
                                  </a>
                              </div>
                          </div>
                      </div> */}
                     
                  </div>
              </div>
          </section>
    </div>
  )
}

export default About