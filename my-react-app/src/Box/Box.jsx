import * as React from 'react';
import './box-styles.css';

/*THIS IS APP:JSX !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */

//  add a className prop to each div and apply the correct class names
// based on the text content
//  Here are the available class names: box, box--large, box--medium, box--small
//  each of the elements should have the "box" className applied

//  add a style prop to each div so their background color
// matches what the text says it should be
//  also use the style prop to make the font italic
//  Here are available style attributes: backgroundColor, fontStyle
const smallBoxStyle = {
    width: "90px",
    height: "90px",
    background_color: "lightblue",
}

const smallBox = <div className={smallBoxStyle}>small lightblue box</div>;
const mediumBox = <div className="box box--medium" style={{ backgroundColor: "blue", fontStyle: "italic" }}>Medium Box</div>
const largeBox = <div>large orange box</div>;

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  );
}

export default App;