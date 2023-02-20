import React from "react";


let dat = new Date;
let year = dat.getFullYear();

function Footer(){
    return(
        <footer>
           <p>Copyright ©
            {year}</p> 
        </footer>
        
    );
};

export default Footer;