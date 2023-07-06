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


export function SkillCloud() {
    return (
        <div className='text-heading-blue px-10 py-20 flex justify-between flex-wrap gap-x-10 gap-y-10'>
					<div className='skill_sec w-32 h-24 text-center text-heading-purple'><h1 className='mt-8'>RUST</h1></div>
					<div className='skill_sec w-32 h-24 text-center text-heading-purple'><h1 className='mt-8'>TYPESCRIPT</h1></div>
					<div className='skill_sec w-32 h-24 text-center text-heading-purple'><h1 className='mt-8'>.NET</h1></div>
					<div className='skill_sec w-32 h-24 text-center text-heading-purple'><h1 className='mt-8'>MAVEN</h1></div>
					<div className='skill_sec w-32 h-24 text-center text-heading-purple'><h1 className='mt-8'>MYSQL</h1></div>
					<div className='skill_sec w-32 h-24 text-center text-heading-purple'><h1 className='mt-6'>POSTGRE<br/>SQL</h1></div>
					<div className='skill_sec w-32 h-24 text-center text-heading-purple'><h1 className='mt-6'>MONGO<br/>DB</h1></div>

					<div className='skill_sec w-32 h-24 text-center text-heading-purple'><h1 className='mt-6'>SPRING<br/>BOOT</h1></div>
					<div className='skill_sec w-32 h-24 text-center text-heading-purple'><h1 className='mt-8'>BASH</h1></div>
					<div className='skill_sec w-32 h-24 text-center text-heading-purple'><h1 className='mt-8'>LATEX</h1></div>
					<div className='skill_sec w-32 h-24 text-center text-heading-purple'><h1 className='mt-8'>WPF</h1></div>
					<div className='skill_sec w-32 h-24 text-center text-heading-purple'><h1 className='mt-8'>XAML</h1></div>
					<div className='skill_sec w-32 h-24 text-center text-heading-purple'><h1 className='mt-8'>HTML</h1></div>
					<div className='skill_sec w-32 h-24 text-center text-heading-purple'><h1 className='mt-8'>CSS</h1></div>

					<div className='skill_sec w-32 h-24 text-center text-heading-purple'><h1 className='mt-8'>NEXTJS</h1></div>
					<div className='skill_sec w-32 h-24 text-center text-heading-purple'><h1 className='mt-6'>TAILWIND<br/>CSS</h1></div>
					<div className='skill_sec w-32 h-24 text-center text-heading-purple'><h1 className='mt-8'>NODEJS</h1></div>
					<div className='skill_sec w-32 h-24 text-center text-heading-purple'><h1 className='mt-8'>ANGULAR</h1></div>
					<div className='skill_sec w-32 h-24 text-center text-heading-purple'><h1 className='mt-8'>VUE</h1></div>
					<div className='skill_sec w-32 h-24 text-center text-heading-purple'><h1 className='mt-6'>MATERIAL<br/>UI</h1></div>
					<div className='skill_sec w-32 h-24 text-center text-heading-purple'><h1 className='mt-6'>CHARTS.JS</h1></div>

					<div className='skill_sec w-32 h-24 text-center text-heading-purple'><h1 className='mt-6'>RESTFUL<br/>API</h1></div>
					<div className='skill_sec w-32 h-24 text-center text-heading-purple'><h1 className='mt-8'>WEBGL</h1></div>
					<div className='skill_sec w-32 h-24 text-center text-heading-purple'><h1 className='mt-8'>P5JS</h1></div>
					<div className='skill_sec w-32 h-24 text-center text-heading-purple'><h1 className='mt-8'>FLASK</h1></div>
					<div className='skill_sec w-32 h-24 text-center text-heading-purple'><h1 className='mt-8'>PANDAS</h1></div>
					<div className='skill_sec w-32 h-24 text-center text-heading-purple'><h1 className='mt-8'>NUMPY</h1></div>
					<div className='skill_sec w-32 h-24 text-center text-heading-purple'><h1 className='mt-8'>DASH</h1></div>
        </div>
    );
}