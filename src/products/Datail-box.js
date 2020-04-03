import React from 'react';

class DetailBox extends React.Component {
    render() {
        return (
            <div className="detail-container">
                <div className="detail-head">
                    Nutrition Fact
                </div>
                <div className="detail-body">
                    <p>*Per 100gm of Product (approx.)</p>
                    <div className="calorie">
                        Calories 540 Kcal
                    </div>
                    <div className="nutrition">
                        <div className="nutri-name">
                            <p>Total Fat</p>
                            <p>Total Carbohydrate</p>
                            <p>Sugar</p>
                            <p>Protein</p>
                        </div>
                        <div className="nutri-value">
                            <p>30gm</p>
                            <p>58gm</p>
                            <p>12gm</p>
                            <p>8gm</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailBox;