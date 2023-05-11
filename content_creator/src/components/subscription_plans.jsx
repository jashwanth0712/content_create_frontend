import { PayPalButtons,PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useState, useEffect } from 'react';


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
                        title="Free Trail"
                        description="Free trail to try the platform with limited usage"
                        price="FREE"
                        features={[
                            { name: "simultaneous users", value: "1 user" },
                            { name: "content per day", value: "10 results / day" },
                        ]}
                        payment_amount={0}
                        jump_link="/"
                    />
                    <SubscriptionCard
                        title="Starter"
                        description="Best option for personal content creation"
                        price="$10"
                        features={[
                            { name: "simultaneous users", value: "1 user" },
                            { name: "content per day", value: "100 results / day" },
                        ]}
                        payment_amount={10}
                        jump_link="/under-construction"
                    />
                    <SubscriptionCard
                        title="Professional"
                        description="Best option for personal content creation"
                        price="$99"
                        features={[
                            { name: "simultaneous users", value: "3 user" },
                            { name: "content per day", value: "10000 results / day" },
                        ]}
                        payment_amount={99}
                        jump_link="/under-construction"

                    />
                    
                    
                </div>
            </div>
        </section>
    )
}


function SubscriptionCard({ title, description, price, features, payment_amount,jump_link }) {
    const [remaining, setRemaining] = useState(0);

    useEffect(() => {
        const fetchRemaining = async () => {
          try {
            const response = await fetch(`https://content-create-n6r1.onrender.com/my-collection/${localStorage.getItem('userEmail')}`);
            const data = await response.json();
            console.log("got ",data)
            setRemaining(data.remaining); // Assuming the "remaining" value is present in the response
          } catch (error) {
            console.error('Error fetching remaining:', error);
          }
        };
    
        fetchRemaining();
      }, []);
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
           
            {(payment_amount!= 0)?
            <PayPalScriptProvider options={{
                "client-id":"Adfu7DOh8Fea0jeSvCa2hS1_CY-mL9iOleuXcS-V7nLcX5Rrv4LelrFAn7GtUDR1lXtCgM__AcUSFrHq"
            }}>
{/* username : sb-0lyob25950622@business.example.com
password : &L3>y(u| */}
                <PayPalButtons
                createOrder={(data,actions)=>{
                    return actions.order.create({
                        purchase_units:
                        [{
                            amount:{
                                value:payment_amount,
                            }
                        }
                        ]
                    })
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(async function async (details) {
                       const emailId = localStorage.getItem('userEmail'); // Replace with the actual email ID
                       const user_req = await fetch(`http://localhost:5000/my-collection/${emailId}`);
                       const user_txt=await user_req.text()
                       const user_data=JSON.parse(user_txt);
                       const remaining_prompts=user_data.remaining
                        const patchEndpoint = `https://fine-cyan-cockatoo-sari.cyclic.app/my-collection/${emailId}`;
                        const patchData = {
                            remaining:remaining_prompts+1000*payment_amount,
                          };
                    
                          const patchResponse = await fetch(patchEndpoint, {
                            method: 'PATCH',
                            headers: {
                              'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(patchData),
                          });
                    
                          if (patchResponse.ok) {
                            setResult(data);
                            setLoading(false);
                            navigateTo('/result', { state: { data } });
                          } else {
                            throw new Error('Failed to patch the generated text to the endpoint.');
                          }
                        
                        alert(
                            "Transaction completed by "+ details .payer.name.given_name
                        )
                    });
                }}
                />
            </PayPalScriptProvider>:
            <a
            href={jump_link}
            className="text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center   "
        >
            {remaining} Remaining
        </a>
            }
           
        </div>
    );
}
export default Subscriptionplans;