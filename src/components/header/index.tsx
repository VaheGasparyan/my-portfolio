import './header.css';

const Header = () => {
    return (
        <header className='header'>
            <a href="#" className="logo"><i className='bx bx-code-curly'></i> Vahe Gasparyan</a>

            <i className='bx bx-menu' id='menu-icon'></i>

            <nav className="navbar">
                <a href="#home" className='active'>Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
            </nav>
        </header>
    )
};

export default Header;