import React from "react";
import PropTypes from "prop-types";
import "./Profil.css";
import image2 from "../image/image2.PNG";
const constante = () => {
    alert("heloo ameni ");
};
function Profil(props) {
    /*console.log(props);*/

    return (
        <div className="titre">
            <h1>{props.fullNme}</h1>
            <h1>{props.bio}</h1>
            <h1>{props.profession}</h1>
            <h1>{props.photo}</h1>
            {/* {props.handleName(props.fullNme)} */}
            {props.children}

            <div>
                <button onClick={() => props.handleName(props.fullNme)}>
                    cliker
                </button>
                {/* <button onClick={() => constante()}>click</button>*/}
            </div>
        </div>
    );
}

Profil.defaultProps = {
    bio: "informatique",
    profession: "denticte",
    /*photo: <img src={image2} />*/
    /*</div>photoameni: constante,*/
};
Profil.propTypes = {
    fullNme: PropTypes.string.isRequired,
    bio: PropTypes.string,
    profession: PropTypes.string,
};
export default Profil;
