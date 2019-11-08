import React,{Component} from "react";

class Mynum extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div><b>{this.props.num}</b>입니다.</div>
        )
    }

}
export default Mynum;