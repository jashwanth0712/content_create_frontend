
function Subscriptionplans() {
    return (
        <section class="bg-white ">
            <div class=" px-4 mx-auto max-w-screen-xl lg:py-1 lg:px-6">
                <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Designed for Content creators</h2>
                    <p class="mb-5 font-light text-gray-500 sm:text-xl ">Let's simplify the content creation process ,our tool helps you to dedicate your time into content rather than creation  </p>
                </div>
                <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">

                    <SubscriptionCard
                        title="Starter"
                        description="Best option for personal content creation"
                        price="$10"
                        features={[
                            { name: "simultaneous users", value: "1 user" },
                            { name: "content per day", value: "10 results / day" },
                        ]}
                        buttonText="Subscribe"
                    />
                    <SubscriptionCard
                        title="Professional"
                        description="Best option for personal content creation"
                        price="$99"
                        features={[
                            { name: "simultaneous users", value: "3 user" },
                            { name: "content per day", value: "200 results / day" },
                        ]}
                        buttonText="Subscribe"
                    />
                    <SubscriptionCard
                        title="Company"
                        description="Best for large scale and unlimited uses of the tool"
                        price="$199"
                        features={[
                            { name: "simultaneous users", value: "no limit " },
                            { name: "content per day", value: "10000 results / day" },
                        ]}
                        buttonText="Subscribe"
                    />
                    
                </div>
            </div>
        </section>
    )
}


function SubscriptionCard({ title, description, price, features, buttonText }) {
    return (
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow  xl:p-8  ">
            <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
            <p className="font-light text-gray-500 sm:text-lg ">{description}</p>
            <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">{price}</span>
                <span className="text-gray-500 ">/month</span>
            </div>

            <ul role="list" className="mb-8 space-y-4 text-left">
                {features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                        <svg
                            className="flex-shrink-0 w-5 h-5 text-green-500 "
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <span>
                            {feature.name} :{" "}
                            <span className="font-semibold">{feature.value}</span>
                        </span>
                    </li>
                ))}
            </ul>
            <a
                href="#"
                className="text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center   "
            >
                {buttonText}
            </a>
        </div>
    );
}
export default Subscriptionplans;