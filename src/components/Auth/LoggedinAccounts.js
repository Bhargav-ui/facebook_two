import snow from '../../images/birds.jpg'

const LoggedinAccounts = () => {

    return (
        // <div className="conatiner">
        <>


            <div className="container">
                <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="fb_name" className="border-0 " width="200" />
                <h2>Recent logins</h2>
                <p className="text-dark">Click your picture or add an account.</p>

                <div className="container">
                    <div className="row text-center mr-4" width="10px">
                        <div className="col-lg-4 col-md-6 col-6" >
                            <div className="card" >
                                <img className="card-img" width="50px" src={snow} alt="snowImage" />
                                <h4>Bhargav</h4>
                            </div>
                        </div>



                        <div className="col-lg-4 col-md-6 col-6">
                            <div className="card">
                                <img className="card-img" width="50px" src={snow} alt="snowImage" />
                                <h4>Bhargav</h4>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

        </>
    )
}

export default LoggedinAccounts;