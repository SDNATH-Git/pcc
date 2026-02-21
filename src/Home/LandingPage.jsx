
// Full responsive React + Tailwind + Framer Motion frontend for Bangladesh 2.0
// App.jsx
import { motion } from 'framer-motion';
import hero from "../assets/hero.png";
import card from "../assets/card-icon.png";
import quote from "../assets/quote-bg.png";

const PillarCard = ({ title }) => (
    <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-xl shadow hover:border-l-3 hover:border-r-3 hover:border-green-500 transition-all">
        <div className="text-3xl mb-2"> <img src={card} alt="Card Icon" /> </div>
        <h3 className="font-bold text-2xl">{title}</h3>
        <p className="text-sm text-gray-500 font-medium mt-1">Dolor sit amet consectetur elit.is standard placeholder text used in design and publishing to showcase graphic elements (fonts, layouts) without using meaningful content.</p>

    </motion.div>
);

const NewsCard = ({ reverse }) => (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 bg-white p-6 rounded-xl shadow`}>
        <img src="https://images.unsplash.com/featured/?earth,space" className="md:w-1/2 rounded-lg" />
        <div>
            <h3 className="font-bold text-lg">Bangladesh Launches New Satellite</h3>
            <p className="text-sm text-gray-500 my-2">Aljazeera • 05/01/2025</p>
            <p className="text-sm text-gray-600">Not until the creation and maintenance of decent conditions of life...</p>
            <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded">Read More</button>
        </div>
    </div>
);

export default function App() {
    return (
        <div className="font-sans">
            {/* Hero */}
            <section className="bg-green-100 p-6 md:p-12 rounded-3xl mt-3">
                <div className=" mx-auto grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h1 className="text-xs md:text-xl font-mono text-gray-400 mb-2">Bangladesh 2.0</h1>
                        <h1 className="text-2xl md:text-2xl lg:text-4xl font-extrabold">Idea, innovation, </h1>
                        <h1 className="text-2xl md:text-2xl lg:text-4xl font-extrabold"> vision and challenges in </h1>
                        <h1 className="text-2xl md:text-2xl lg:text-4xl font-extrabold"> New Bangladesh.</h1>
                        <button className="mt-6 bg-green-700 text-white px-5 py-3 rounded-xl font-medium hover:bg-red-500">Explore New Bangladesh</button>
                    </div>

                    <div>
                        <img src={hero} alt="Hero" className="w-full h-[250px] md:h-[350px] rounded-xl" />

                    </div>

                </div>
            </section >

            {/* Pillars */}
            < section className="py-6 mt-5" >
                <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Pillars of "Bangladesh 2.0"</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <PillarCard title="Innovation" />
                    <PillarCard title="Sustainability" />
                    <PillarCard title="Infrastructure" />
                    <PillarCard title="Empowerment" />



                </div>
            </section >



            {/* <!-- section The Vision of Future --> */}
            <section className='py-6'>
                <h1 className='text-2xl md:text-3xl font-extrabold py-2'>The Vision of Future</h1>
                <p class="font-normal pb-3">Bangladesh 2.0 aims to redefine the nation’s trajectory by embracing cutting-edge
                    technology, promoting inclusive growth, and ensuring sustainability. With initiatives in renewable energy digital transformation, and robus infrastructure, the country is set to become a global model of development.</p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>

                    <div className='bg-blue-100 p-5 rounded-xl hover:border-t-6 hover:border-blue-500 '>
                        <div className="text-3xl mb-2"> <img src={card} alt="Card Icon" /> </div>
                        <h3 className='text-xl font-bold'>Digital Transformation</h3>
                        <p className="font-medium text-gray-500 py-1">Creating a nationwide digital ecosystem to enhance connectivity and to services for all citizens.</p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded">Learn More</button>
                    </div>
                    <div className='bg-green-100 p-5 rounded-xl hover:border-t-6 hover:border-green-500'>
                        <div className="text-3xl mb-2"> <img src={card} alt="Card Icon" /> </div>
                        <h3 className='text-xl  font-bold'>Green Energy</h3>
                        <p class="font-medium text-gray-500 py-1">Investments in solar and wind energy to ensure a sustainable and eco-friendly
                            sustainability future.</p>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-2 rounded">Learn More</button>
                    </div>
                    <div className='bg-yellow-100 p-5 rounded-xl hover:border-t-6 hover:border-yellow-400'>
                        <div className="text-3xl mb-2"> <img src={card} alt="Card Icon" /> </div>
                        <h3 className='text-xl font-bold'>Modern Infrastructure</h3>
                        <p class="font-medium text-gray-500 py-1">Building state-of-the-art infrastructure to support economic growth and global
                            competitiveness.
                        </p>
                        <button className="bg-yellow-400 hover:bg-yellow-700 text-white font-bold py-2 px-4 mt-2 rounded">Learn More</button>
                    </div>
                </div>

            </section>


            {/* <!-- section Dr. Muhammad Yunus --> */}
            <div className='bg-white rounded-2xl p-6 my-8 relative border border-gray-200 shadow-xs hover:border-t-6 hover:border-green-500  '>
                <img className='absolute' src={quote} alt="Quote Background" />

                <p className='font-medium mt-4 '>Muhammad Yunus[a] (born 28 June 1940) is a Bangladeshi economist, entrepreneur,
                    politician, and civil society leader,
                    who has been serving as Chief Adviser of the Interim Government of Bangladesh since 8 August 2024.[1]
                    Yunus was awarded
                    the Nobel Peace Prize in 2006 for founding the Grameen Bank and pioneering the concepts of microcredit
                    and
                    microfinance.[2] Yunus has received several other national and international honors, including the
                    United States
                    Presidential Medal of Freedom in 2009 and the Congressional Gold Medal in 2010.[3] Yunus is one of only
                    seven people in
                    the world to have received all of these awards.</p>
                <h3 className='text-2xl font-bold mt-3' >Dr. Muhammad Yunus</h3>
                <p className='font-medium '>Chief Adviser of the People's Republic of Bangladesh</p>

            </div>



            {/* Opinion */}
            < section className="max-w-7xl mx-auto p-6" >
                <h2 className="text-xl font-bold mb-4">Your Opinion Matters</h2>
                <div className="bg-white rounded-xl shadow p-4">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="flex justify-between items-center border-b py-3">
                            <p>Do you believe Bangladesh is on the right path?</p>
                            <select className="border p-2 rounded"><option>Yes, I Agree</option><option>No</option></select>
                        </div>
                    ))}
                </div>
            </section >

            {/* News */}
            < section className="max-w-7xl mx-auto p-6 space-y-6" >
                <h2 className="text-xl font-bold">Recent News</h2>
                <NewsCard />
                <NewsCard reverse />
                <NewsCard />
            </section >

            {/* Donate */}
            < section className="max-w-3xl mx-auto p-6 text-center" >
                <h2 className="text-xl font-bold mb-4">Donate Today</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                    {[100, 200, 500, 1000].map(a => (
                        <button key={a} className="border rounded py-3 hover:bg-green-100">{a} Taka</button>
                    ))}
                </div>
                <button className="bg-green-700 text-white px-6 py-3 rounded">Donate Now</button>
            </section >

            {/* Subscribe */}
            < section className="bg-green-100 p-8 text-center" >
                <h2 className="text-xl font-bold mb-2">Subscribe Newsletter</h2>
                <div className="flex flex-col sm:flex-row justify-center gap-2 max-w-md mx-auto">
                    <input className="p-2 rounded border w-full" placeholder="Enter your email" />
                    <button className="bg-green-700 text-white px-4 py-2 rounded">Subscribe</button>
                </div>
            </section >

            {/* Footer */}
            < footer className="text-center p-4 text-gray-500" >© Bangladesh 2.0</footer >
        </div >
    );
}
