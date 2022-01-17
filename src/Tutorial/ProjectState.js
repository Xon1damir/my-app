import react from "react";


class Phone extends react.Component {
  constructor(props) {
      super(props);
      this.state = {
        on: false
    }
  } ;
  On(){
    this.setState({
      on:true
    });
  };
  Off(){
    this.setState({
      on:false
    })
  }
  tick() {
    this.setState({
      on: !this.state.on
    });
  };
  
 
  componentDidMount(){
    this.phoneInterval = setInterval(() => {
        this.tick();
    }, 5000);
  };
  componentWillUnmount(){
    clearInterval(this.phoneInterval);
  };  

 
  
  render(){
     if(this.state.on == true) {
        return(
         <div className="Container">On</div>
        )
     } else if(this.state.on == false) {
        return(
        <div className="Container-2">Off</div>
           )
       }
    }
};
export default Phone;



