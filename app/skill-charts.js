"use client";
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

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