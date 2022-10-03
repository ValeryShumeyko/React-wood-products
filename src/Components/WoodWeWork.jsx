import React from 'react';
import { useState } from 'react';
import '../styles/Home/WoodWeWork.css';
import MyTitle from './UI/title/MyTitle';
import WoodItem from './home/WoodItem';



const WoodWeWork = () => {
    const [woods] = useState([
        { 
            id: 1, 
            name: 'Oak', 
            img: 'oak.png',
            yes: ['Durability', 'Beautiful texture', 'Water resistance'],
            no: ['Expensive']
        },
        { 
            id: 2, 
            name: 'Buk',
            img: 'buk.png',
            yes: ['Durability'],
            no: ['Hard to handle'],
        },
        { 
            id: 3, 
            name: 'Ash', 
            img: 'ash.png',
            yes: ['Durability'],
            no: ['Hard to handle'],
        },
    ])

    return (
        <div className='wood-we-work'>
            <h1>
                <MyTitle>THE WOOD WE WORK WITH</MyTitle>
            </h1>
            <div className="content">
                {woods.map(wood =>
                    <WoodItem wood={wood} key={wood.id}/>
                )}
            </div>
        </div>
    );
};

export default WoodWeWork;