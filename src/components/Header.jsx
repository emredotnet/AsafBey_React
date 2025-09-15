import '../styles/header.css';
import logo from '../assets/logoseffaf1.png';
const Header = () => {
    return (
        <header id="sec_header" class="header">
            <nav class="nav">
                <div class="logo"><img src={logo} alt="ASAF BEY logo" /><a href="/" >ASAF BEY</a></div>
                <div class="nav-links">
                    <a href="#sec_story">Hikaye</a>
                    <a href="#sec_aroma">Aroma</a>
                    <a href="#sec_urun">Ürün</a>
                </div>
            </nav>
        </header>
    );
}

export default Header;