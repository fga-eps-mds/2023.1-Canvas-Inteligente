import "./Maturidade5.css";
import Situacao1 from "../../../images/situacao1.png";
import Situacao2 from "../../../images/situacao2.png";
import Situacao3 from "../../../images/situacao3.png";
import Situacao4 from "../../../images/situacao4.png";
import Situacao5 from "../../../images/situacao5.png";
import Descricao1 from "./Maturidade5Descricoes/descricao1.json";
import Descricao2 from "./Maturidade5Descricoes/descricao2.json";
import Descricao3 from "./Maturidade5Descricoes/descricao3.json";
import Descricao4 from "./Maturidade5Descricoes/descricao4.json";
import Descricao5 from "./Maturidade5Descricoes/descricao5.json";
import BarChart from "./Maturidade5Chart/BarChart";
import React, {useState} from "react";
import { Filler } from "chart.js";

function Maturidade5({porcentagemAdm, porcentagemRh, porcentagemFin, porcentagemMkt}) {

  var porcent1 = +porcentagemAdm;
  var porcent2 = +porcentagemRh;
  var porcent3 = +porcentagemFin;
  var porcent4 = +porcentagemMkt;

  const UserData = [
    {
      id: 1,
      area: "Área Administrativa",
      porcentagem: porcent1,
    },
    {
      id: 2,
      area: "Área de Recursos Humanos",
      porcentagem: porcent2,
    },
    {
      id: 3,
      area: "Área Financeira",
      porcentagem: porcent3,
    },
    {
      id: 4,
      area: "Área de Marketing",
      porcentagem: porcent4,
    }
  ]

  // eslint-disable-next-line
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.area),
    datasets: [{
      label: "Grau de Maturidade",
      data: UserData.map((data) => data.porcentagem),
      backgroundColor: ["#FF5631"],
      borderRadius: 10,
    }]
  });

  function fecharFormMaturidade5(e) {
    e.preventDefault();
    let modalOverlay = document.querySelector(".modal-overlay");
    if (modalOverlay) {
      modalOverlay.parentNode.removeChild(modalOverlay);
    }

    let modal = document.querySelector(".telaResult");
    modal.style.display = "none";

    let modal2 = document.querySelector(".confirma");
    modal2.style.display = "block";
  }

  function irParaFormMaturidade4(e) {
    e.preventDefault();

    let modal = document.querySelector(".areaMkt");
    modal.style.display = "block";

    let modal2 = document.querySelector(".telaResult");
    modal2.style.display = "none";
  }
  
  function nivelMaturidade(){

    var adm = porcent1;
    var rh = porcent2;
    var fin = porcent3;
    var mkt = porcent4;

    var soma = adm+rh+fin+mkt;
    var media = soma/4;
    var nivel = null;

    if (media <= 20) {
      nivel = 1;
    } else if (media > 20 && media <= 40) {
      nivel = 2;
    } else if (media > 40 && media <= 60) {
      nivel = 3;
    } else if (media > 60 && media <= 80) {
      nivel = 4;
    } else if (media > 80 && media <= 100) {
      nivel = 5;
    }

    return nivel;
  }

  var nivel = nivelMaturidade();
  var imgSituacao = null;
  var textSituacao = null;
  
  if (nivel === 1) {
    imgSituacao = Situacao1;
    textSituacao = Descricao1;
  } else if (nivel === 2) {
    imgSituacao = Situacao2;
    textSituacao = Descricao2;
  } else if (nivel === 3) {
    imgSituacao = Situacao3;
    textSituacao = Descricao3;
  } else if (nivel === 4) {
    imgSituacao = Situacao4;
    textSituacao = Descricao4;
  } else if (nivel === 5) {
    imgSituacao = Situacao5;
    textSituacao = Descricao5;
  }

  return (
    <div className="telaResult">
      <div className="formResult">
        <button
          className="close_area4"
          onClick={(e) => fecharFormMaturidade5(e)}
        ></button>
        <div className="dot2_area4"></div>
        <div className="dot3_area4"></div>
        <h2 className="titulo">Maturidade Nível</h2>
        <div onClick={() => {window.open("tutorial#tut_CalcMaturidade", "_blank")
        }}className="duvidaResult"></div>
        <h2 className="tituloNivel">{nivel}</h2>
        <img className="situacao" alt="situacao" src={imgSituacao} />
        <div className="descMaturidade">{textSituacao}</div>
        <table className="tabelaResult">
          <div style={{width: Filler}}>
            <BarChart chartData={userData}/>
          </div>

        </table>
        <div
          onClick={(e) => irParaFormMaturidade4(e)}
          className="setaEsquerda"
        ></div>
        <div
          onClick={(e) => fecharFormMaturidade5(e)}
          className="feitoMaturidade"
        ></div>
      </div>
    </div>
  );
}

export default Maturidade5;
