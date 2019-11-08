import React from 'react';
import MyName from './MyName';
import Mynum from './Mynum';
import MyClub from './Myclub';
import Student from './student';


class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <React.Fragment> {/*<></>도 사용 가능*/}
        <Student name="sim joon" num="01097557267" club="als"></Student>
        <hr></hr>
       <MyName name="wesley"></MyName>
       <Mynum num="10516"></Mynum>
       <MyClub club="jungol"></MyClub>
      </React.Fragment>
    )
  }
}
export default App; 