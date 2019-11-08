import React,{Component} from "react";

class Student extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <div>번호는 <b>{this.props.num}</b>입니다.</div>
                <div>이름은 <b>{this.props.name}</b>입니다.</div>
                <div>동아리는 <b>{this.props.club}</b>입니다.</div>
            
            </>
            
        )
    }

}
export default Student;