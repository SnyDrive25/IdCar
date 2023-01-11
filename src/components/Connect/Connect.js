import Login from "../Login/Login";
import Partner from "../Partner/Partner";
import Client from "../Client/Client";
import Garage from "../Garage/Garage";

function Connect() {

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div>
            <div className="big-div">
                <Login />
            </div>
            <div className="div space"></div>
            <div className="div space"></div>
            <div id="flex" className="notel">
                <h2 id="partner">Partner Space</h2>
                <h2 id="client">Customer Space</h2>
                <h2 id="garage">Mechanic Space</h2>
            </div>
            <div className="cartes">
                <div className="carte" id="c-left">
                    <Partner />
                </div>
                <div className="carte" id="c-center">
                    <Client />
                </div>
                <div className="carte" id="c-right">
                    <Garage />
                </div>
            </div>
            <div className="div space">
                <button className="button large" onClick={refreshPage}>Change space</button>
            </div>
        </div>
    );
};

export default Connect;