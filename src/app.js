import React from "react";
import Sidebar from "./sidebar";

class App extends React.Component {
    render() {
        return (
            <div>
                <Sidebar />
                <div className="main">
                    <div className="msec">
                        <div className="grid2">
                            <div className="mainimg back1">
                                <div className="overimg">
                                    <h1>Browse   Products</h1>
                                </div>
                            </div>
                            <div className="mainimg back2">
                                <div className="overimg">
                                    <h1>Bakery</h1>
                                </div>
                            </div>
                        </div>
                        <div className="grid2">
                            <div className="secimg back3">
                                <div className="overimg">
                                    <h1>Energy Drinks</h1>
                                </div>
                            </div>
                            <div className="secimg back4">
                                <div className="overimg">
                                    <h1>Ice Tea</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default App;