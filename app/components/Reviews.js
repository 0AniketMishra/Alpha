import React from 'react';
import { Star, StarHalf, Package, ThumbsUp, Filter, Calendar } from 'lucide-react';

// Sample review data
const reviews = [
    {
        id: 1,
        name: "Sarah Johnson",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
        rating: 5,
        date: "March 15, 2024",
        title: "Exceeded my expectations!",
        content: "This product has completely transformed my daily routine. The quality is outstanding, and the attention to detail is remarkable. Would definitely recommend!",
        verified: true,
        helpfulCount: 24
    },
    {
        id: 2,
        name: "Michael Chen",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
        rating: 4.5,
        date: "March 12, 2024",
        title: "Great value for money",
        content: "Very impressed with the build quality and functionality. The only minor issue is the delivery took a bit longer than expected, but the product itself is fantastic.",
        verified: true,
        helpfulCount: 18
    },
    {
        id: 3,
        name: "Emma Wilson",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
        rating: 5,
        date: "March 10, 2024",
        title: "Perfect purchase",
        content: "Absolutely love it! The design is sleek and modern, and it works exactly as described. Customer service was also extremely helpful when I had questions.",
        verified: true,
        helpfulCount: 15
    }
];

// Rating statistics
const ratingStats = {
    total: 128,
    average: 4.8,
    distribution: [
        { stars: 5, count: 98, percentage: 76.5 },
        { stars: 4, count: 20, percentage: 15.6 },
        { stars: 3, count: 6, percentage: 4.7 },
        { stars: 2, count: 3, percentage: 2.3 },
        { stars: 1, count: 1, percentage: 0.9 }
    ]
};

const RatingStars = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
        <div className="flex items-center justify-center">
            {[...Array(fullStars)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
            {hasHalfStar && <StarHalf className="w-5 h-5 fill-yellow-400 text-yellow-400" />}
            {[...Array(5 - Math.ceil(rating))].map((_, i) => (
                <Star key={i + fullStars} className="w-5 h-5 text-gray-300" />
            ))}
        </div>
    );
};

const RatingRing = ({ rating }) => {
    const percentage = (rating / 5) * 100;
    const circumference = 2 * Math.PI * 70; // radius = 70
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div className="relative w-48 h-24 mx-auto mb-4">
    
            <div className="absolute inset-x-0 bottom-0 text-center">
                <div className="text-5xl font-bold text-gray-900 dark:text-white">{rating}</div>
                <div className="text-sm text-gray-500">out of 5</div>
            </div>
        </div>
    );
};

function App() {
    return (
        <div className=" bg-white dark:bg-black">

            {/* Reviews Section */}
            <div className="max-w-custom mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-12 text-black dark:text-white">Reviews By Customers</h1>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Sidebar */}
                    <div className="lg:col-span-3">
                        <div className="lg:sticky lg:top-4 space-y-6">
                            {/* Rating Summary */}
                            <div className="bg-gray-100 border border-gray-200 dark:border-def dark:bg-def rounded-xl shadow-md p-6">
                                <RatingRing rating={ratingStats.average} />
                                <div className="text-center mb-6">
                                    <RatingStars rating={ratingStats.average} />
                                    <div className="text-sm text-gray-500 mt-2">{ratingStats.total} total reviews</div>
                                </div>

                                <div className="space-y-3">
                                    {ratingStats.distribution.map((stat) => (
                                        <div key={stat.stars} className="flex items-center gap-2">
                                            <div className="w-12 text-sm text-gray-600">{stat.stars} stars</div>
                                            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-yellow-400 rounded-full transition-all duration-500"
                                                    style={{ width: `${stat.percentage}%` }}
                                                />
                                            </div>
                                            <div className="w-12 text-sm text-gray-600 text-right">{stat.percentage}%</div>
                                        </div>
                                    ))}
                                </div>

                                <button className="w-full mt-6 px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors duration-200">
                                    Write a Review
                                </button>
                            </div>

                            {/* Recent Activity */}
                            <div className="bg-gray-100 dark:bg-def rounded-lg shadow-md p-6 border border-gray-200 dark:border-def">
                                <h3 className="font-semibold text-lg mb-4 text-black dark:text-white">Recent Activity</h3>
                                <div className="space-y-4">
                                    <div className="text-sm">
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                            <span>12 new reviews in the last 24 hours</span>
                                        </div>
                                    </div>
                                    <div className="text-sm">
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                            <span>85% of recent reviews were positive</span>
                                        </div>
                                    </div>
                                    <div className="text-sm">
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                            <span>Most mentioned: "sound quality", "comfort"</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Reviews Grid */}
                    <div className="lg:col-span-9">
                        {/* Filter Bar */}
                        <div className="bg-gray-100 dark:bg-def rounded-lg shadow-sm p-4 mb-6 border border-gray-200 dark:border-def">
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex items-center gap-2">
                                    <Filter className="w-5 h-5 text-gray-500" />
                                    <span className="font-medium text-black dark:text-white">Filter Reviews:</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <button className="px-3 py-1 text-sm bg-orange-50 text-orange-600 rounded-full hover:bg-orange-100">
                                        All Stars
                                    </button>
                                    <button className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200">
                                        5 Stars
                                    </button>
                                    <button className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200">
                                        4 Stars
                                    </button>
                                    <button className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200">
                                        3 Stars
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {reviews.map((review) => (
                                <div key={review.id} className="bg-gray-100 border border-gray-200 dark:border-def dark:bg-def rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                    <div className="p-6">
                                        <div className="flex items-center mb-4">
                                            <img
                                                src={review.avatar}
                                                alt={review.name}
                                                className="w-12 h-12 rounded-full object-cover"
                                            />
                                            <div className="ml-4">
                                                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{review.name}</h3>
                                                <div className="flex items-center gap-2">
                                                    <RatingStars rating={review.rating} />
                                                    {review.verified && (
                                                        <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                                                            Verified Purchase
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <h4 className="font-medium text-lg mb-2 text-black dark:text-white">{review.title}</h4>
                                        <p className="text-gray-600 mb-3">{review.content}</p>

                                        <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
                                            <div className="flex items-center gap-4">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    {review.date}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <ThumbsUp className="w-4 h-4" />
                                                    {review.helpfulCount} people found this helpful
                                                </span>
                                            </div>
                                            <button className="text-orange-600 hover:text-orange-800 transition-colors duration-200">
                                                Helpful?
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 text-center">
                            <button className="inline-flex items-center px-6 py-3 border border-gray-200 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200">
                                Load More Reviews
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;