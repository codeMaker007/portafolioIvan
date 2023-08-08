import { React } from 'react';
import './App.css';
import Navbar from './Navbar'
import {AiFillLinkedin, AiFillGithub, AiFillMail, AiFillEnvironment, AiFillPhone} from 'react-icons/ai'
import miFoto from './fotoIvan.jpg'
import certHenry from './certHenry.jpg'
import utn from './certUTN.jpg'

function App() {
   
  return (
    <main className='px-8 md:px-20 lg:px-40'>
    
    <Navbar />

    <section id='home' className='min-h-screen text-center mt-4 flex flex-col justify-center '>
        <div className="foto">
          <center>
          <img src={miFoto} alt= 'Imagen no encontrada' layout="fill" objectfit="cover" />
          </center>
        </div>
        <h1 className='text-6xl md:text-5xl font-medium text-teal-500'>Iván Romano</h1>
        <h3 className='text-xl md:text-2xl'>Fullstack Web Developer</h3>
          <p className='text-md py-1 text-gray-800 md:text-xl'>
            «I consider myself an entrepreneur
            and also passionate about
            technology. I have great
            communication skills and great
            initiative. I am curious, so I am
            interested in constantly learning new
            things in a self-taught way» 
          </p>
        <div className='text-6xl py-4 flex justify-center gap-16 text-blue-600'>
        <a  href="https://www.linkedin.com/in/iván-romano-028a18192"><AiFillLinkedin /></a>
        <a  href='https://github.com/codeMaker007'><AiFillGithub /></a>  
        </div>
    </section>

    <section id='service' className=''>
      <h1 className='text-xl font-medium'>Services I Offer</h1>
      <p className='mt-1 text-md'>I have experience in building an application to provide business and consumer solutions. I offer a wide of service, including Frontend & Backend Development.</p>

      <div className='mt-4 flex flex-col md:flex-row gap-8'>
        <div className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1'>
          <img src='software.png' className='w-48' alt='gambar' />
          <h2 className='text-xl'>Software Development</h2>
          <p className='text-gray-500'>I can help you solve a problem, build a product or grow existing project.</p>
          <p className='text-xl '>Tools I Use</p>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node JS (Express)</li>
            <li>Redux</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SQL</li>
          </ul>
        </div>

      </div>

    </section>

    <section id='portfolio' className='mt-10'>
      <h1 className='text-xl font-medium'>Portfolio</h1>
      <p className='mt-1 text-md'>Here are some projects that I have managed.</p>
    </section>

    <section id='license' className='mt-10'>
      <h1 className='text-xl font-medium'>License & Certifications</h1>
      <p className='mt-1 text-md'>Here are some of the certifications I have.</p>
      
      <div className='flex flex-col md:flex-row gap-8 mt-4'>
        <div className='w-full md:w-2/6 shadow-md rounded '>
          <div className='h-48 md:h-56 rounded-t-md relative overflow-hidden'>
            <img src={certHenry} layout="fill" objectfit="cover" alt= 'Imagen no encontrada'/>
          </div>
          <div className='p-4'>
            <h1 className='text-xl font-medium'>Henry</h1>
            <p className=''>Full Stack Web Developer</p>
            <p className='text-sm text-gray-500'>October 2022</p>
          </div>
        </div>

        <div className='w-full md:w-2/6 shadow-md rounded '>
          <div className='h-48 md:h-56 rounded-t-md relative overflow-hidden'>
            <img src={utn} layout="fill" objectfit="cover" alt= 'Imagen no encontrada'/>
          </div>
          <div className='p-4'>
            <h1 className='text-xl font-medium'>Universidad Tecnologica Nacional</h1>
            <p className=''>Programming Fundamentals</p>
            <p className='text-sm text-gray-500'>April 2019</p>
          </div>
        </div>
      </div>

    </section>

    <section id="footer" className='mt-5 rounded bg-black py-8 px-8'>
      <div className='text-white md:text-center'>
        <h1 className='font-medium text-lg'>Contact Me</h1>
        <p>Wanna talk anything?</p>

        <ul className='md:flex justify-center gap-4'>
          <li className='flex items-center gap-2'>
            <AiFillMail />
            <p>ivan.ac.romano@gmail.com</p>
          </li>
          <li className='flex items-center gap-2'>
            <AiFillEnvironment />
            <p>Buenos Aires</p>
          </li>
          <li className='flex items-center gap-2'>
            <AiFillPhone/>
            <p>+054 11 3086 6010</p>
          </li>
        </ul>

        <div className='flex text-xl text-white gap-4 mt-2 md:justify-center'>
          <AiFillLinkedin /> 
          <AiFillGithub />
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>

        <p className="text-center text-sm text-gray-300 sm:text-center">
          © 2023 Iván Romano
        </p>

      </div>
      
    </section>

    </main>
  );
}

export default App;
