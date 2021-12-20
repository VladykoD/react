import React from 'react';


class ClassCounter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    increment() {
        this.setState({count: this.state.count++})
    }
    decrement() {
        this.setState({count: this.state.count--})
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <br/>
                <button onClick={this.increment}>+++++++</button>
                <button onClick={this.decrement}>----------</button>
            </div>
        )
    }
}

export default ClassCounter;


// вызов в App: <ClassCounter></ClassCounter>
