import React from "react";

class About extends React.Component {
    render() {
        return (
            <div className="about" id="about">
                <div className="about-top">About Us</div>
                <div className="about-main">
                    <img
                        src={require("./images/Team.jpg")}
                        alt="Bakkii Cookii"
                    />
                    <p>
                        <first>T</first>he story that we are about to unfold is
                        a unique brand success that we have accomplished within
                        the shortest time under the hardest circumstances. The
                        Kingdom Food, you know what the consequences of
                        outstanding creativity and business acumen, it is not a
                        brand that has formed within a night span. It took years
                        of effort and appetite, to come up with varieties of
                        products to feed food lovers and to reach every kitchen
                        across India.
                    </p>

                    <p>
                        At present, our product is preferred by all most all the
                        modern Trades
                        <span className="weight-500">
                            {" "}
                            WalMart,Metro Cash & Carry, D-Mart, SparMaxhyper,
                            Deerika, Gramfactory, All-in stores, Amartex Stores
                        </span>{" "}
                        etc.{" "}
                    </p>

                    <h2>Our Vision</h2>
                    <p>
                        <i>
                            "To be and sustain to be the first choice of every
                            kitchen by serving convenient, healthy affordable &
                            tasty bakery requirements Globally".
                        </i>
                    </p>
                    <h2>Our Mission</h2>
                    <p>
                        <i>
                            "To Build, Elevated Grow the value chain Farm to
                            Fork, to contribute to Promoting overall health,
                            eradicate hunger & malnutrition globally, & Inspire
                            future business leaders"
                        </i>
                    </p>
                    <h2>Culture Statement</h2>
                    <h3>
                        <i>
                            "WE CARE FOR EACH OTHER SO <br />
                            WE SHARE WITH EACH OTHER".
                        </i>
                    </h3>
                    <p>
                        Warm Regards, <br />
                        <b>BakkiiCookii</b>
                        <br />
                    </p>
                </div>
            </div>
        );
    }
}

export default About;
