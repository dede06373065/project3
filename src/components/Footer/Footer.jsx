import React, { Component } from 'react'
import '../../css/main.css'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="Footer">
          <div className="Footer--title">Opening Hours</div>
          <div className="Footer--content">
            <span className="date">Friday 2pm-9pm </span>
            <span className="date">Saturday Midday-9pm</span>
            <span className="date"> Sunday Midday-9pm </span>
            <span className="date">Monday 11am-6pm**</span>
            <p>*On long weekends the bath house will open from 12 noon – 9 pm on Sunday. (Last entry: Day visit guests
              7pm for in-house 8.15pm)</p>
            <p>** Available on selected long weekends only. (Last entry 4pm) </p>
          </div>
        </div>
      </div>
    )
  }
}
