
import Countries from './components/Countries/Countries';
import './App.css';



function App() {
  return (
    <div className="App">
   <Countries></Countries>
    </div>
  );
}
// function LoadCountries(){
//   const  [countries , setCountries] = useState([]);
//   useEffect(()=>{
//   fetch(`https://restcountries.com/v3.1/all`)
//   .then(res => res.json())
//   .then(data => setCountries(data))

//   }, [])
// return(
//   <div>
//     <h1>Visiting Every country of the world!!!</h1>
//     <h3>Available Countries: {countries.length}</h3>
//     {
//       countries.map(country => <Country name={country.name.common} area={country.area}></Country>)
//     }
//   </div> 
// )
// }
// function Country(props){
//   return (
//     <div className='country'>
//     <section>  
//       <h2>Name: {props.name} </h2>
//       <h2>Area: {props.area} </h2>
//       </section>
//     </div>
//   )
// }

export default App;
