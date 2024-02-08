import {Link} from "react-router-dom";


function Navbar(){
    const flexstyle = {
        display:"flex",
        justifyContent:"space-between",
        backgroundColor:"black",
        color:"white",
        padding:"5px",
    };

    const linkstyle = {
        textDecoration:"none",
        color:"white,"
    }

    return(
    <nav style={flexstyle}>
        <div className="nav">
            <div>
            <Link to="/Home" style={linkstyle}><h1>Kalvium <span className="emo">❤</span> </h1></Link>
            </div>
            
         <div style={flexstyle} className="bar">
            <div>
            <Link style={linkstyle} to="/Contacts"><h1>Contacts</h1></Link>
            </div>
            <div>
            <Link style={linkstyle} to="/register"><h1>Register-Form</h1> </Link> 
            </div>
         </div>
      </div>
    </nav>
    )
}

export default Navbar;
 
