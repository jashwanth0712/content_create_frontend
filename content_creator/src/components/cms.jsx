import { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

function Content_manager() {
    const data = [
        {
            category: 'News',
            heading: 'New product launch',
            content: 'We are excited to announce the launch of our new product!',
        },
        {
            category: 'News',
            heading: 'Upcoming event',
            content: 'Join us for our upcoming event on June 1st!',
        },
        {
            category: 'Promotion',
            heading: 'Summer sale',
            content: 'Get 20% off all products this summer!',
        },
        {
            category: 'Promotion',
            heading: 'Limited time offer',
            content: 'Buy one, get one free on all items!',
        },
        {
            category: 'Tips',
            heading: 'Social media strategy',
            content: 'Here are some tips on how to improve your social media strategy.',
        },
        {
            category: 'Tips',
            heading: 'Engagement',
            content: 'Learn how to increase engagement on your social media posts.',
        },
        {
            category: 'News',
            heading: 'New feature',
            content: 'We just added a new feature to our product!',
        },
        {
            category: 'Promotion',
            heading: 'Fall sale',
            content: 'Get 30% off all products this fall!',
        },
        {
            category: 'News',
            heading: 'Company expansion',
            content: 'We are excited to announce our company expansion into new markets!',
        },
        {
            category: 'Tips',
            heading: 'Content creation',
            content: 'Here are some tips on how to create engaging content for social media.',
        },
        {
            category: 'News',
            heading: 'New team member',
            content: 'We are thrilled to welcome our new team member!',
        },
        {
            category: 'Promotion',
            heading: 'Holiday sale',
            content: 'Get 40% off all products this holiday season!',
        },
        {
            category: 'News',
            heading: 'Award nomination',
            content: 'We are honored to be nominated for an industry award!',
        },
        {
            category: 'Tips',
            heading: 'Hashtag strategy',
            content: 'Learn how to use hashtags effectively on social media.',
        },
        {
            category: 'Promotion',
            heading: 'Winter sale',
            content: 'Get 50% off all products this winter!',
        },
        {
            category: 'News',
            heading: 'New partnership',
            content: 'We are excited to announce our new partnership with XYZ company!',
        },
        {
            category: 'Tips',
            heading: 'Influencer marketing',
            content: 'Here are some tips on how to work with influencers to promote your brand.',
        },
        {
            category: 'Promotion',
            heading: 'Spring sale',
            content: 'Get 25% off all products this spring!',
        },
        {
            category: 'News',
            heading: 'Company anniversary',
            content: 'We are celebrating our 10th anniversary!',
        },
        {
            category: 'Tips',
            heading: 'Video marketing',
            content: 'Learn how to use video to promote your brand on social media.',
        },
        {
            category: 'Promotion',
            heading: 'Summer clearance',
            content: 'Get up to 60% off all products this summer!',
        },
        {
            category: 'News',
            heading: 'Product update',
            content: 'We just released a major update to our product!',
        }
    ];

    const [activeCategory, setActiveCategory] = useState(null);

    const categories = Array.from(new Set(data.map((item) => item.category)));

    return (
        <div className="container mx-auto p-4">
            <div className="bg-gray-200 py-2 px-4 mb-4 flex">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`mr-4 px-2 py-1 rounded-lg ${activeCategory === category
                            ? "bg-gray-500 text-white"
                            : "bg-white text-gray-800"
                            }`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            {activeCategory ? (
                <div className="block">
                    <h2 className="text-2xl font-bold mb-4">{activeCategory}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {data
                            .filter((item) => item.category === activeCategory)
                            .map((item, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-md p-4">
                                    <h3 className="text-lg font-bold mb-2">{item.heading}</h3>
                                    <p className="mb-2">{item.content}</p>
                                </div>
                            ))}
                    </div>
                </div>
            ) : (
                <div class="flex justify-center items-center hidden md:flex md:flex-2  md:w-2/3 ">
                    <Player
                        src='https://assets3.lottiefiles.com/packages/lf20_x62chJ.json'
                        class="w-1/2 h-1/2 mx-auto"
                        loop
                        autoplay
                    />
                </div>


            )}
        </div>
    );

}
export default Content_manager;