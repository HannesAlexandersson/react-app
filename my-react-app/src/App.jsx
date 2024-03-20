import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'


function App() {
  const fruits = [ 
    {id: 1, name: "banana", calories: 95}, 
    {id: 2, name: "pear", calories: 75}, 
    {id: 3, name: "apple", calories: 98}, 
    {id: 4, name: "orange", calories: 105},  
    {id: 5, name: "peach", calories: 65},
];
const vegetables = [ 
  {id: 6, name: "potato", calories: 195}, 
  {id: 7, name: "carrots", calories: 110}, 
  {id: 8, name: "cewcumbor", calories: 98}, 
  {id: 9, name: "sallad", calories: 155},  
  {id: 10, name: "rotten", calories: 165},
];
  
  return(
    <>
      <Header />
      <UserGreeting isLoggedIn={true} userName="Hannes" />
      { fruits.length > 0 && <List items={fruits} category="Fruits" /> }
      { vegetables.length > 0 ? <List items={vegetables} category="vegetables" /> : null }
      <Card />
      <Button />
      <Student name="Hannes" age={39} city="Gothenburg" isStudent={true}/>
      <Student age={35} city="Floda" isStudent={true} />
      <Footer />
    </>
  );
}

export default App
