import Connect from "./components/Connect/Connect";
import logo from './images/logo.png';

function App() {
  return (
    <div className="App" onLoad={window.scrollTo(0, 0)}>
      <div className="nav"></div>
      <div className="title_block">
        <img src={logo} alt="idcar-logo" className="logo" />
      </div>
      <Connect></Connect>
      <div className="footer">
        <p>
          Created with <span className="heart" id="heart">♥</span> for the Online Web3 Starton Hackathon
          <br></br><br></br>
          Copyright ©IdCar - November 2022 | Contact : <a className="link" href="mailto:idcar@esilv.fr">idcar@esilv.fr</a>
        </p>
      </div>
    </div>
  );
}

export default App;