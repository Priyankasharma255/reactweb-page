import React from 'react';
import {NavLink} from 'react-router-dom';

const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid"> 
                    <div className="row">
                        <div className="col-10 mx-auto"> 
                            <div className="row"> 
                                <div className="col-md-6 pt-lg-0 order-2 order-lg-1">
                                    <h1>
                                        {props.name}
                                    </h1>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when</p>
                                    <NavLink to={props.visit}>
                                        {props.btnname}
                                    </NavLink>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2">
                                    <img src={props.imgsrc} className="img-fluid animated" alt="Common image" />
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>        
            </section>
        </>
    )
}

export default Common; 