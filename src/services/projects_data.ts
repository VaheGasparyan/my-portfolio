import { v4 as uuid } from 'uuid';

import countries from 'images/countries.png';
import todoList from 'images/todo-list.png';
import memoryGame from 'images/memory-game.png';

export const projects_data = [
    {
        imgSrc: countries,
        name: 'Countries',
        id: uuid(),
        tools: ['Material UI, ', 'Css, ', 'React js, ', 'Redux Toolkit, ', 'Typescript']
    },

    {
        imgSrc: todoList,
        name: 'Todo List',
        id: uuid(),
        tools: ['HTML', 'Css', 'React js', 'Typescript', 'MUI']
    },

    {
        imgSrc: memoryGame,
        name: 'Memory game',
        id: uuid(),
        tools: ['HTML', 'Css', 'Javascript']
    }
]