import React from 'react';

const Hero = (props) => {
    return(
        <div className="jumbotron text-center">
            {props.title && <h1 className="display-1 pb-2 font-weight-bolder">{props.title}</h1>}
            {props.subTitle && <h3 className='font-weight-light display-4 pb-2'>{props.subTitle}</h3>}
            {props.text && <p className="lead font-weight-light text-primary">{props.text}</p>}
        </div>
    );
}


export default Hero;