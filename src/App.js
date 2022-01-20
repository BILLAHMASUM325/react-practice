import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <p>The react killer</p>
       <Person name='James' profession='React killer'></Person>
       <Person name ='Masum' profession ='Software Engineer'></Person>
       <JobPlace job ="Software developer" place ='Dhaka'></JobPlace>
      </header>
    </div>
  );
}
const styleCss = {
  border: '2px solid red',
  width:'300px',
  margin:'10px'
}
function Person(props){
  return(
    <div style={styleCss}>
      <h3>Name:{props.name}</h3>
      <p>Profession: {props.profession}</p>
    </div>
  )
}

function JobPlace(props){
  return(
    <div style={styleCss}>
      <h3>Job:{props.job}</h3>
      <h4>Place:{props.place}</h4>
    </div>
  )
}
export default App;
