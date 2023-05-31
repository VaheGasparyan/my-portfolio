import { v4 as uuid } from 'uuid';

import countries from 'images/countries.png';
import todoList from 'images/todo-list.png';
import memoryGame from 'images/memory-game.png';
import ageCalculator from 'images/age-calculator.png';

export const projects_data = [
    {
        imgSrc: countries,
        name: 'Countries',
        id: uuid(),
        tools: ['Material UI, ', 'Css, ', 'React js, ', 'Redux Toolkit, ', 'Typescript'],
        projectLink: 'https://countries-lyart-eight.vercel.app/'
    },

    {
        imgSrc: todoList,
        name: 'Todo List',
        id: uuid(),
        tools: ['HTML, ', 'Css, ', 'React js, ', 'Typescript, ', 'MUI'],
        projectLink: 'https://todo-list-weld-seven.vercel.app/'
    },

    {
        imgSrc: memoryGame,
        name: 'Memory game',
        id: uuid(),
        tools: ['HTML, ', 'Css, ', 'Javascript'],
        projectLink: 'https://memory-game-tan-phi.vercel.app/'
    },

    {
        imgSrc: ageCalculator,
        name: 'Age Calculator',
        id: uuid(),
        tools: ['Material UI, ', 'Css, ', 'React js', 'Typescript'],
        projectLink: 'https://age-calculator-black.vercel.app/'
    }
]