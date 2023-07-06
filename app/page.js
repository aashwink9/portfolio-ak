import Image from 'next/image'
import { Roboto_Mono, Roboto_Slab } from 'next/font/google';
import { SkillDonut } from './components/skill-charts';
import { TypewriterSub } from './components/client-comps';
import Link from 'next/link';
import { SkillCloud } from './components/skill-charts';
import './hire-button.css';

const roboto_mono = Roboto_Mono({
  weight: '400',
  subsets: ['latin'],
});

const roboto_slab = Roboto_Slab({
  weight: '800',
  subsets: ['latin'],
});

function SkillSection() {
  return (
    <div id='skills' className='bg-skill-bg rounded-2xl p-5'>
      <h1 className='text-5xl text-center mt-5'><b>SKILLS</b></h1>
      <div className='flex flex-wrap gap-y-12 gap-x-16 justify-center p-10'>
        <SkillDonut skillPercentage={80} skillColor='#5bd7f0' lang="Python" />
        <SkillDonut skillPercentage={70} skillColor='#5b9ef0' lang="Java" />
        <SkillDonut skillPercentage={60} skillColor='#2831bf' lang="JavaScript" />
        <SkillDonut skillPercentage={60} skillColor='#5d07f2' lang="React" />
        <SkillDonut skillPercentage={50} skillColor='#7c07f2' lang="C#" />
        <SkillDonut skillPercentage={20} skillColor='#9007f2' lang="C" />
      </div>

      <div className='p-10 mt-5'>
        <h1 className='text-2xl tracking-[7px] text-center text-heading-purple'><b>MORE SKILLS</b></h1>
        <SkillCloud/>
      </div>
    </div>
  );
}

function ProjectSection() {
  return (
    <div id='projects' className='p-5'>
      <div className='flex justify-between mt-10'>
        <div className='project-bubble w-80 h-80 bg-project-bg rounded-full overflow-visible inline-block'>
          <div className='absolute mt-36 ml-36 w-[600px]'>
            <h1 className='text-heading-purple text-xl tracking-[10px] ml-2'>FEATURED PROJECT</h1>
            <h1 className='text-5xl mt-3'>Portfolio Website</h1>
            <h1 className='text-2xl mt-3 ml-1'><b>Tech Stack: NextJS, ReactJS, Tailwind CSS, JavaScript</b></h1>
            <p className='ml-2 mt-3 text-xl'>This portfolio website (currently still in development) is my latest proud creation.
                                               Although the functionality of it is limited, I will be adding some exciting 
                                               new features, animations, and pages over the coming days, to showcase my work 
                                               more prominently. Thank you for checking out the early beta!</p>
          </div>
        </div>
        <div></div>
      </div>

      <div className='flex justify-between mt-36'>
        <div></div>
          <div className='project-bubble w-80 h-80 bg-project-bg rounded-full overflow-visible'>
            <div className='mt-36 -ml-[250px] w-[600px]'>
              <h1 className='text-heading-purple text-xl tracking-[10px] ml-1'>FEATURED PROJECT</h1>
              <h1 className='text-5xl mt-3'>Giddion - An All Purpose Discord Bot</h1>
              <h1 className='text-2xl mt-3 ml-1'><b>Created in: Python, Discord, YTDL</b></h1>
              <p className='ml-2 mt-3 text-xl'>This Discord Bot was my first ever successful project made.
                                               Equipped with the power of asynchronous programming, this bot
                                               continuously listens to a text channel in discord for commands given
                                               by a user. The commands can be anything ranging from &quot;give me an introduction&quot;
                                               to &quot;tell me a joke&quot;. If a command is prefixed by a &quot;#&quot; with keywords for playing music,
                                               this bot uses the youtube API (through the YTDL library) to search for music on youtube,
                                               download it and then play it by connecting to a voice channel. For example,
                                               &quot;#play [name of the song]&quot; can trigger it to play a song, and &quot;#pause&quot; can pause the
                                               currently playing song.
                </p>
            </div>
         </div>
      </div>

      <div className='flex justify-between mt-44'>
          <div className='project-bubble w-80 h-80 bg-project-bg rounded-full overflow-visible inline-block'>
            <div className='absolute mt-36 ml-36 w-[600px]'>
              <h1 className='text-heading-purple text-xl tracking-[10px] ml-2'>FEATURED PROJECT</h1>
              <h1 className='text-5xl mt-3'>Encryption Messenger</h1>
              <h1 className='text-2xl mt-3 ml-1'><b>Created in: C#</b></h1>
              <p className='ml-2 mt-3 text-xl'>This webserver, created in C#, is capable of using
                                             the RSA encryption algorithm to create Base64 encoded
                                             private and public key for a user, and then using C#&apos;s
                                             BigInteger class, encodes a given message and sends it
                                             to another server hosted elsewhere, with the same code.
                                             It uses asynchronous programming to send/listen for
                                             incoming HTTP requests, and then perform the operations
                                             accordingly.</p>
            </div>
          </div>
          <div></div>
      </div>

      <div className='flex justify-between mt-36'>
        <div></div>
          <div className='project-bubble w-80 h-80 bg-project-bg rounded-full overflow-visible'>
            <div className='mt-36 -ml-[250px] w-[600px]'>
              <h1 className='text-heading-purple text-xl tracking-[10px] ml-1'>FEATURED PROJECT</h1>
              <h1 className='text-5xl mt-3'>Java TCP/UDP Server</h1>
              <h1 className='text-2xl mt-3 ml-1'><b>Created in: Java</b></h1>
              <p className='ml-2 mt-3 text-xl'>This Server showcases the different aspects of
                                              two of the most well known transmission protocols: 
                                              TCP and UDP. The project actually involves two server: 
                                              one TCP, and one UDP. The TCP server receives files from 
                                              a client and for the image files that are too large, 
                                              it sends them to the UDP server in chunked packets.
                                              The server acknowledges and builds upon the shortcomings 
                                              of both protocols and attempts to illustrate as such too.
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
        <h1 className='bg-white rounded-full w-20 h-20 text-4xl 
        text-black text-center pt-5'><b> AK </b></h1>
        <div className='flex justify-between gap-16'>
          <a href="#skills"><h1><b>SKILLS</b></h1></a>
          <a href="#projects"><h1><b>PROJECTS</b></h1></a>
          <Link href="/resume-page"><h1><b>RESUME</b></h1></Link>
          <h1 className='text-unfinished-grey cursor-not-allowed'><b>HOBBIES</b></h1>
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
          <h1 className='center-name text-7xl'><b>Hi, I&apos;m Aashwin</b></h1>
          <TypewriterSub className={roboto_mono.className}/>
          <a href='mailto:ak2577@rit.edu'>
            <button className={`${roboto_slab.className} hire_button mt-5 w-32 h-12 text-xl`}>
              Hire Me
            </button>
          </a>
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
