import React from "react";

export default function Alert(props) {
  document.title = "TextUtils - About US";

  const orangeTextStyle = {
    color: props.mode === "light" ? "black" : "#e29d9d",
    backgroundColor: props.mode === "light" ? "white" : "#181717",
    border: `1px solid${props.mode === "light" ? "black" : "white"}`,
  };

  const whiteTextStyle = {
    color: props.mode === "light" ? "black" : "white",
  };

  const backgrondStyle = {
    backgroundColor: props.mode === "light" ? "white" : "#181717",
    color: props.mode === "light" ? "black" : "white",
    border: `1px solid${props.mode === "light" ? "black" : "white"}`,
  };

  return (
    <div className="container my-2">
      <h3 className="my-3" style={whiteTextStyle}>
        About US
      </h3>
      <div className="accordion" id="accordionExample" style={backgrondStyle}>
        <div className="accordion-item" style={backgrondStyle}>
          <h2
            className="accordion-header"
            id="headingOne"
            style={whiteTextStyle}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={orangeTextStyle}>
              <strong>{props.accomFirst}</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
            style={backgrondStyle}>
            <div className="accordion-body" style={backgrondStyle}>
              Have you ever typed out a document, made a few capitalization
              mistakes and wished you won't have to waste much time editing? It
              happens a lot, and if you are using a typical word processing
              tool, you will have your mistakes autocorrected as you type, but
              those kinds of software only correct grammatical errors. If you
              have to capitalize on a whole portion, you will need to do it
              manually. And that takes time. However, with an online text
              transforming tool like ours, you can easily transform the case of
              your texts. All you have to do is copy and paste your text, then
              select the case you want to transform it to. The Change Uppercase
              to Lowercase Tool is one of several SEO tools available on our
              site SmallSEOTools.com. It is an online text Converter that can
              receive both upper cases and lower case letters as input and do a
              text transform on them into desired cases. There are several sub
              tools inside the Change Title Case Converter Tool; we will review
              them below.
            </div>
          </div>
        </div>
        {/* <div className="accordion-item" style={backgrondStyle}>
          <h2
            className="accordion-header"
            id="headingTwo"
            style={whiteTextStyle}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={orangeTextStyle}>
              {props.accomTwo}
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
            style={backgrondStyle}>
            <div className="accordion-body" style={backgrondStyle}>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={backgrondStyle}>
          <h2
            className="accordion-header"
            id="headingThree"
            style={whiteTextStyle}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={orangeTextStyle}>
              {props.accomThree}
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
            style={backgrondStyle}>
            <div className="accordion-body" style={backgrondStyle}>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
