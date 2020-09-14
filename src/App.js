import React, {Component} from 'react';
import {reactLocalStorage} from 'reactjs-localstorage';
import './App.css';
import Squre1 from './components/Squre1'
import Squre2 from './components/Squre2'
import Squre3 from './components/Squre3'
import Squre4 from './components/Squre4'
import Squre5 from './components/Squre5'
import Squre6 from './components/Squre6'
import Squre7 from './components/Squre7'
import Squre8 from './components/Squre8'
import Squre9 from './components/Squre9'


class App extends Component {
  constructor(){
    super();
    this.state = {
      sign1:null,
      sign2:null,
      sign3:null,
      sign4:null,
      sign5:null,
      sign6:null,
      sign7:null,
      sign8:null,
      sign9:null,
      clicked1:false,
      clicked2:false,
      clicked3:false,
      clicked4:false,
      clicked5:false,
      clicked6:false,
      clicked7:false,
      clicked8:false,
      clicked9:false,
      curruntsign: "X",
      stetus:null
    }
  }
  componentDidMount(){
    reactLocalStorage.clear();
  }
  saveSign1=()=>{
    if(this.state.curruntsign ==="X"){
    this.setState({
      sign1:this.state.curruntsign,
      curruntsign:"O",
      clicked1:true
    })
    reactLocalStorage.set('sign1', this.state.curruntsign);}
    else{
      this.setState({
        sign1:this.state.curruntsign,
        curruntsign:"X",
        clicked1:true
      })
      reactLocalStorage.set('sign1', this.state.curruntsign);}
    }
    saveSign2=()=>{
      if(this.state.curruntsign ==="X"){
      this.setState({
        sign2:this.state.curruntsign,
        curruntsign:"O",
        clicked2:true
      })
      reactLocalStorage.set('sign2', this.state.curruntsign);}
      else{
        this.setState({
          sign2:this.state.curruntsign,
          curruntsign:"X",
          clicked2:true
        })
        reactLocalStorage.set('sign2', this.state.curruntsign);}
      }
      saveSign3=()=>{
        if(this.state.curruntsign ==="X"){
        this.setState({
          sign3:this.state.curruntsign,
          curruntsign:"O",
          clicked3:true
        })
        reactLocalStorage.set('sign3', this.state.curruntsign);}
        else{
          this.setState({
            sign3:this.state.curruntsign,
            curruntsign:"X",
            clicked3:true
          })
          reactLocalStorage.set('sign3', this.state.curruntsign);}
        }
        saveSign4=()=>{
          if(this.state.curruntsign ==="X"){
          this.setState({
            sign4:this.state.curruntsign,
            curruntsign:"O",
            clicked4:true
          })
          reactLocalStorage.set('sign4', this.state.curruntsign);}
          else{
            this.setState({
              sign4:this.state.curruntsign,
              curruntsign:"X",
              clicked4:true
            })
            reactLocalStorage.set('sign4', this.state.curruntsign);}
          }
          saveSign5=()=>{
            if(this.state.curruntsign ==="X"){
            this.setState({
              sign5:this.state.curruntsign,
              curruntsign:"O",
              clicked5:true
            })
            reactLocalStorage.set('sign5', this.state.curruntsign);}
            else{
              this.setState({
                sign5:this.state.curruntsign,
                curruntsign:"X",
                clicked5:true
              })
              reactLocalStorage.set('sign5', this.state.curruntsign);}
            }
            saveSign6=()=>{
              if(this.state.curruntsign ==="X"){
              this.setState({
                sign6:this.state.curruntsign,
                curruntsign:"O",
                clicked6:true
              })
              reactLocalStorage.set('sign6', this.state.curruntsign);}
              else{
                this.setState({
                  sign6:this.state.curruntsign,
                  curruntsign:"X",
                  clicked6:true
                })
                reactLocalStorage.set('sign6', this.state.curruntsign);}
              }
              saveSign7=()=>{
                if(this.state.curruntsign ==="X"){
                this.setState({
                  sign7:this.state.curruntsign,
                  curruntsign:"O",
                  clicked7:true
                })
                reactLocalStorage.set('sign7', this.state.curruntsign);}
                else{
                  this.setState({
                    sign7:this.state.curruntsign,
                    curruntsign:"X",
                    clicked7:true
                  })
                  reactLocalStorage.set('sign7', this.state.curruntsign);}
                }
                saveSign8=()=>{
                  if(this.state.curruntsign ==="X"){
                  this.setState({
                    sign8:this.state.curruntsign,
                    curruntsign:"O",
                    clicked8:true
                  })
                  reactLocalStorage.set('sign8', this.state.curruntsign);}
                  else{
                    this.setState({
                      sign8:this.state.curruntsign,
                      curruntsign:"X",
                      clicked8:true

                    })
                    reactLocalStorage.set('sign8', this.state.curruntsign);}
                  }
                  saveSign9=()=>{
                    if(this.state.curruntsign ==="X"){
                    this.setState({
                      sign9:this.state.curruntsign,
                      curruntsign:"O",
                      clicked9:true
                    })
                    reactLocalStorage.set('sign9', this.state.curruntsign);}
                    else{
                      this.setState({
                        sign9:this.state.curruntsign,
                        curruntsign:"X",
                        clicked9:true
                      })
                      reactLocalStorage.set('sign9', this.state.curruntsign);}
                    }
    game=()=>{
     var csign1=reactLocalStorage.get('sign1');
     var csign2=reactLocalStorage.get('sign2');
     var csign3=reactLocalStorage.get('sign3');
     var csign4=reactLocalStorage.get('sign4');
     var csign5=reactLocalStorage.get('sign5');
     var csign6=reactLocalStorage.get('sign6');
     var csign7=reactLocalStorage.get('sign7');
     var csign8=reactLocalStorage.get('sign8');
     var csign9=reactLocalStorage.get('sign9');
     
     if(csign1 === csign4 && csign4 === csign7){
       this.setState({stetus: [csign1]})
     }else if (csign2 === csign5 && csign5 === csign8) {
      this.setState({stetus: [csign2]})
     }else if(csign3 === csign6 && csign6 === csign9){
      this.setState({stetus: [csign3]})
     }else if(csign3 === csign6 && csign6 === csign9){
      this.setState({stetus: [csign3]})
     }else if(csign4 === csign5 && csign5 === csign6){
      this.setState({stetus: [csign4]})
     }else if(csign7 === csign8 && csign8 === csign9){
      this.setState({stetus: [csign7]})
     }else if(csign1 === csign5 && csign5 === csign9){
      this.setState({stetus: [csign1]})
     }else if(csign7 === csign5 && csign5 === csign3){
      this.setState({stetus: [csign7]})
     }

      }

  
  render(){
    return(
        <div className="App holebord">
        <div>
        <Squre1 onclick={()=>{this.saveSign1(); this.game()}} sign={this.state.sign1} clicked={this.state.clicked1}/>
        <Squre2 onclick={()=>{this.saveSign2(); this.game()}} sign={this.state.sign2} clicked={this.state.clicked2}/>
        <Squre3 onclick={()=>{this.saveSign3(); this.game()}} sign={this.state.sign3} clicked={this.state.clicked3}/></div><br />
        <div>
        <Squre4 onclick={()=>{this.saveSign4(); this.game()}} sign={this.state.sign4} clicked={this.state.clicked4}/>
        <Squre5 onclick={()=>{this.saveSign5(); this.game()}} sign={this.state.sign5} clicked={this.state.clicked5}/>
        <Squre6 onclick={()=>{this.saveSign6(); this.game()}} sign={this.state.sign6} clicked={this.state.clicked6}/></div><br />
        <div>
        <Squre7 onclick={()=>{this.saveSign7(); this.game()}} sign={this.state.sign7} clicked={this.state.clicked7}/>
        <Squre8 onclick={()=>{this.saveSign8(); this.game()}} sign={this.state.sign8} clicked={this.state.clicked8}/>
        <Squre9 onclick={()=>{this.saveSign9(); this.game()}} sign={this.state.sign9} clicked={this.state.clicked9}/></div><br />
        <div>
        <h1> WINNER IS {this.state.stetus}</h1>
        </div>
        </div>
    );
  }
}

export default App;
