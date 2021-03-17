import React from "react";
import Profil from "../Profil/Profil";
import image from "../image/pc.jpg";

function ProfilParent() {
    const HandleName = (fullNme) => {
        alert(`alert ${fullNme} of profile user`);
    };
    return (
        <div>
            <div className="App">
                <Profil
                    fullNme="ameni"
                    profession="artiste"
                    handleName={HandleName}
                >
                    <img src={image} alt="profile" />
                </Profil>
            </div>
            <p>
                hello <a style={{ display: "block" }}>hi</a>
            </p>
        </div>
    );
}

export default ProfilParent;
