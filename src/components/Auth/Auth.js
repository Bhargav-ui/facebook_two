import LoggedinAccounts from "./LoggedinAccounts";
import Login from "./Login";
import {useHistory} from 'react-router';


const Auth = () => {

    const history = useHistory();

    const checkUserLoggedIn = () =>{

        if(localStorage.getItem("user_id") != null){
            // console.log("not logged in");
            history.push("/home");
        }
    }

    return (

        <div className="container full-height fb-mt-5 fb-bg">
            { checkUserLoggedIn() }
            <div className="row">

                <div className="col-sm-6">
                    <LoggedinAccounts />
                </div>

                <div className="col-sm-6">
                    <Login />
                </div>

            </div>
        </div>

    )
}

export default Auth;