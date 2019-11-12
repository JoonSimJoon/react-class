import React,{Component} from "react";

class Student extends React.Component{
    constructor(props){
        super(props);

        this.state={
            name:"",
            num:"",
            club:""
        }
    }
    handleChange =(event) =>{
        this.setState({
            [event.target.name]:event.target.value

        });
    };
   
    handleClick =(event) =>{
        alert("이름:"+this.state.name+"학번:"+this.state.num+"동아리:"+this.state.club);
    }
    render(){
        return(
            <>
                <div>
                    <input
                    type="text"
                    placeholder="이름"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    />
                    <input
                    type="num"
                    name="num"
                    placeholder="학번"
                    value={this.state.num}
                    onChange={this.handleChange}
                    />
                    <input
                    type="text"
                    name="club"
                    placeholder="동아리 "
                    value={this.state.club}
                    onChange={this.handleChange}
                    />

                </div>

                <button onClick={this.handleClick}>show</button>
            
            </>
            
        )
    }

}


export default Student;