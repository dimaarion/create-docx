import React, {useState, useEffect} from "react";
import * as fs from "fs";
import { saveAs } from "file-saver";
import { Document, Packer, Paragraph, TextRun } from "docx";
import View from "./components/View";
import {get} from "./action";
import './App.css';
export default function App() {
  function generate() {


const doc = new Document({
    sections: [{
        properties: {},
        children: [
            new Paragraph({
                children: [
                    new TextRun("Hello World"),
                    new TextRun({
                        text: "Foo Bar",
                        bold: true,
                    }),
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
      console.log(blob);
      saveAs(blob, "example.docx");
      console.log("Document created successfully");
    });

// Done! A file called 'My Document.docx' will be in your file system.

// Used to export the file into a .docx file
}
return (
  <div>
  <button onClick = {()=>generate()}>ok</button>
</div>)

}


