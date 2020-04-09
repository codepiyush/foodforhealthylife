import React from 'react';

class DetailBox extends React.Component {

    constructor() {
        super()
    }

    normal() {
        return (
            <div className="normal-detail">
                <div className="detail-head">
                    Nutrition Fact
                </div>
                <div className="detail-body">
                    {this.props.detail.type=="iceTea"?<p>*Per 100ml of Product (approx.)</p>: <p>*Per 100gm of Product (approx.)</p>}
                    <div className="calorie">
                        Calories {this.props.detail.calories} Kcal
                    </div>
                    <div className="nutrition">
                        <div className="nutri-name">
                            {this.props.detail.name.map(name => {
                                return (
                                    <p>{name}</p>
                                )
                            })}

                        </div>
                        <div className="nutri-value">
                            {this.props.detail.value.map(value => {
                                return (
                                    <p>{value}</p>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    renderDetail() {
        if (this.props.detail.type && this.props.detail.type == "normal" || this.props.detail.type == "upcomming" || this.props.detail.type == "iceTea") {
            return (
                this.normal()
            )
        }
        else if (this.props.detail.type && this.props.detail.type == "premium") {
            return (
                <div className="prm-detail">
                    <p>"{this.props.detail.line}"</p>
                </div>
            )
        }
        else if (this.props.detail.type && this.props.detail.type == "healthy" || this.props.detail.type == "energyDrink") {
            return (
                <div className="healthy-detail">
                    <div className="detail-head">
                        Nutrition Facts
                    </div>
                    <div className="detail-body">
                        <div className="nutri-facts">
                            {this.props.detail.nutriFacts.map(fact => {
                                return (
                                    <p>- {fact}</p>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )
        }
    }
    componentDidMount() {
        console.log(this.props.detail.calories)
    }


    render() {
        return (
            <React.Fragment>
                {this.renderDetail()}
            </React.Fragment>
        )
    }
}

export default DetailBox;