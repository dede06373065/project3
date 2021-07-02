import React, { Component } from 'react'
import Header from './pages/Header'
import Main from './pages/Main'
import Footer from './components/Footer'
import './css/main.css'

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
                <Footer/>
            </div>
        )
    }
}
