import react from "react";

class Clock extends react.Component {
    constructor(props){
        super(props);
        console.log("props of Clock component", props);

        this.state = {
            time: new Date()
        }
    }
    componentDidMount(){
        console.log("Clock component mounted");
        this.clockInterval = setInterval(() => {
            console.log("interval is running");
            this.tick();
        }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.clockInterval);
    }
    tick(){
        this.setState({
            time: new Date()
        })
    }
    render(){
        console.log("Clock component is rendering, state:", this.state);
        return (
            <div>
                <h1>This is Clock component</h1>
                <p>Time is: {this.state.time.toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default Clock;