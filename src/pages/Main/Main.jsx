import React, { Component } from 'react'
import '../../css/main.css'
import SubComponentsPickers from '../SubComponentsPickers'

export default class Main extends Component {
    render() {
        return (
            <div>
                <div className="Main">
                    <div className="Main--calendar">
                        <div className="Main--calender--title">Day Pass Availability</div>
                        <p>Please click on the date you wish to book.</p>
                        <ul className="condition">
                            <li><span className="con green"></span>Available</li>
                            <li><span className="con orange"></span>Limited</li>
                            <li><span className="con red"></span>Fully Booked</li>
                            <li><span className="con gray"></span>Closed</li>
                        </ul>
                        <SubComponentsPickers />
                    </div>
                </div>
            </div>
        )
    }
}
