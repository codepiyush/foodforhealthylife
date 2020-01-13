import React from 'react'

class Display extends React.Component {
    render() {
        return(
            <div className='disp-container'>
                <div style={{padding: '10px',textAlign: 'center'}}>
                    <img src={this.props.desc.imageUrl} alt="pic" widht='120px' height = '250px'/>
                </div>
                <div className='disp-desc'>
                    <p>{this.props.desc.name}</p>
                    <p className="disp-desc-sub">-Hand Crafted</p>
                    <p className="disp-desc-sub">-Eggless</p>
                    <p className="disp-desc-sub">-Suger Free</p>
                </div>
            </div>
        )
    }
}

export default Display