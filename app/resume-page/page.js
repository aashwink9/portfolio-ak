import './res-button.css';
import Image from 'next/image';
import Link from 'next/link';

function ResButton() {
	return (
		<div className='p-10'>
			<div className='flex justify-between'>
				<Link href='/'>
					<Image src='/left-arrow.svg' width={80} height={80} alt='left-arrow'/>
				</Link>
				<b><h1 className='text-center sm:text-5xl text-3xl'>Choose a Resume format to download</h1></b>
				<div></div>
			</div>
			<div className='flex justify-center flex-wrap gap-y-10 gap-x-10 pt-10'>
				<a href='/Resume-Aashwin_Katiyar.pdf'><button className='res-button text-black text-3xl w-80 h-28'>PDF</button></a>
				<a href='/Resume-Aashwin_Katiyar.docx'><button className='res-button text-black text-3xl w-80 h-28'>DOCX</button></a>
			</div>
		</div>
	);
}

function ResSection() {
	return (
		<div>
		<div className='res-bubble ml-10 mr-10 p-10 mt-10 rounded-2xl'>
			<h1 className='text-3xl sm:text-4xl'><b>Education</b></h1>
			<h4 className='text-xl'><a>Rochester Institute of Technology</a><br/>
						<b>Degree:</b> Bachelor of Science<br/>
						<b>Major:</b> Computer Science<br/>
						<b>Expected August 2023</b>
			</h4>
		</div>

		<div className='res-bubble ml-10 mr-10 p-10 mt-5 rounded-2xl'>
				<h1 className='text-3xl sm:text-4xl'><b>Work Experience</b></h1>
				<h2 className='text-2xl'><a>Crestron Electronics</a><br/></h2>
				<ul className='list-disc pl-5 sm:text-xl'>
					<li>Created a dashboard application written in python, to display vital information for IoT devices.</li>
					<li>Utilized the python dash framework and deployed it to Azure Functions.</li>
					<li>Extracted the information from Datadog and Streambase using REST API and further 
							enriched the data using pandas dataframes to display it on various components.</li>
					<li>Increased the performance by rewriting the entire application into JavaScript, 
							ReactJS, tailwind CSS, and Material UI using self-taught learning to progressively 
							enhance the application, within the guidelines of the Scrum Methodology, and 
							used DevOps CI/CD to deploy it to Azure Static Web Apps.</li>
					<li>Performance increase enabled the frontend to display data in 1 second as 
							compared to 20 seconds with the python dash server.</li>
				</ul>
		</div>

		<div className='res-bubble ml-10 mr-10 p-10 mt-5 rounded-2xl'>
			<h1 className='text-3xl sm:text-4xl'><b>Technical Projects</b></h1>
			<ol className='list-decimal pl-7'>
				<li className='text-2xl'><b>Sentiment Analysis Algorithm</b></li>
					<ul className='list-disc pl-5 sm:text-xl'>
						<li>Created a sentiment analysis algorithm that utilizes 
								basic natural language processing to provide a polarizing 
								weightage (in percentage) to tweets extracted from Twitter.</li>
						<li>Coded the algorithm in python and used libraries like 
								nltk (for NLP), pandas (for dataframes) and Tweepy (for 
								extracting tweets from specific accounts using the Twitter API).</li>
					</ul>

				<li className='text-2xl'><b>E-store Website</b></li>
					<ul className='list-disc pl-5 sm:text-xl'>
							<li>Created a sentiment analysis algorithm that utilizes 
									basic natural language processing to provide a polarizing 
									weightage (in percentage) to tweets extracted from Twitter.</li>
							<li>Coded the algorithm in python and used libraries like 
									nltk (for NLP), pandas (for dataframes) and Tweepy (for 
									extracting tweets from specific accounts using the Twitter API).</li>
					</ul>

				<li className='text-2xl'><b>Java TCP/UDP Server</b></li>
					<ul className='list-disc pl-5 sm:text-xl'>
							<li>Coded a TCP ServerSocket server in java that parsed and accepted 
								GET and POST requests from a client and performed the associated operations.</li>
							<li>Improved the performance of the server by creating a UDP server 
								that wrote and transmitted large data files to and from a client.</li>
							<li>Implemented sliding-window error checking protocol for the UDP 
								server to ensure order of the packets.</li>
					</ul>

				<li className='text-2xl'><b>Movie Simulation</b></li>
					<ul className='list-disc pl-5 sm:text-xl'>
							<li>Designed a CLI python application that uses PostgreSQL and SQL 
								queries to perform basic CRUD operations.</li>
							<li>The application lets a user search for movies using a catalogue 
								that was created from a dataset from Kaggle.</li>
							<li>Performed Exploratory Data Analysis using synthetic data and 
								technologies like Pandas, Plotly, NumPy to generate interesting graphs.</li>
					</ul>

				<li className='text-2xl'><b>Discord Bot</b></li>
					<ul className='list-disc pl-5 sm:text-xl'>
							<li>Coded a discord bot in Python that utilizes the discord bot 
								API through the discord python library to output phrase specific data when 
								certain keywords are sent to a text channel. Deployed the bot to Heroku.</li>
							<li>Coded asynchronous functions to simultaneously listen for user 
								requests in a non-blocking way.</li>
							<li>Utilized the ytdl and FFMPEG python libraries to add functionality 
								for playing music.</li>
					</ul>

				<li className='text-2xl'><b>Prime Number Generator</b></li>
					<ul className='list-disc pl-5 sm:text-xl'>
							<li>Created a C# application capable of generating and printing out exceptionally 
								large prime numbers.</li>
							<li>Utilized the BigInteger class and RandomNumberGenerator class to produce 
								cryptographically strong prime numbers and used the C# Parallel library to 
								implement multi-threading and increase the performance of the program.</li>
					</ul>

				<li className='text-2xl'><b>Visual Pathfinder</b></li>
					<ul className='list-disc pl-5 sm:text-xl'>
							<li>Developed an AI mini-game that takes paths as inputs for a terrain and 
								visitation-points and traces the shortest path to reach an end point.</li>
							<li>Coded the algorithm in python and used the A* heuristics algorithm 
								to find the path points.</li>
							<li>Used the Pillow image library to trace path points.</li>
					</ul>
					
				<li className='text-2xl'><b>Ball Bouncing Game</b></li>
					<ul className='list-disc pl-5 sm:text-xl'>
							<li>Created a simple ball bouncing game in Unity.</li>
							<li>The game involvs avoiding block enemies as a ball protagonist.</li>
							<li>Coded all the logic for the game in C#.</li>
					</ul>
				
				<li className='text-2xl'><b>Connected Graph Checker</b></li>
					<ul className='list-disc pl-5 sm:text-xl'>
							<li>Created a java CLI program that uses BFS to check whether a given 
								graph (represented by an adjacency list) is connected or not.</li>
							<li>Implemented the adjacency list using 2D integer arrays for efficiency.</li>
					</ul>

				<li className='text-2xl'><b>Luxo Graphics Art</b></li>
					<ul className='list-disc pl-5 sm:text-xl'>
							<li>Created a primitive 2D image of luxo the lamp in p5js using 
								tessellation and midpoint drawing algorithm.</li>
							<li>Implemented the code in P5js on a 500x500 canvas.</li>
							<li>Recreated the art in 3D by creating a model in blender, 
								converting it into triangles, and then defining the 3D coordinates 
								in the WebGL space to reconstruct the model with tessellation.</li>
					</ul>

			</ol>
		</div>
	</div>
	);
}


export default function Page() {
    return (
			<div>
        <ResButton/>
				<ResSection/>
			</div>
    );
}