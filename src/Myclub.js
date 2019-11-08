import React,{Component} from "react";

class MyClub extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div><b>{this.props.club}</b>입니다.</div>
        )
    }

}
export default MyClub;