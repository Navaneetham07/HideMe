import React from "react";
import list from '../userDetails'
import Question from "../components/AnswerMe";
import "../assets/style.css"
var question=''
var answer=''
class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        entry:'',
        value: '',
        count:0,
        count1:0,
        num:0 };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleCheck=this.handleCheck.bind(this);
      this.check=this.check.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value,
      count:0,count1:0});
    }
    handleCheck(event){
      this.setState({entry: event.target.value,
        });
        
    }
    check(event){
      if(this.state.entry === answer){
        alert('Welcome');
        window.location.href='/notes';
      }
      else{
        alert('Incorrect answer');
      }
      this.setState({num:0
      });
      event.preventDefault();
    }
    password=()=>{
      this.setState({
        num:this.state.num+1
      });
    }
    handleSubmit(event) {
     list.map((item,index)=>{
       if(item.id === this.state.value){
         const c=(Math.floor(Math.random()*10))%3;
         question=item.question[c].q
        answer=item.question[c].a
            this.setState({
              count:this.state.count+1
            });
          }
          else
          {
            this.setState({
              count1:this.state.count1+1
            })
          }
          return 1;
          });      
      event.preventDefault();
    }
    
    render() {
      return (
        <div>
          <header><img className='login-img' alt="Logo" src="hide1.png"/></header>
        <div className="container">
          <div className="title">LOGIN <img className='image' alt="Logo" src="hideme2.png"/></div>
        <div className="form-user">
        <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Username" className='questionBox' required/>
            <br></br>
            <br></br>
          <input type="submit" value="Submit" className='playBtn'/>
        </form>
        </div>
        
        {this.state.count1 === list.length-1 ? (
          alert('User does not exist')):null}
        
        {this.state.count === 1 ? (
          <Question userName={this.state.value} password={this.password}/>):null}
        {this.state.num ===1 ? (
          <form onSubmit={this.check} className="form-user">
            <textarea value={this.state.pass} onChange={this.handleCheck} placeholder={question} className='questionBox' required/>
          <input type="submit" value="check me" className='playBtn'/>
        </form>
        ):null}
        </div>
        </div>
      );
    }
  }
  
  export default NameForm
  export { NameForm }
  