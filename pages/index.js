import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { ArrowRightIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
import styles from '../styles/Home.module.css'
import Button from '../components/Button'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import DogSection from '../components/DogSection'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import ImageBackground from '../components/ImageBackground'
import IconService from '../components/IconService'
export default function Home() {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (event) => {

  }

  const handleSubmit = (event) => {

  }

  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest"></link>
      </Head>
     
     <Layout>
       <Hero />
       <ImageBackground image="bg-services" title="Our Services">
          <div className="my-10 md:flex md:items-center justify-center ">
            <div>
              <IconService fileName="solar-panel.svg" altText="Solar Panel" />
              <p className="text-white">Solar panels</p>
            </div>
            <div>
              <IconService fileName="electric-tower.svg" altText="Electric tower" />
              <p className="text-white">Poles</p>
            </div>
            <div>
              <IconService fileName="electric-meter.svg" altText="Electric meter" />
              <p className="text-white">Meters installation</p>
            </div>
            
          </div>
          <div className="flex justify-center items-center mb-10">
              <Link href="/services">
                  <a className="text-white hover:text-red-500">View More</a>
              </Link>
              <ArrowRightIcon className="text-white h-5 w-5 hover:w-7" />
          </div>
        </ImageBackground>
        <div className="md:flex md:items-stretch mx-16 md:mx-36 my-20">
          <section className="md:mt-24">
            <h1 className="text-2xl font-semibold md:text-3xl">Why Us?</h1>
            <p className="text-gray-500 mt-8 mb-4 md:mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi beatae facere esse iure omnis? Aut id esse mollitia eligendi magnam blanditiis dolorum voluptatum tempora odio. Incidunt natus id, at, fuga quisquam perspiciatis aliquam error, quod minus pariatur repellendus veniam voluptates.</p>
          </section>
          <img src="./why-us.svg" alt="SVG illustrating benefits" width="450" height="450" />
        </div>

        <div className="flex flex-col items-center my-10">
          <h1 className="text-2xl font-semibold md:text-3xl">Recent Projects</h1>
          <div className="w-2/3 mt-8">
            <Carousel>
              <div>
                <img src="./images/creative.jpg" alt="" height="50" width="50" />
                <p className="legend">Project 1</p>
              </div>
              <div>
                <img src="./images/creative.jpg" alt="" height="50" width="50" />
                <p className="legend">Project 2</p>
              </div>
              <div>
                <img src="./images/project.jpg" alt="" height="50" width="50" />
                <p className="legend">Project 3</p>
              </div>
            </Carousel>
          </div>
          
        </div>

        <div className="bg-cover bg-center mt-10" style={{backgroundImage:'url("./ellipse.svg")', height: '27rem'}}>
            <div className="flex flex-col items-center pt-16">
              <h1 className="text-2xl font-semibold md:text-3xl">Brands Powered by Us</h1>
              <div className="flex justify-between w-3/4 md:w-1/2  mt-16">
                  <img src="./itunes.svg" alt="" height="80" width="80" />
                  <img src="./ke.svg" alt="" height="80" width="80" />
                  <img src="./periscope.svg" alt="" height="80" width="80" />
                  <img src="./youtube.svg" alt="" height="80" width="80" className="hidden md:inline" />
              </div>
            </div>

        </div>

        <ImageBackground image="bg-testimonial">
          <div className="md:flex md:justify-between w-4/5">
            <div className="flex w-2/5 h-80 outline-white rounded-xl">
              <div className="w-1/3 bg-center bg-cover" style={{backgroundImage: 'url("/images/woman.jpg")'}}></div>
              <div className="w-2/3 bg-white">
                <h6 className="text-red-500 text-left ml-4 mt-5 text-2xl">Jane Doe</h6>
                <p className="text-gray-500 uppercase text-left ml-4 mt-2">CEO, XYZ Limited</p>
                <p className="text-gray-600 text-left ml-4 mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, quibusdam fugiat? Dignissimos magni ex voluptates quas itaque dicta quibusdam expedita, incidunt, error non quaerat. Voluptatum?</p>
                <StarIcon className="text-yellow-500 h-5 w-5 ml-4 mt-3" />
              </div>
            </div>
            <div className="w-3/5">
              <h6 className="text-white text-2xl text-left">Let us sort your electricity needs</h6>
              <form>
                <label>
                  Full Name:
                  <input type="text" value={fullName} onChange={handleChange} />
                </label>
                <label>
                  Email:
                  <input type="text" value={email} onChange={handleChange} />
                </label>
                <label>
                  Phone:
                  <input type="number" value={phoneNumber} onChange={handleChange} />
                </label>
                <label>
                  Message
                  <input type="text" value={message} onChange={handleChange} />
                </label>
              </form>
            </div>
          </div>
        </ImageBackground>
     </Layout>
     
    </div>
  )
}
