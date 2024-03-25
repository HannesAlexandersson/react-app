import Box from './components/Box.jsx';
import './box-styles.css';
/*
//Uppgift 1
//  add a className prop to each div and apply the correct class names
// based on the text content
//  Here are the available class names: box, box--large, box--medium, box--small
//  each of the elements should have the "box" className applied

//  add a style prop to each div so their background color
// matches what the text says it should be
//  also use the style prop to make the font italic
//  Here are available style attributes: backgroundColor, fontStyle

const smallBox = <div className='box box--small' style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}>small lightblue box</div>;
const mediumBox = <div className='box box--medium' style={{backgroundColor: 'pink', fontStyle: 'italic'}}>medium pink box</div>;
const largeBox = <div className='box box--large' style={{backgroundColor: 'orange', fontStyle: 'italic'}}>large orange box</div>;

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  );
}
*/
//Uppgift 2
/*
function App(){

  return(
    <Box className="box--small" style={{ backgroundColor: 'lightblue'}}>
      small lightblue box
    </Box>
  );
}
*/

//Uppgift 3
/*
It's great that we're composing the classNames and styles properly, but wouldn't it be better if the users of 
our components didn't have to worry about which class name to apply for a given effect? Or that a class name 
is involved at all? I think it would be better if users of our component had a size prop and our component 
took care of making the box that size.

In this extra credit, try to make this API work:

<Box size="small" style={{ backgroundColor: 'lightblue' }}>
    small lightblue box
</Box>
*/
function App(){

  return(
    <Box size="small" style={{ backgroundColor: 'lightblue' }}>
        small lightblue box
    </Box>
  );
}
export default App;
