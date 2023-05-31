import Image from 'next/image'
import { Roboto_Mono, Roboto_Slab } from 'next/font/google';
import { SkillDonut } from './skill-charts';
import { TypewriterSub } from './client-comps';

const roboto_mono = Roboto_Mono({
  weight: '400',
  subsets: ['latin'],
});

const roboto_slab = Roboto_Slab({
  weight: '800',
  subsets: ['latin'],
});

//test commit

function SkillSection() {
  return (
    <div id='skills' className='bg-skill-bg rounded-2xl p-5 h-96'>
      <h1 className='text-5xl text-center'><b>SKILLS</b></h1>
      <div className='flex justify-between p-10'>
        <SkillDonut skillPercentage={80} skillColor={'#5bd7f0'} lang={"Python"} />
        <SkillDonut skillPercentage={70} skillColor={'#5b9ef0'} lang={"Java"} />
        <SkillDonut skillPercentage={60} skillColor={'#2831bf'} lang={"JavaScript"} />
        <SkillDonut skillPercentage={60} skillColor={'#5d07f2'} lang={"React"} />
        <SkillDonut skillPercentage={50} skillColor={'#7c07f2'} lang={"C#"} />
        <SkillDonut skillPercentage={20} skillColor={'#9007f2'} lang={"C"} />
      </div>
    </div>
  );
}

function ProjectSection() {
  return (
    <div id='projects' className='p-5'>
      <div className='flex justify-between mt-10'>
        <div className='project-bubble w-80 h-80 bg-project-bg rounded-full overflow-visible inline-block'>
          <div className='absolute mt-36 ml-36 whitespace-nowrap'>
            <h1 className='text-xl tracking-[10px] ml-2'>FEATURED PROJECT</h1>
            <h1 className='text-5xl mt-3'>Giddion - An All Purpose<br/>Discord Bot</h1>
            <h1 className='text-2xl mt-3 ml-1'><b>Created in: Python, PyCord</b></h1>
            <p className='ml-2 mt-3 text-xl'>Capable of playing music from title or URL, responding<br/>
                                             to specific keywords, and moderating a server, this<br/>
                                             bot packs the power to organize a server through<br/>
                                             the magic of the discord python module and the async<br/>
                                             functionality of python!</p>
          </div>
        </div>
        <Image src='/giddion-placeholder.gif' width={300} height={100} alt='giddion placeholder' className='mt-32'/>
      </div>
      
      <div className='flex justify-between mt-44'>
      <Image src='/crypto-placeholder.gif' width={300} height={100} alt='crypto placeholder' className='mt-32 ml-11'/>
        <div className='project-bubble w-80 h-80 bg-project-bg rounded-full overflow-visible'>
          <div className='mt-36 -ml-[250px]  whitespace-nowrap'>
            <h1 className='text-xl tracking-[10px] ml-1'>FEATURED PROJECT</h1>
            <h1 className='text-5xl mt-3'>Encryption Messenger</h1>
            <h1 className='text-2xl mt-3 ml-1'><b>Created in: C#</b></h1>
            <p className='ml-2 mt-3 text-xl'>This webserver, created in C#, is capable of using<br/>
                                             the RSA encryption algorithm to create Base64 encoded<br/>
                                             private and public key for a user, and then using C#'s<br/>
                                             BigInteger class, encodes a given message and sends it<br/>
                                             to another server hosted elsewhere, with the same code.<br/>
                                             It uses asynchronous programming to send/listen for<br/>
                                             incoming HTTP requests, and then perform the operations<br/>
                                             accordingly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <div className='h-22 p-14'>
      <div className='flex justify-between text-2xl'>
        <h1 className='bg-white rounded-full w-20 h-20 text-4xl text-black text-center pt-5'><b>AK</b></h1>
        <div className='flex justify-between gap-16'>
          <a href="#skills"><h1><b>SKILLS</b></h1></a>
          <a href="#projects"><h1><b>PROJECTS</b></h1></a>
          <a href='/Resume-Aashwin_Katiyar.pdf'><h1><b>RESUME</b></h1></a>
          <h1><b>HOBBIES</b></h1>
          <a href="https://www.linkedin.com/in/aashwin-katiyar-104b58183/" className='-mt-3'>
            <Image src="/icon-linkedin.svg" width={50} height={50} alt="LinkedIn"/>
          </a>
          <a href="https://github.com/aashwink9" className='-mt-4'>
            <Image src="/icon-github.svg" width={54} height={54} alt="Github"/>
          </a>
        </div>
      </div>
    </div>
  );
}


function NameHeading() {
  return (
    <div className='absolute top-[40vh] w-full px-32'>
      <div className='flex justify-center gap-28'>
        <div>
          <h1 className='text-7xl'>Hi, I'm Aashwin</h1>
          <TypewriterSub className={roboto_mono.className}/>
          <button className={`${roboto_slab.className} bg-white text-black text-2xl text-center 
          rounded-3xl w-32 h-11 mt-5`}>
            Hire Me
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
}

function LandingPage() {
  return (
    <div className='w-full h-[100vh]'>
      <NavBar/>
      <NameHeading/>
    </div>
  );
}

function AllOtherSections() {
  return (
    <div className='p-14'>
      <SkillSection className={roboto_mono.className}/>
      <ProjectSection/>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <LandingPage/>
      <AllOtherSections/>
    </main>
  )
}
