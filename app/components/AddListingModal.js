import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X, Upload, Plus, Minus, AlertCircle, Image as ImageIcon } from 'lucide-react';


export default function AddListingModal({ isOpen, onClose, onAdd, token2 }) {
    const [title, setTitle] = useState('');
    const [basePrice, setBasePrice] = useState(10);
    const [discountPrice, setDiscountPrice] = useState(10);
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [mainImages, setMainImages] = useState([]);
    const [variants, setVariants] = useState([]);
    const [features, setFeatures] = useState([]);
    const [newVariantName, setNewVariantName] = useState('');
    const [newVariantOption, setNewVariantOption] = useState('');
    const [selectedVariant, setSelectedVariant] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const [stock, setStock] = useState('');
    const [variantPrice, setVariantPrice] = useState('');
    const [wizard,setWizard] = useState(0)
    const [url,setURL] = useState("")
    const [token,setToken] = useState(token2)
    const handleMainImageUpload = async (value) => {
        setMainImages((mainImages) => [...mainImages, value]);
        setURL("")
    };


 


   
    const handleVariantImageUpload = () => {
        if (e.target.files) {
            const updatedVariants = [...variants];
            updatedVariants[variantIndex].options[optionIndex].images = Array.from(e.target.files);
            setVariants(updatedVariants);
        }
    };

    const handleAddVariant = () => {
        if (newVariantName && variants.length < 3) {
            setVariants([...variants, { name: newVariantName, options: [] }]);
            setNewVariantName('');
        }
    };

    const handleAddVariantOption = (variantIndex) => {
        if (newVariantOption && variants[variantIndex].options.length < 5) {
            const updatedVariants = [...variants];
            updatedVariants[variantIndex].options.push({
                value: newVariantOption,
                images: [],
                price: variantPrice ? parseFloat(variantPrice) : undefined,
                stock: stock ? parseInt(stock) : undefined
            });
            setVariants(updatedVariants);
            setNewVariantOption('');
            setVariantPrice('');
            setStock('');
            console.log(variants)
        }
    };

    const handleNext = async () => {
        
        if(wizard == 0)
        setWizard(1)
        if (wizard == 1)
            setWizard(2)
        if (wizard == 2){
            try {
                console.log(token)
                const response = await fetch('https://alpha-backend-v7bb.vercel.app/createListing', {
                    method: 'POST', headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                         image: mainImages, 
                         title: title,
                         rating: 3.9,
                         price: discountPrice,
                         originalPrice: basePrice, 
                         description: description,
                         reviews: 100,
                         stock: 40,
                         token: token,
                         badge: "Limited",
                         highlightFeatures: features,
                         variants: variants, 


                    }),
                    credentials: 'include'
                });

                const data = await response.json()
                  console.log(data)

                const status = response.status

                

            } catch (error) {
                  console.log(error)
            }
        }
        
        console.log(wizard)
    }
    const handlePrevious = () => {
        if (wizard == 2)
            setWizard(1)
        if (wizard == 1)
            setWizard(0)
        
        
    }


    const handleRemoveVariant = (index) => {
        setVariants(variants.filter((_, i) => i !== index));
    };

    const handleRemoveVariantOption = (variantIndex, optionIndex) => {
        const updatedVariants = [...variants];
        updatedVariants[variantIndex].options.splice(optionIndex, 1);
        setVariants(updatedVariants);
        console.log(variants)
    };

    const handleAddFeature = () => {
        if (features.length < 4) {
            setFeatures([...features, { title: '', description: '' }]);
        }
    };

    const handleUpdateFeature = (index,field, value) => {
        const updatedFeatures = [...features];
        updatedFeatures[index][field] = value;
        setFeatures(updatedFeatures);
    };

    const handleRemoveFeature = (index) => {
        setFeatures(features.filter((_, i) => i != index));
    };

    const handleSubmit = () => {
        e.preventDefault();

        onAdd({
            title,
            basePrice: parseFloat(basePrice),
            description,
            category,
            mainImages,
            variants,
            features,
        });
        onClose();
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white dark:bg-def p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="div"
                                    className="flex justify-between items-center mb-6"
                                >
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                        Add New Listing
                                    </h2>
                                    <button
                                        onClick={onClose}
                                        className="text-gray-500 hover:text-gray-700 transition-colors"
                                    >
                                        <X className="h-6 w-6" />
                                    </button>
                                </Dialog.Title>

                                <div className="space-y-8">
                                    {/* Basic Information */}
                                   {wizard == 0 &&(
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-4">
                                                <h3 className="text-lg font-medium border-b border-gray-500 text-black dark:text-white pb-2">Basic Information</h3>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                                        Title
                                                    </label>
                                                    <input
                                                        type="text"
                                                        required
                                                        value={title}
                                                        placeholder='Enter title for your listing..'
                                                        onChange={(e) => setTitle(e.target.value)}
                                                        className="mt-1 block p-2 outline-none bg-gray-100 text-black w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-defl2 dark:border-gray-600 dark:text-white"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                                        Base Price
                                                    </label>
                                                    <div className="mt-1 relative rounded-md shadow-sm">
                                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                            <span className="text-gray-500 sm:text-sm">$</span>
                                                        </div>
                                                        <input
                                                            type="number"
                                                            required
                                                            value={basePrice}
                                                            onChange={(e) => setBasePrice(e.target.value)}
                                                            className="pl-7 block p-2  bg-gray-100 outline-none text-black  w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-defl2 dark:border-gray-600 dark:text-white"
                                                            placeholder="0.00"
                                                            step="0.01"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                                        Discount Price
                                                    </label>
                                                    <div className="mt-1 relative rounded-md shadow-sm">
                                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                            <span className="text-gray-500 sm:text-sm">$</span>
                                                        </div>
                                                        <input
                                                            type="number"
                                                            required
                                                            value={discountPrice}
                                                            onChange={(e) => setDiscountPrice(e.target.value)}
                                                            className="pl-7 block p-2  bg-gray-100 outline-none text-black  w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-defl2 dark:border-gray-600 dark:text-white"
                                                            placeholder="0.00"
                                                            step="0.01"
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium  text-gray-700 dark:text-gray-300">
                                                        Category
                                                    </label>
                                                    <select
                                                        value={category}
                                                        onChange={(e) => setCategory(e.target.value)}
                                                        className="mt-1 block p-2 outline-none bg-gray-100 text-black w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-defl2 dark:border-gray-600 dark:text-white"
                                                    >
                                                        <option value="">Select a category</option>
                                                        <option value="electronics">Electronics</option>
                                                        <option value="clothing">Clothing</option>
                                                        <option value="home">Home & Living</option>
                                                        <option value="books">Books</option>
                                                    </select>
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                                        Description
                                                    </label>
                                                    <textarea
                                                        required
                                                        value={description}
                                                        onChange={(e) => setDescription(e.target.value)}
                                                        rows={4}
                                                        className="mt-1 bg-gray-100 block w-full p-2 outline-none text-black  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-defl2 dark:border-gray-600 dark:text-white"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <h3 className="text-lg font-medium border-b border-gray-500 pb-2 text-black dark:text-white">Main Product Images</h3>
                                                {mainImages.length < 4 && (
                                                    <div className='flex items-center bg-defl2 rounded-md'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10  rounded-md p-2">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                                                        </svg>

                                                        <input
                                                            type="text"
                                                            required
                                                            value={url}
                                                            placeholder='Enter Image URL..'
                                                            onChange={(e) => setURL(e.target.value)}
                                                            className=" block p-2  outline-none bg-gray-100 text-black w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-defl2 dark:border-gray-600 dark:text-white"
                                                        />
                                                        <svg onClick={() => handleMainImageUpload(url)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 bg-indigo-500 rounded-md mr-1 cursor-pointer p-2 h-fit">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                                        </svg>

                                                    </div>
                                                )}
                                                <div className="grid grid-cols-2 gap-4">
                                                    {mainImages.map((file, index) => (
                                                        <div key={index} className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 dark:bg-defl2">
                                                            <img
                                                                src={file}
                                                                alt={`Product ${index + 1}`}
                                                                className="w-full h-full object-cover"
                                                            />
                                                            <button
                                                                type="button"
                                                                onClick={() => setMainImages(mainImages.filter((_, i) => i !== index))}
                                                                className="absolute top-2 right-2 p-1 bg-red-500 rounded-full text-white hover:bg-red-600"
                                                            >
                                                                <X className="h-4 w-4" />
                                                            </button>
                                                        </div>
                                                    ))}
                                                  
                                                </div>
                                            </div>
                                        </div>
                                   )}

                                    {/* Product Variants */}
                                   
                                   {wizard == 1 &&(
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between border-b border-gray-500 pb-2">
                                                <h3 className="text-lg font-medium text-black dark:text-white">Product Variants</h3>
                                                <div className="text-sm text-gray-500">
                                                    {variants.length}/3 variants
                                                </div>
                                            </div>

                                            {variants.length < 3 && (
                                                <div className="flex gap-2">
                                                    <input
                                                        type="text"
                                                        value={newVariantName}
                                                        onChange={(e) => setNewVariantName(e.target.value)}
                                                        placeholder="Enter variant name (e.g., Size, Color)"
                                                        className="flex-1 p-2  bg-gray-100 outline-none text-black  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-defl2 dark:border-gray-600 dark:text-white"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={handleAddVariant}
                                                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                                                    >
                                                        Add Variant
                                                    </button>
                                                </div>
                                            )}

                                            {variants.map((variant, variantIndex) => (
                                                <div key={variantIndex} className="border rounded-lg p-4 space-y-4">
                                                    <div className="flex items-center justify-between">
                                                        <h4 className="font-medium text-black dark:text-white">{variant.name}</h4>
                                                        <button
                                                            type="button"
                                                            onClick={() => handleRemoveVariant(variantIndex)}
                                                            className="text-red-500 hover:text-red-700"
                                                        >
                                                            <X className="h-5 w-5" />
                                                        </button>
                                                    </div>

                                                    {variant.options.length < 5 && (
                                                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                                            <input
                                                                type="text"
                                                                value={newVariantOption}
                                                                onChange={(e) => setNewVariantOption(e.target.value)}
                                                                placeholder={`Enter ${variant.name.toLowerCase()} option`}
                                                                className="rounded-md p-2 bg-gray-100p-2 outline-none text-black  border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-defl2 dark:border-gray-600 dark:text-white"
                                                            />
                                                            <input
                                                                type="number"
                                                                value={variantPrice}
                                                                onChange={(e) => setVariantPrice(e.target.value)}
                                                                placeholder="Variant price (optional)"
                                                                className="rounded-md p-2 bg-gray-100p-2 outline-none text-black  border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-defl2 dark:border-gray-600 dark:text-white"
                                                            />
                                                            <div className="flex gap-2">
                                                                <input
                                                                    type="number"
                                                                    value={stock}
                                                                    onChange={(e) => setStock(e.target.value)}
                                                                    placeholder="Stock"
                                                                    className="flex-1 p-2 bg-gray-100p-2 outline-none text-black  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-defl2 dark:border-gray-600 dark:text-white"
                                                                />
                                                                <button
                                                                    type="button"
                                                                    onClick={() => handleAddVariantOption(variantIndex)}
                                                                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                                                                >
                                                                    Add
                                                                </button>
                                                            </div>
                                                        </div>
                                                    )}

                                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                        {variant.options.map((option, optionIndex) => (
                                                            <div
                                                                key={optionIndex}
                                                                className="border rounded-lg p-4 space-y-2"
                                                            >
                                                                <div className="flex items-center justify-between">
                                                                    <div className='flex items-center'>
                                                                        <span className="font-medium text-black dark:text-white">{option.value}</span>
                                                                        <span className="font-medium text-sm text-gray-500 ml-4 dark:text-white">(default)</span>
                                                                    </div>
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => handleRemoveVariantOption(variantIndex, optionIndex)}
                                                                        className="text-red-500 hover:text-red-700"
                                                                    >
                                                                        <X className="h-4 w-4" />
                                                                    </button>
                                                                </div>

                                                                {option.price && (
                                                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                                                        Price: ${option.price}
                                                                    </p>
                                                                )}

                                                                {option.stock && (
                                                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                                                        Stock: {option.stock}
                                                                    </p>
                                                                )}

                                                                <div className="grid grid-cols-2 gap-2">
                                                                    {option.images.map((file, imageIndex) => (
                                                                        <div key={imageIndex} className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 dark:bg-defl2">
                                                                            <img
                                                                                src={URL.createObjectURL(file)}
                                                                                alt={`${option.value} ${imageIndex + 1}`}
                                                                                className="w-full h-full object-cover"
                                                                            />
                                                                            <button
                                                                                type="button"
                                                                                onClick={() => {
                                                                                    const updatedVariants = [...variants];
                                                                                    updatedVariants[variantIndex].options[optionIndex].images =
                                                                                        option.images.filter((_, i) => i !== imageIndex);
                                                                                    setVariants(updatedVariants);
                                                                                }}
                                                                                className="absolute top-1 right-1 p-1 bg-red-500 rounded-full text-white hover:bg-red-600"
                                                                            >
                                                                                <X className="h-3 w-3" />
                                                                            </button>
                                                                        </div>
                                                                    ))}
                                                                    {option.images.length < 2 && (
                                                                        <label className="aspect-square rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 flex flex-col items-center justify-center cursor-pointer hover:border-gray-400">
                                                                            <ImageIcon className="h-6 w-6 text-gray-400" />
                                                                            <span className="mt-1 text-xs text-gray-500">Add Image</span>
                                                                            <input
                                                                                type="file"
                                                                                accept="image/*"
                                                                                className="hidden"
                                                                                onChange={(e) => handleVariantImageUpload(variantIndex, optionIndex, e)}
                                                                            />
                                                                        </label>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                   )}

                                    {/* Key Features */}
                                   {wizard == 2 &&(
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between border-b border-gray-500 pb-2">
                                                <h3 className="text-lg font-medium text-black dark:text-white">Key Features</h3>
                                                <div className="text-sm text-gray-500">
                                                    {features.length}/4 features
                                                </div>
                                            </div>

                                            {features.length < 4 && (
                                                <button
                                                    type="button"
                                                    onClick={handleAddFeature}
                                                    className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-gray-400 hover:text-gray-700"
                                                >
                                                    <Plus className="h-5 w-5 mx-auto" />
                                                    Add Feature
                                                </button>
                                            )}

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {features.map((feature, index) => (
                                                    <div key={index} className=" border rounded-xl p-4 space-y-4">
                                                        <div className="flex items-center justify-between">
                                                            <input
                                                                type="text"
                                                                value={feature.title}
                                                                onChange={(e) => handleUpdateFeature(index, 'title', e.target.value)}
                                                                placeholder="Feature title"
                                                                className="flex-1  bg-defl mr-2 text-black p-2 bg-def outline-none  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-defl2 dark:border-gray-600 dark:text-white"
                                                            />
                                                            <button
                                                                type="button"
                                                                onClick={() => handleRemoveFeature(index)}
                                                                className="text-red-500 hover:text-red-700"
                                                            >
                                                                <X className="h-5 w-5" />
                                                            </button>
                                                        </div>
                                                        <textarea
                                                            value={feature.description}
                                                            onChange={(e) => handleUpdateFeature(index, 'description', e.target.value)}
                                                            placeholder="Feature description"
                                                            rows={2}
                                                            className="w-[93%] bg-defl text-black rounded-md p-2 outline-none  border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-defl2 dark:border-gray-600 dark:text-white"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                   )}

                                    <div className="flex gap-4 pt-4 ">
                                       {wizard != 0 &&(
                                            <button
                                                type="button"
                                                onClick={handlePrevious}
                                                className="flex-1 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-defl2"
                                            >
                                                Previous
                                            </button>)}
                                        <button
                                            onClick={handleNext}
                                            className="flex-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}