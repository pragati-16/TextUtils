
import React from 'react';
import './About.css'; 

function About() {
    return (
        <>
<div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>
      About TextUtils 
          </strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">

Formatting text refers to controlling how text appears in your document.Formatted text can draw the reader's attention to specific parts of a document and emphasize important information. <strong>TextUtils make it more easy to uderstand your text.</strong> It helps you to format your text in your desired way and also let you know about the time taken to read that particular text.
      </div>
    </div>
  </div>
  </div>
  </>
    );
}
export default About;