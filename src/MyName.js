import React,{Component} from "react";

class MyName extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div><b>{this.props.name}</b>입니다.</div>
        )
    }

}
export default MyName;