import React from "react";
import '../assets/name.css';
import '../assets/style.css';
var array=[]
class Notes extends React.Component {
  constructor(props){
    super(props);
    this.state={
        items:[],
        value:'',
        id:0
    }
    this.addNote=this.addNote.bind(this);
    this.gotoLogin=this.gotoLogin.bind(this);
    this.remove=this.remove.bind(this);
}
addNote(event){
    if(this.theTitle.value !==""){
        var newItem={
            id:this.state.id+1,
            title:this.theTitle.value,
            note:this.theNote.value
        };
    }
    array=array.concat(newItem)
    localStorage.setItem('data',JSON.stringify(array))
    this.setState((prevState)=>{
        return{
            items:prevState.items.concat(newItem)
        };
    });
    this.setState({
        id:this.state.id+1
    });
    this.theNote.value="";
    this.theTitle.value="";
    event.preventDefault();
}

gotoLogin(event){
    window.location.href='/';
    event.preventDefault();
}

remove(index) {
    const items = this.state.items.filter((item, itemIndex) => {
      return itemIndex !== index
    })
    this.setState({ items })
  }
  render() {
    return (
          <div>
        <header>
             <img className='image1' alt="Logo" src="hideme2.png"/>
            <h1><center  className="user1">Hide Me</center></h1>
            <img className='image2' src="hi.png"alt="Logout" onClick={this.gotoLogin}/>
        </header>
        <div className="main-content">
        <ul>
        {this.state.items.map( (val,index)=> <li>TITLE : {val.title}<p></p>MESSAGE : {val.note}
            <input type="submit" className='noteBox' id='center' value='Delete' onClick={e=>this.remove(index)}/>
            </li>)}
        </ul>
        </div>
        <div className='container1'>
            <form onSubmit={this.addNote}>
                <input type="text" placeholder="Title"  ref={(title)=>this.theTitle=title } value={this.state.title} required className='noteBox'/>
                <input type="text" placeholder="Take note"  ref={(note)=>this.theNote=note}required  className='noteBox'/>
               <input type="submit" className='noteBox' id='center' value='Add'/>
            </form></div>
    </div>
    );
  }
  }
  
export default Notes
export { Notes }
