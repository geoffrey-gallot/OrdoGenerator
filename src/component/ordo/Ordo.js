import React, { useEffect } from "react";
import "./Ordo.css";

const Ordo = React.forwardRef((data, ref) => {
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <div ref={ref}>
      <div className="identity">
        <p>
          {data.data.nom} {data.data.prenom}
        </p>
        <p>Numero ADELI {data.data.adeli}</p>
        <p>Numero RPPS {data.data.rpps}</p>
        <p>{data.data.adresse}</p>
        <p>{data.data.tel}</p>
        <p>{Date()}</p>
        <p>nom:</p>
        <p>prenom:</p>
        <p>Date de naissance:</p>
      </div>
      <div className="soin">
        <p>
          Faire pratiquer par IDE,{" "}
          {data.data.domicile === "oui" ? "a domicile" : "au cabinet"},{" "}
          {data.data.act} pendant{" "}
          {data.data.nbrMonth === undefined
            ? (data.data.nbrMonth, "moi et", data.data.nbrDay, " jour")
            : (data.data.nbrDay, "jour")}{" "}
          a partir du {data.data.date}
        </p>
      </div>
    </div>
  );
});

export default Ordo;
