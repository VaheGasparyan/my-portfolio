import {useState} from "react";

import './header.css';

const Header = () => {
    const [closeIcon, setCloseIcon] = useState(false);

    const handleClick = () => {
        setCloseIcon(prevState => !prevState);
    }

    return (
        <header className='header'>
            <a href="#" className="logo"><i className='bx bx-code-curly'></i> Vahe Gasparyan</a>

            <div className="menu-icons" onClick={handleClick}>
                <i className={closeIcon ? 'bx bx-x' : 'bx bx-menu'} id='menu-icon'></i>
            </div>


            <nav className={closeIcon ? 'navbar active' : 'navbar'}>
                <a href="#home" className='active headerHome' onClick={handleClick}>Home</a>
                <a href="#about" className='headerAbout' onClick={handleClick}>About</a>
                <a href="#skills" className='headerSkills' onClick={handleClick}>Skills</a>
                <a href="#projects" className='headerProjects' onClick={handleClick}>Projects</a>
            </nav>
        </header>
    )
};

export default Header;