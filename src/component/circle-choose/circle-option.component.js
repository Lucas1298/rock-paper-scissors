import React from 'react';

import OPTION_DATA from "../../option.data"

import "./circle-option.styles.scss"


const circleOption = ({ props }) => {
    return (
        <div className="circle-option">
            <div className={`border-${props}`}>

                <div className={`icon`}>
                    {
                        OPTION_DATA.map(({option, imagen }) => (
                            option === props ? <img src={imagen} alt="" /> : null
                        ))
                    }
                </div>

            </div>
        </div>
    );
}

export default circleOption;