import "react";
import AdalabLogo from '../images/adalab.png';
import '../styles/footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <img className="footer-image" src={AdalabLogo} alt="Logo Adalab" />
        </div>
    );
};

export default Footer;