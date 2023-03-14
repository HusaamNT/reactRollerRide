import React from "react";
import LoginForm from "../components/LoginForm";
import rollerImage from "../images/rollercoaster.jpg";

function Home() {
    const style = {
        backgroundImage: `url(${rollerImage})`,
    };

    return (
        <div style={style} className="hero d-flex align-items-center">
            <div className="container-lg bring-to-front">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="faded-light rounded p-3">
                            <h1>Welcome to Roller Ride!</h1>
                            <p>Book the day of a lifetime!</p>
                            <p>
                                Sign up now to get a great deal on the perfect
                                family day out.
                            </p>
                            <LoginForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
