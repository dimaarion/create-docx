import React, {useState, useEffect} from "react";
import * as fs from "fs";
import { saveAs } from "file-saver";
import { Document, Packer, Paragraph, TextRun, Header,HeadingLevel } from "docx";
import View from "./components/View";
import {get} from "./action";
import './App.css';

export default function App() {
function exportHTML(e){
       var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
            "xmlns:w='urn:schemas-microsoft-com:office:word' "+
            "xmlns='http://www.w3.org/TR/REC-html40'>"+
            "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
       var footer = "</body></html>";
       var sourceHTML = header+document.getElementById(e).innerHTML+footer;

       var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
       var fileDownload = document.createElement("a");
       document.body.appendChild(fileDownload);
       fileDownload.href = source;
       fileDownload.download = 'document.doc';
       fileDownload.click();
       document.body.removeChild(fileDownload);
    }


  function generate() {
let docx = document.querySelector("#docx");
let text = "";
if(docx){
text = docx.innerHTML
}
const doc = new Document({
    sections: [{
      headers: {
                default: new Header({
                    children: [
                        new Paragraph({
                            text: "Header text",
                            heading: HeadingLevel.HEADING_1,
                            indent: {
                                top:100
                            },
                        }),
                        new Paragraph({
                            text: "Some more header text",
                            indent: {

                            },
                        }),
                    ],
                }),
            },
        properties: {},
        children: [
            new Paragraph({
                children: [
                    new TextRun(text),
                    new TextRun({
                        text: "\tGithub is the best",
                        bold: true,
                    }),
                ],
            }),
        ],
    }],
});

// Used to export the file into a .docx file
 Packer.toBlob(doc).then(blob => {
      console.log(docx);
      saveAs(blob, "example.docx");
      console.log("Document created successfully");
    });

// Done! A file called 'My Document.docx' will be in your file system.

// Used to export the file into a .docx file
}
return (
  <div >
    <button onClick = {()=>exportHTML("docx")}>ok</button>
      <div id = "docx">


        <h1 className = "text-center">Понятия физического воспитания и спорта</h1>
          <div>


Понятие — это мысль или единство мыслей отражающая основную сторону предмета, явления или действия, система мыслей, обобщающая предметы по общим для них специфическим признакам.

В теории физического воспитания существуют следующие понятия:
1. физическое воспитание 2. физическая подготовка 3. физическое развитие 4. физическое совершенство 5. спорт
Физическое воспитание

Физическое воспитание – вид воспитания цель которого заключается в обучении движениям и воспитании физических качеств человека. Главным аспектом физического воспитания как педагогической системы, является всестороннее и гармоничное развитие человека.

Физическим образованием - системное освоение человеком рациональных способов управления своими движениями, приобретение таким путем необходимого в жизни фонда двигательных умений, навыков и связанных с ними знаний.

Воспитание физических качеств характеризуется целенаправленным воздействием на развитие физических качеств человека посредством нормированных физических нагрузок.
Воспитание физических качеств
Физическое образование
1. Формирование спортивных двигательных умений и навыков
2. Формирование жизненно важных двигательных умений и навыков
3. Передача специальных физкультурных знаний

Воспитание физических качеств
1. Сила
2. Быстрота
3. Выносливость
4. Ловкость
5. Гибкость
        </div>
    </div>
</div>)

}


