import Link from 'next/link'
import Image from 'next/image'
import Button from './Button'
import Typography from './Typography'

export default function Hero() {
    return (
        <div className="h-full md:flex justify-between items-center py-20 px-10 bg-brand-purple
         text-indigo-100">
            <div className="md:w-1/2 mb-10 md:mr-4 md:mb-0">
                <h1 className="text-4xl md:text-6xl text-white mb-6">Lorem ipsum dolor sit amet consectetur.</h1>
                <p className="mb-6 text-lg md:text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi provident soluta perferendis, impedit laboriosam similique.</p>

                {/* <Link href="/learn-more" passHref>
                    <a className="inline-block py-3 px-6 text-lg bg-gray-400 hover:bg-gray-300 text-gray-800 hover:text-gray-900 rounded mr-2">Learn More</a>
                </Link> */}
                <Button to="/learn-more" textColor="white" bgColor="red-500" hoverBgColor="red-400" hoverTextColor="gray-900" margin="mr-2" variant="filled">
                    Contact Us
                </Button>
                <Button to="/portfolio" textColor="white" bgColor="transparent" borderColor="red-500" hoverBgColor="red-500" margin="ml-2" variant="outlined">
                    Portfolio
                </Button>
                {/* <Link href="/get-started">
                    <a className="inline-block py-3 px-6 text-lg bg-red-500 hover:bg-red-400 text-gray-800 hover:text-gray-900 rounded">Get Started</a>
                </Link> */}
            </div>
            <div className="md:w-1/2 md:ml-4 md:mt-4">
                {/* <Image 
                    src="/images/woman.jpg"
                    // width={300}
                    // height={300}
                    alt="Woman"
                    layout="fill                                                                                                                                                                                                                                                                            "
                    className="w-full"
                /> */}
                <img src="electricians.svg" alt="electricians illustration" className="w-full rounded shadow-2xl" />
            </div>
        </div>
    )
}