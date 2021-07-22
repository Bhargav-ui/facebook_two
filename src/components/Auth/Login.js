import { Link, useHistory } from "react-router-dom";
import { useState } from 'react';
import { LoginApi } from '../../apis/Login';
import { SigninApi } from "../../apis/Signin";
const Login = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [apiErrorMsg, setapiErrorMsg] = useState("");

    const [showSignupDialog, setShowSignupDialog] = useState(false);



    const history = useHistory();

    /*signup api in */


    /*signup api out */
    /* Signup variables begin*/
    const [crName, setCrName] = useState("");
    const [crEmail, setCrEmail] = useState("");
    const [crCountryCode, setCrCountryCode] = useState("");
    const [crMobile, setCrMobile] = useState("");
    const [crPword, setCrPword] = useState("");
    const [crConfirmPword, setCrConfirmPword] = useState("");
    const [crGender, setCrGender] = useState("");

    const [crNameErMsg, setCrNameErMsg] = useState("");
    const [crEmailErMsg, setCrEmailErMsg] = useState("");
    const [crCountryCodeErMsg, setCrCountryCodeErMsg] = useState("");
    const [crMobileErMsg, setCrMobileErMsg] = useState("");
    const [crPwordErMsg, setCrPwordErMsg] = useState("");
    const [crConfirmPwordErMsg, setCrConfirmPwordErMsg] = useState("");
    const [crGenderErMsg, setCrGenderErMsg] = useState("");

    const [signupApiErMsg, setSignupApiErMsg] = useState("");

    /* Signup variables end */
    let loginClicked = () => {

        let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;


        if (regex.test(email) == false) {
            setEmailError("enter valid email");
        }
        else {
            setEmailError("");
        }

        if (password.length < 6) {
            setPasswordError("enter valid password");
        }
        else {
            setPasswordError("");
        }


        if (regex.test(email) == true && password.length >= 6) {
            LoginApi(email, password).then(
                (response) => {
                    let data = response.data;
                    if (data.result == "failed") {
                        setapiErrorMsg(data.msg);
                    }
                    else {
                        setapiErrorMsg("");
                        localStorage.setItem("user_id", data.data.user_id);
                        localStorage.setItem(
                            "profile_pic",
                            data.data.profile_pic
                        );
                        localStorage.setItem("user_name", data.data.user_name);
                        history.push("/home");
                        // console.log(data.data.user_id);
                    }
                    // console.log("api response",response)
                }
            );
        }
    };


    const createAccountBtn = () => {
        setShowSignupDialog(true);
    };

    const hideSignupDIalog = () => {
        setShowSignupDialog(false);
    };

    const createAccountSubmitted = () => {

        let noOfErros = 0;

        console.log(crName, crEmail, crCountryCode, crMobile, crPword, crConfirmPword, crGender);

        if (crName.length < 2) {
            setCrNameErMsg("required");
            noOfErros = 1;
        }
        else {
            setCrNameErMsg("");

        }
        let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!regex.test(crEmail)) {
            setCrEmailErMsg("please enter an email");
            noOfErros = 1;
        }
        else {
            setCrEmailErMsg("");
        }
        if (crCountryCode.value == "") {
            setCrCountryCodeErMsg("required");
            noOfErros = 1;
        }
        else {
            setCrCountryCodeErMsg("");
        }

        if (crMobile.length < 10) {
            noOfErros = 1;
            setCrMobileErMsg("enter valid mobile number");
        }
        else {
            setCrMobileErMsg("");
        }

        if (crPword.length == 0) {
            setCrPwordErMsg("required");
            noOfErros = 1;
        }
        else if (crConfirmPword != crPword) {
            setCrConfirmPwordErMsg("password does't matching");
            noOfErros = 1;
        }
        else {
            setCrConfirmPwordErMsg("");
            setCrPwordErMsg("");
        }

        if (noOfErros == 0) {
            // console.log("call api");
            SigninApi(crName, crEmail, crCountryCode, crMobile, crPword, "api").then
                (response => {

                    let data = response.data;
                    if (data.result == "failed") {
                        setSignupApiErMsg(data.msg);
                    }
                    else {
                        setSignupApiErMsg("");
                        localStorage.setItem("user_id", data.data.user_id);
                        localStorage.setItem("profile_pic", data.data.profile_pic);
                        localStorage.setItem("user_name", data.data.user_name);

                        history.push("/home");
                    }
                    // console.log(response.data);
                    // console.log(response.data.msg);
                });
        }
    };


    return (
        <>
            <div className="card p-3  fb-shadow m-5">
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control mt-2" placeholder="Email address or phone number " />
                <span className="text-danger">{emailError}</span>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control mt-2 " placeholder="Password" />
                <span className="text-danger">{passwordError}</span>
                <button type="button" onClick={loginClicked} className="btn btn-primary btn-block mt-3 mb-2 font-weight-bold">Login</button>
                <p className="text-danger">{apiErrorMsg}</p>
                <Link to="forget-password" className="text-primary m-3 text-center">Forget Password</Link>
                <hr />
                <button type="button" onClick={createAccountBtn} className="btn btn-success p-2 ml-5 mr-5  font-weight-bold border-0">Create Account</button>
            </div>
            <div className="text-center"><b>Create a Page </b>for a celebrity, band or business.</div>
            {/* <p>password:{password}</p> */}



            {showSignupDialog && <div className="modal fade show fb-modal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Sign Up</h5>

                            {/* <p className="modal-title">It's quick and easy.</p> */}
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={hideSignupDIalog}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-lg-12 mt-3">
                                    <input type="text" className="form-control" placeholder="Name" value={crName} onChange={e => setCrName(e.target.value)} />
                                    <small className="text-danger">{crNameErMsg}</small>
                                </div>
                                <div className="col-lg-12 mt-3">
                                    <input type="text" className="form-control" placeholder="Email" value={crEmail} onChange={e => setCrEmail(e.target.value)} />
                                    <small className="text-danger">{crEmailErMsg}</small>
                                    <p className="text-danger">{signupApiErMsg}</p>
                                </div>
                                <div className="col-lg-3 mt-3">
                                    <select className="custom-select" value={crCountryCode} onChange={e => setCrCountryCode(e.target.value)}>
                                        <option value="91">91</option>
                                        <option value="1">1</option>
                                    </select>
                                    <small className="text-danger">{crCountryCodeErMsg}</small>
                                </div>
                                <div className="col-lg-9 mt-3">
                                    <input type="text" className="form-control" placeholder="Mobile" value={crMobile} onChange={e => setCrMobile(e.target.value)} />
                                    <small className="text-danger">{crMobileErMsg}</small>
                                </div>

                                <div className="col-lg-6 mt-3">
                                    <input type="password" className="form-control" placeholder="password" value={crPword} onChange={e => setCrPword(e.target.value)} />
                                    <small className="text-danger">{crPwordErMsg}</small>
                                </div>
                                <div className="col-lg-6 mt-3">
                                    <input type="password" className="form-control" placeholder="Confirm password" value={crConfirmPword} onChange={e => setCrConfirmPword(e.target.value)} />
                                    <small className="text-danger">{crConfirmPwordErMsg}</small>
                                </div>
                                <div className="col-lg-3 m-3 form-control">
                                    <input type="radio" name="gender" value="female" onChange={e => setCrGender(e.target.value)} />&nbsp;&nbsp;female
                                </div>
                                <div className="col-lg-3 m-3 form-control">
                                    <input type="radio" name="gender" value="male" onChange={e => setCrGender(e.target.value)} />&nbsp;&nbsp;male
                                </div>
                                <div className="col-lg-3 m-3 form-control">
                                    <input type="radio" name="gender" value="custom" onChange={e => setCrGender(e.target.value)} />&nbsp;&nbsp;custom
                                </div>
                                <div className="col-lg-12 mt-4 text-center">
                                    <button className="btn  btn-success" onClick={createAccountSubmitted} >Create Account</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            }
        </>
    );
};

export default Login;