import logo from './logo.svg';
import './App.css';


import { useState } from "react";
import axios from "axios";

function App() {
	const [response, setResponse] = useState('');
	const sendRequestToLaravel = () => {
		axios('/merhaba_laravel',{ baseURL: 'http://localhost/backend/public/api'})
		.then(success => {
			setResponse(success.data);
		})
		.catch(error => {
			console.log(error);
		});
	}
	
  return (
    <div className="App">
      <button onClick={sendRequestToLaravel} style={{margin: "25px", padding: "25px", fontSize: "25px"}}>Merhaba Laravel</button>
	  <h1>{response}</h1>
    </div>
  );
}

export default App;
