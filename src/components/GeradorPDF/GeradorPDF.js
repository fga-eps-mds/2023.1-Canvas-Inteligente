import React from "react";
import { jsPDF } from "jspdf";

function GeradorPDF({ projeto, equipe, dnaNegocio, descricao}) {
  function gerarPDF() {
    const doc = new jsPDF();

    //Intuicao
    doc.text(`Projeto: ${projeto}`, 10, 10);
    doc.text(`Equipe: ${equipe}`, 10, 20);

    //tabela DNA do negócio
    doc.text(`Técnico: ${dnaNegocio.tecnico}`, 10, 30);
    doc.text(`Resiliente: ${dnaNegocio.resiliencia}`, 10, 40);
    doc.text(`Emocional: ${dnaNegocio.emocional}`, 10, 50);
    doc.text(`Mercadológico: ${dnaNegocio.mercadologico}`, 10, 60);
    doc.text(`Integrador: ${dnaNegocio.integrador}`, 10, 70);

    //Interação
    doc.text(`descrição: ${descricao}`, 10, 80);


    doc.save("Canvas.pdf");
  }

  return (
    <div>
      <button onClick={gerarPDF}>Gerar PDF</button>
    </div>
  );
}

export default GeradorPDF;