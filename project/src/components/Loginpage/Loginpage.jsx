
import './Loginpage1.css';
import { Link } from 'react-router-dom';
import gmail_icon from '../assets/gmail_icon.png';
import pass_icon from '../assets/pass_icon.png';
function Loginpage()
{
    return(
        <div className='container'>
            <div className="header">
                <div className="text">Login</div>
                <div className="underline"></div>
                
            </div>
            <div className="inputs">
    
                
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
                <div className={"submit"}>
                    <Link to ="/register" id="lk">Sign Up</Link></div>
                <div className={"submit"}>Login</div>
            </div>
        </div>
    );
}
export default Loginpage;