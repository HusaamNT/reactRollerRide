import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import rollerImage from "../images/rollercoaster.jpg";
import AuthService from "../utils/AuthService";

function Home() {
    const style = {
        backgroundImage: `url(${rollerImage})`,
    };

    console.log(AuthService.getProfile());

    return (
        <div style={style} className="hero d-flex align-items-center">
            <div className="container-lg bring-to-front">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="faded-light rounded p-3 my-2">
                            {   AuthService.loggedIn() ?
                                <h3>Welcome {`${AuthService.getProfile().data.username}!`}</h3> :
                                <h3>Welcome to Roller Ride!</h3>
                            }
                            <p>Book the day of a lifetime!</p>
                            <p>
                                Sign up now to get a great deal on the perfect
                                family day out.
                            </p>
                           { AuthService.loggedIn() ? <Link to={'/tickets'}>Buy Tickets</Link> : <LoginForm/> }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
