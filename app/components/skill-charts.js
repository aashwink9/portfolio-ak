"use client";
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './comp-styles.css';

ChartJS.register(ArcElement, Tooltip, Legend);

export function SkillDonut({skillColor, skillPercentage, lang}) {
    const options = {
        cutout: 50
    };
    const data = {
        datasets: [
            {
            data: [(100-skillPercentage), skillPercentage],
            backgroundColor: [
                'transparent',
                skillColor,
            ],
            borderColor: [
                'transparent',
                'transparent',
            ]
            },
        ],
    };
    return (
      <div className='w-36 h-36'>
        <Doughnut data={data} options={options}/>
        <h1 className='text-center mt-5'>{lang}</h1>
      </div>
    );
}

function OrbText({txt, br, txt_props}){
	if (br){
		const txt_split = txt.split(" ");
		return (
		<div>
			<div className='orb w-36 h-36'></div>
			<h1 className={`blur-none text-center text-2xl ${txt_props}`}>
				{txt_split[0]}<br/>{txt_split[1]}
			</h1>
		</div>
		);
	}
	else {
		return (
			<div>
				<div className='orb w-36 h-36'></div>
				<h1 className={`blur-none text-center text-2xl ${txt_props}`}>{txt}</h1>
			</div>
		);
	}
	
}

export function SkillCloud() {
    return (
        <div className='text-heading-blue px-10 py-20 flex justify-between flex-wrap gap-x-20 gap-y-20'>
					<OrbText txt='NEXTJS' br={false} txt_props='-mt-24' />
					<OrbText txt='TAILWIND CSS' br={true} txt_props='-mt-28'/>
					<OrbText txt='TYPESCRIPT' br={false} txt_props='-mt-24'/>
					<OrbText txt='HTML5' br={false} txt_props='-mt-24'/>
					<OrbText txt='MYSQL' br={false} txt_props='-mt-24'/>

					<OrbText txt='POSTGRE SQL' br={true} txt_props='-mt-28'/>
					<OrbText txt='MONGO DB' br={true} txt_props='-mt-28'/>
					<OrbText txt='SPRING BOOT' br={true} txt_props='-mt-28'/>
					<OrbText txt='NODEJS' br={false} txt_props='-mt-24'/>
					<OrbText txt='ANGULAR' br={false} txt_props='-mt-24'/>

					<OrbText txt='PANDAS' br={false} txt_props='-mt-24'/>
					<OrbText txt='NUMPY' br={false} txt_props='-mt-24'/>
					<OrbText txt='PLOTLY' br={false} txt_props='-mt-24'/>
					<OrbText txt='DASH' br={false} txt_props='-mt-24'/>
					<OrbText txt='NLTK' br={false} txt_props='-mt-24'/>
        </div>
    );
}