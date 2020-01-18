import React, { Component } from 'react'

import Header from "./Header"
import UserContext from "./userContext"

/**

function App() {
    return (
        <div>
            <Header />
            <main>
                <UserContext.Consumer>
                    {username => (
                        <p className="main">No new notifications, {username}! 🎉</p>
                    )}
                </UserContext.Consumer>
            </main>
            
            {
                /**
                 * Challenge: Add the ability for the user to choose a new username
                 * 
                 * 1. Add state to this component to hold the new username in a controlled form
                 * (https://reactjs.org/docs/forms.html#controlled-components)
                 * (https://scrimba.com/p/p7P5Hd/cW8Jdfy)
                 * 
                 * 2. Change userContext into a component that has state and provides the ability
                 * to change the user's username. Make sure to export the provider and consumer
                 * as named exports and update their uses anywhere else in the app
                 * 
                 * 3. Give this App component the ability to update the username in context when the
                 * button is clicked
                 *
                
            }
            <input
                type="text"
                name="username"
                placeholder="New username"
                value={???}
                onChange={???}
            />
            <button onClick={???}>Change Username</button>
            
        </div>
    )
}

export default App
 */


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: ""
        }
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>

                <form>
                <input 
                    type="text" 
                    value={this.state.firstName} 
                    name="firstName" 
                    placeholder="First Name" 
                    onChange={this.handleChange} 
                />
                <br />
                <input 
                    type="text" 
                    value={this.state.lastName} 
                    name="lastName" 
                    placeholder="Last Name" 
                    onChange={this.handleChange} 
                />
                <h1>{this.state.firstName} {this.state.lastName}</h1>
            </form>

            </div>
        )
    }
}

