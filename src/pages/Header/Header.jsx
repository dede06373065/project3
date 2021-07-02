import React, { Component } from 'react'
import '../../css/main.css'

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="Header">
                    <div className="Header--content">
                        <div className="Header--logo"></div>
                        <div className="Header--title">Welcome to Japanese bath house</div>
                        <div className="booking--link">Manage My Booking →</div>
                    </div>
                </div>
            </div>
        )
    }
}


