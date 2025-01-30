"use client"
import React, { useState } from 'react'
import { db, auth } from '@/firebaseConfig';
import { signOut } from 'firebase/auth';
import { Link } from 'next-view-transitions';

const Sidebar = () => {
    function logout() {
         document.cookie = 'jwt=; Max-Age=0; path=/'; 
    }


      const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    price: true,
    brands: true,
    ratings: true
  });
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedSort, setSelectedSort] = useState('Newest');
    const categories = ['All', 'Electronics', 'Fashion', 'Home & Living', 'Sports'];
    const sortOptions = ['Newest', 'Price: Low to High', 'Price: High to Low', 'Most Popular'];
    const brands = ['Apple', 'Samsung', 'Sony', 'LG', 'Nike', 'Adidas'];
    const ratings = [5, 4, 3, 2, 1];

  const toggleSection = () => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleBrandToggle = () => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const handleRatingToggle = () => {
    setSelectedRatings(prev =>
      prev.includes(rating)
        ? prev.filter(r => r !== rating)
        : [...prev, rating]
    );
  };


  
     return (
       <div>
             <div className="w-full md:w-64 lg:w-72 space-y-6 bg-white dark:bg-def p-4 rounded-lg shadow-sm">
                 <div
                     
                     isOpen={expandedSections.categories}
                     onToggle={() => toggleSection('categories')}
                 >
                     <div className="space-y-2">
                         {categories.map(category => (
                             <label
                                 key={category}
                                 className="flex items-center space-x-2 cursor-pointer"
                             >
                                 <input
                                     type="radio"
                                     name="category"
                                     checked={selectedCategory === category}
                                     onChange={() => setSelectedCategory(category)}
                                     className="text-indigo-600 focus:ring-indigo-500"
                                 />
                                 <span className="text-gray-700 dark:text-gray-300">{category}</span>
                             </label>
                         ))}
                     </div>
                 </div>

                 <div
                     
                     isOpen={expandedSections.price}
                     onToggle={() => toggleSection('price')}
                 >
                     <div className="space-y-4">
                         <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                             <span>${priceRange[0]}</span>
                             <span>${priceRange[1]}</span>
                         </div>
                         <input
                             type="range"
                             min="0"
                             max="1000"
                             value={priceRange[0]}
                             onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                             className="w-full"
                         />
                         <input
                             type="range"
                             min="0"
                             max="1000"
                             value={priceRange[1]}
                             onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                             className="w-full"
                         />
                         <div className="flex gap-2">
                             <input
                                 type="number"
                                 value={priceRange[0]}
                                 onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                                 className="w-full px-2 py-1 border rounded dark:bg-gray-700 dark:border-gray-600"
                             />
                             <input
                                 type="number"
                                 value={priceRange[1]}
                                 onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                                 className="w-full px-2 py-1 border rounded dark:bg-gray-700 dark:border-gray-600"
                             />
                         </div>
                     </div>
                 </div>

                 <div
                     
                     isOpen={expandedSections.brands}
                     onToggle={() => toggleSection('brands')}
                 >
                     <div className="space-y-2">
                         {brands.map(brand => (
                             <label
                                 key={brand}
                                 className="flex items-center space-x-2 cursor-pointer"
                             >
                                 <input
                                     type="checkbox"
                                     checked={selectedBrands.includes(brand)}
                                     onChange={() => handleBrandToggle(brand)}
                                     className="text-indigo-600 focus:ring-indigo-500"
                                 />
                                 <span className="text-gray-700 dark:text-gray-300">{brand}</span>
                             </label>
                         ))}
                     </div>
                 </div>

                 <div
                     
                     isOpen={expandedSections.ratings}
                     onToggle={() => toggleSection('ratings')}
                 >
                     <div className="space-y-2">
                         {ratings.map(rating => (
                             <label
                                 key={rating}
                                 className="flex items-center space-x-2 cursor-pointer"
                             >
                                 <input
                                     type="checkbox"
                                     checked={selectedRatings.includes(rating)}
                                     onChange={() => handleRatingToggle(rating)}
                                     className="text-indigo-600 focus:ring-indigo-500"
                                 />
                                 <div className="flex items-center">
                                     {Array.from({ length: rating }).map((_, i) => (
                                         <svg key={i}
                                             className="h-4 w-4 text-yellow-400 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                             <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                         </svg>

                                     ))}
                                     {Array.from({ length: 5 - rating }).map((_, i) => (
                                         <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" h-4 w-4 text-gray-300">
                                             <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                         </svg>

                                     ))}
                                     <span className="ml-1 text-gray-700 dark:text-gray-300">& Up</span>
                                 </div>
                             </label>
                         ))}
                     </div>
                 </div>

                 <div className="flex gap-2 pt-4 border-t dark:border-gray-700">
                     <button
                         onClick={() => {
                             setSelectedCategory('All');
                             setPriceRange([0, 1000]);
                             setSelectedBrands([]);
                             setSelectedRatings([]);
                         }}
                         className="flex-1 px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
                     >
                         Clear All
                     </button>
                     <button className="flex-1 px-4 py-2 text-sm text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
                         Apply Filters
                     </button>
                 </div>
             </div>
       </div>

    )
}

export default Sidebar
