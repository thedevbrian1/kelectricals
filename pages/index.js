import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Button from '../components/Button'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import DogSection from '../components/DogSection'
import Footer from '../components/Footer'
export default function Home() {
  // const user = {
  //   id: 42,
  //   displayName: 'Notnice',
  //   fullName: {
  //     firstName: 'Brian',
  //     lastName: 'Mwangi'
  //   }
  // };
  // function userId({ displayName }) {
  //   return displayName;
  // }
  // function whoIs({ displayName, fullName: {firstName: name}}) {
  //   return `${displayName} is ${name}`;
  // }

  // console.log(userId(user));
  // console.log(whoIs(user));
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Nav />
      </header>

      <main>
          <Hero />
          <DogSection />
        
      </main>
      <footer>
        <Footer />
      </footer>
      
    </div>
  )
}
