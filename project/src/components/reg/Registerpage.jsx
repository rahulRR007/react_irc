
import './Registerpage.css';
import { Link } from 'react-router-dom';
import gmail_icon from '../assets/gmail_icon.png';
import user_icon from '../assets/user_icon.png';
import pass_icon from '../assets/pass_icon.png';
function Registerpage()
{
    return(
        <div className='container'>
            <div className="header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
    
                <div className="input">
                    <img src={user_icon} alt="" className="icon"/>
                    <input type="text"  placeholder="Enter the user Name"/>
                </div>
                
                <div className="input">
                    <img src={gmail_icon} alt="" className="icon" />
                    <input type="email" placeholder="Enter Mail Id" />
                </div>
                <div className="input"> 
                    <img src={pass_icon} alt="" className="icon" />
                    <input type="password" placeholder="Enter Password" />
                </div>
            </div>
            
                <div className="forgot-password">Forgot Password? <span>Click here</span></div>
            
            
            <div className="submit-container">
                <div className={"submit"}>Sign Up</div>
                <div className={"submit"}>
                    <Link to="/" id ="lk">Login</Link>
                </div>
            </div>
        </div>
    );
}
export default Registerpage;