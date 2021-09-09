import React from 'react';



const Navi = () =>{


    return(
        <nav role="navigation">
            <div id="menuToggle">
                <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>

                <ul id="menu">
                    <a href="#"><li><i className="fas fa-heartbeat pulse"></i><div> Home</div></li></a>
                    <a href="#"><li><i className="fas fa-heartbeat pulse"></i><div> Oferta</div></li></a>
                    <a href="#"><li><i className="fas fa-heartbeat pulse"></i><div> Zespol</div></li></a>
                    <a href="#"><li><i className="fas fa-heartbeat pulse"></i><div> Galeria</div></li></a>
                    <a href="#"><li><i className="fas fa-heartbeat pulse"></i><div> Kontakt</div></li></a>
                </ul>
            </div>
        </nav>
    )
}

export default Navi;