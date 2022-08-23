import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';

const code = new URLSearchParams(window.location.search).get("code")

function App() {
    return (
      <div className="bg-black text-center flex flex-col items-center text-white h-full">
        <Header />

        {code ? <Body code={code}/> : ""}
      </div>
    ); 
}

export default App;
