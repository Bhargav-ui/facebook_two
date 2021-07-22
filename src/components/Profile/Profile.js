import { faEnvelope, faMobile, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Nav from '../Home/Nav';
import { isEmailValid } from '../../Utils/generalFunctions';
import { forgotPasswordApi } from '../../apis/Login';
import { useHistory } from 'react-router';
const Profile = () => {


    const history = useHistory();
    //values
    const [oldPword, setOldPword] = useState("")
    const [newPword, setNewPword] = useState("")
    const [confPword, setConfPword] = useState("")

    // forgot password values
    const [viewForgotPword, setViewForgotPword] = useState(false);
    const [email, setEmail] = useState("");
    const [emailErrorMsg, setEmailErrorMsg] = useState("");
    const [apiMsg, setApiErrorMsg] = useState("");
    const [apiErrorMsgClass, setApiErrorMsgClass] = useState("");

    //error messages
    const [oldPwordMsg, setOldPwordMsg] = useState("")
    const [newPwordMsg, setNewPwordMsg] = useState("")
    const [confPwordMsg, setConfPwordMsg] = useState("")

    //function
    const changePassword = () => {

        let numberOfErrors = 0;

        if (oldPword.length < 8) {
            setOldPwordMsg("Min 8 characters");
            numberOfErrors = 1;
        }
        else {
            setOldPwordMsg("")
        }

        if (newPword.length < 8) {
            setNewPwordMsg("Min 8 characters");
            numberOfErrors = 1;

        }
        else {
            if (newPword != confPword) {
                setConfPwordMsg("not matching with new password");
                numberOfErrors = 1;

            }
            else {
                setConfPwordMsg("");
            }
            setNewPwordMsg("");

        }
        if (oldPword == newPword) {
            setNewPwordMsg("it should not match with old password");
            numberOfErrors = 1;
        }
        else {
            setNewPwordMsg("");
        }

        if (numberOfErrors == 0) {
            // console.log("call api,no errors");

        }


    }

    const enableForgotPasswordView = () => {
        setViewForgotPword(true);
    }

    const resetPassword = () => {
        if (isEmailValid(email) == false) {
            setEmailErrorMsg("enter a valid email")
        }
        else {
            setEmailErrorMsg("");
            // console.log("call api", email);
            forgotPasswordApi("react app", email).then((response) => {
                console.log(response);
                if (response.data.result == "success") {
                    setApiErrorMsgClass("alert alert-success");

                    setApiErrorMsg(response.data.msg);
                }
                else {
                    setApiErrorMsgClass("alert alert-danger");
                    setApiErrorMsg(response.data.msg);
                }
            }
            )
        }
    }


    const logout =() =>{
        localStorage.clear();
        history.push("/");
    };
    return (
        <div className="container fixed-top-padding">
            <Nav />
            <div className="row">
                <div className="col-lg-4">
                    <div className="card fb-shadow border-0">
                        <div className="card-body">
                            <div className="media">
                                <img
                                    className="link-icon link-radius"
                                    alt=""
                                    src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/profile-pic-male_4811a1.svg"
                                />
                                <div className="media-body pl-2">
                                    <h2>Hello {localStorage.getItem("user_name")}</h2>
                                <div className="text-primary" onClick={logout}>Logout</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 pb-4 mb-4">

                    <div className="card fb-shadow border-0">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h4>Your profile data</h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 p-2">
                                    <FontAwesomeIcon icon={faUser} /> Bhargava
                                </div>
                                <div className="col-lg-12 p-2">
                                    <FontAwesomeIcon icon={faEnvelope} /> bhargava@gmail.com
                                </div>
                                <div className="col-lg-12 p-2">
                                    <FontAwesomeIcon icon={faMobile} /> 8916943646
                                </div>


                            </div>
                        </div>
                    </div>
                    {/* profile data end*/}
                    {/* change password */}
                    <div className="card fb-shadow border-0 mt-3">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <label><small>Old Password</small></label>
                                    <input type="password" className="form-control m-1" vlaue={oldPword} onChange={e => setOldPword(e.target.value)} placeholder="old password" />
                                    <span className="text-danger">{oldPwordMsg}</span>
                                </div>
                                <div className="col-lg-12">
                                    <label><small>New Password</small></label>
                                    <input type="password" className="form-control m-1" vlaue={newPword} onChange={e => setNewPword(e.target.value)} placeholder="new password" />
                                    <span className="text-danger">{newPwordMsg}</span>
                                </div>
                                <div className="col-lg-12">
                                    <label><small>Confarm Password</small></label>
                                    <input type="password" className="form-control m-1" vlaue={confPword} onChange={e => setConfPword(e.target.value)} placeholder="re-enter new password" />
                                    <span className="text-danger">{confPwordMsg}</span>
                                </div>

                                <div className="col-lg-12 m-1">
                                    <button type="button" className="btn btn-primary" onClick={changePassword}>change password</button>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* change password end */}

                    {/* forget password */}

                    <div className="card fb-shadow border-0 mt-3">
                        <div className="card-body">
                            <button className="btn btn-danger" onClick={enableForgotPasswordView}>Forgot Password</button>
                            {viewForgotPword && (<div className="row">
                                <div className="col-lg-12">
                                    <label>EMAIL</label>
                                    <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" />
                                    <span className="text-danger">{emailErrorMsg}</span>
                                </div>
                                <div className="col-lg-12 mt-4">
                                    <button type="button" className="btn btn-success" onClick={resetPassword}>Reset Password</button>
                                </div>
                                <div className="col-lg-12">
                                    <div className={apiErrorMsgClass}>
                                        {apiMsg}
                                    </div>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                    {/* forget password end */}
                </div>
            </div>

        </div>
    )
}

export default Profile;