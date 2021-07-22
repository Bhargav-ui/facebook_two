import Nav from './Nav';
import { useHistory } from 'react-router';
import Links from './Links';
import Wall from './Wall';
import Contents from './Contents';
const Home = () => {

    const history = useHistory();

    const checkIsUserLoggedIn = () => {
        if (localStorage.getItem("user_id") == null) {
            history.push('/')
        }
    }

    return (
        <>
            {checkIsUserLoggedIn()}
            <Nav />
            {/* <h3 className="text-center">I am loggedin</h3> */}
            <div className="container-fluid fixed-top-padding">
                <div className="row">
                    <div className="col-lg-3">
                        <Links/>
                </div>
                    <div className="col-lg-6">
                        <Wall/>
                    </div>
                    <div className="col-lg-3">
                        <Contents/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;