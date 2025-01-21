import worldMap from '../assets/world-map.png';
import parrot from '../assets/parrot.png';

const Header = () => (
    <div className="chatbox-header-wrapper" style={{ backgroundImage: `url(${worldMap})` }}>
        <div className="chatbox-header-wrapper-overlay"></div>
        <div className="chatbox-header-content-wrapper">
            <img src={parrot} alt="parrot" />
            <div>
                <h1 className="chatbox-header-title">PollyGlot</h1>
                <p>Perfect Translation everytime</p>
            </div>
        </div>
    </div>
);

export default Header;
