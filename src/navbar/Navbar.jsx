
import "./navbar.css"
function Navbar() {
    return (
        <div className="Navbar">
            <img className="logo" src="https://www.transparentpng.com/thumb/camera-logo/shaped-black-camera-logo-transparent-background--fnanbm.png" />
            <h1 className="logoname">localstore</h1>
            <ul>
                <li>home</li>
                <li>product</li>
                <li>contact</li>
            </ul>
            <button  className="login">login</button>

            <img className="icon" src="https://p9n2c8y2.rocketcdn.me/wp-content/uploads/2021/05/7.png.webp" />
        </div>
    );
}

export default Navbar;