import React from 'react'
import Navi from './Navi'


const Header = () =>{

   


    return (
        <header className='mainContainer'>
            <div className='headerContainer'>
                <div className='logoContainer' >
                    <div className="menu" >
                        <Navi/>
                        <div className='logo'></div>
                    </div>                      
                </div>
                <div className='callContainer'>
                <div>ZAMOW TRANSPORT</div>
                <b> 728 919 413</b>
                <i className="fas fa-phone-square"></i>
                    </div>
             </div>
        </header>
              
    )
}

    


export default Header;