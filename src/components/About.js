import React, { useState } from 'react';


export default function About() {
  // 🌗 Style state
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
  });

  // 🌙 Button text state
  const [btnText, setBtnText] = useState("Enable Dark Mode");

  // ✅ Properly define toggleStyle function with const
  const toggleStyle = () => {
    if (myStyle.color === 'white') {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
        border: '1px solid black',
      });
      setBtnText("Enable Dark Mode");
    } else {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
        border: '1px solid white',
        
      });
      setBtnText("Enable Light Mode");
    }
  };

  // ✅ Proper closing braces fixed
  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">About Us</h1>

      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="card" style={myStyle}>
          <div className="card-header" id="headingOne" style={myStyle}>
            <h5 className="mb-0">
              <button
                className="btn btn-link"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Collapsible Group Item #1
              </button>
            </h5>
          </div>

          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body" style={myStyle}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid...
            </div>
          </div>
        </div>

        <div className="card" style={myStyle}>
          <div className="card-header" id="headingTwo" style={myStyle}>
            <h5 className="mb-0">
              <button
                className="btn btn-link collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Collapsible Group Item #2
              </button>
            </h5>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body" style={myStyle}>
              Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor...
            </div>
          </div>
        </div>

        <div className="card" style={myStyle}>
          <div className="card-header" id="headingThree" style={myStyle}>
            <h5 className="mb-0">
              <button
                className="btn btn-link collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Collapsible Group Item #3
              </button>
            </h5>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body" style={myStyle}>
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident...
            </div>
          </div>
        </div>
      </div>

      {/* 🟦 Dark/Light Mode Button */}
      <div className="container my-3 text-center">
        <button onClick={toggleStyle} className="btn btn-primary">
          {btnText}
        </button>
      </div>
    </div>
  );
}
