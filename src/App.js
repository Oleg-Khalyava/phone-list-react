import React, { Component } from 'react';
import FormInputContact from "./composition_components/form_input_contact";
import ContactUl from "./composition_components/contact_ul";

import "./App.css";


class App extends Component {
  constructor () {
      super();
      this.state = {arrContacts:[],
                   objectContact:{name:"",
                                    tel: "",
                                    email: "",
                                    group: ""
                                }
               
                   };
       this.changeValue = this.changeValue.bind(this);
       this.pushPersons = this.pushPersons.bind(this);
                 };
  changeValue (event) {
      let target = event.target;
      let newObject = Object.assign({},this.state);
      switch (target.id){
          case "name":{
                  newObject.objectContact.name = target.value;
                  break;
          } 
          case "tel":{
                  newObject.objectContact.tel = target.value;
                  break;
          }   
          case "email":{
                  newObject.objectContact.email = target.value;
                  break;
          }
          case "select":{
                  newObject.objectContact.group = target.value;
                  break;
          }
          default:break 
      };
      this.setState(newObject);
  };  
  pushPersons (event) {
      event.preventDefault();
      let pushObject = Object.assign({},this.state.objectContact);
      let newObject = Object.assign({},this.state,{objectContact:{name:"",
                                    tel: "",
                                    email: "",
                                    group: pushObject.group
                                }});
      newObject.arrContacts.push(pushObject);
      this.setState (newObject);  
  };

  render (){return ( <div>
                     <FormInputContact 
                                    id ="field-input"
                                    object = { this.state.objectContact}
                                    changeValue ={(event)=>{this.changeValue(event)}}
                                    pushPersons = {(event)=>{this.pushPersons(event)}}
                                    state ={this.state}
                     />
                     <ContactUl persons = {this.state.arrContacts}/>
                     </div>     
                  );
                };
  componentDidMount (){
                        let newObjectContact = Object.assign({},this.state.objectContact, {group: document.getElementById("select").value});
                        let newObject = Object.assign({},this.state, {objectContact: newObjectContact});
                        this.setState (newObject);
  
      /*this.state.objectContact.group = document.getElementById("select").value;*/
  };

                      };
export default App;
