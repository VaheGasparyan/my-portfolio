import './header.css';

const Header = () => {
    return (
        <header className='header'>
            <a href="#" className="logo"><i className='bx bx-code-curly'></i> Vahe Gasparyan</a>

            <i className='bx bx-menu' id='menu-icon'></i>

            <nav className="navbar">
                <a href="#home" className='active headerHome'>Home</a>
                <a href="#about" className='headerAbout'>About</a>
                <a href="#skills" className='headerSkills'>Skills</a>
                <a href="#projects" className='headerProjects'>Projects</a>
            </nav>
        </header>
    )
};

export default Header;