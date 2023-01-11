import { useState } from "react";
import Card from "../UI/Card/Card";

const Login = (props) => {

    const[isConnecting, setIsConnecting] = useState(false);
    let [account, setAccount] = useState("");

    const { ethereum } = window;
    const connectMetamask = async () => {
        if(window.ethereum !== "undefined") {
            const accounts = await ethereum.request({ method: "eth_requestAccounts"});
            setAccount(accounts[0]);
            setIsConnecting(true);
        }
    }
    
    return (
        <Card className="login">
            <div className="connect">
            {!isConnecting &&
                <div>
                    <h2>Connect to your MetaMask</h2>
                    <button onClick={connectMetamask} className="button" type="button">Connect 🦊</button>
                </div>
            }
            {isConnecting &&
                <p>Your adress : <code>{account}</code></p>
            }
            </div>
        </Card>
    );
};

export default Login;