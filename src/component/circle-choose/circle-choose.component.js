import React from 'react';
import "./circle-choose.styles.scss"
import rock from "../../image/icon-rock.svg"
import paper from "../../image/icon-paper.svg"
import scissor from "../../image/icon-scissors.svg"
const circleChoose = ({ props }) => {
    return (
        <div className="circleChoose">

            <div className={`border-below`}>
                <div className={`border-${props}`}>

                    <div className={`icon`}>
                        {
                            props === "rock" ? <img src={rock} alt="" />
                                : props === "paper" ? <img src={paper} alt="" />
                                    : props === "scissor" ? <img src={scissor} alt="" />
                                        : null
                        }
                        <div className="circle-white">
                            <div className="border-below-second">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default circleChoose;