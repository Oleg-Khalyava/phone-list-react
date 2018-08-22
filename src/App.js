import React, {Component } from 'react';
import FormInputContact from "./composition_components/form_input_contact";
import ContactUl from "./composition_components/contact_ul";
import "./App.css";

class App extends Component {
  constructor () {
      super();
      this.state = {arrContacts:[],
                    saveArrContacts:[],
                    saveCount:true,
                   objectContact:{  
                                    name:"",
                                    tel: "",
                                    email: "",
                                    group: ""
                                },
                    objectErrors:{name:"",
                                  nameColor:"",
                                  tel:"",
                                  telColor:"",
                                  email:"",
                                  emailColor:"",
                                  emptyNameColor:"",
                                  emptyTelColor:""
                                 }
                   };
       this.changeValue = this.changeValue.bind(this);
       this.pushPersons = this.pushPersons.bind(this);
       this.checkErrors = this.checkErrors.bind(this);
       this.emptyField = this.emptyField.bind(this);
       this.clearErrorEmptyField = this.clearErrorEmptyField.bind(this);
       this.handleSearch = this.handleSearch.bind(this);
                 };
 
  clearErrorEmptyField(){
      let newObject = Object.assign({},this.state);
      if (newObject.objectErrors.name === "*обязательное поле для заполнения" || newObject.objectErrors.tel === "*обязательное поле для заполнения" ){
      if (newObject.objectErrors.name === "*обязательное поле для заполнения"){
          newObject.objectErrors.name = "";
      };
      if (newObject.objectErrors.tel === "*обязательное поле для заполнения"){
          newObject.objectErrors.tel = "";
      };  
      this.setState (newObject);
      }
  };
  checkErrors(){
      let object = this.state.objectErrors;
      return((object.nameColor === "red"||object.telColor === "red"||object.emailColor === "red") ? false: true);
  };
  emptyField(){
      let newObject = Object.assign({},this.state);
      let empty = true;
      if(newObject.objectContact.name.length === 0){
          newObject.objectErrors.name = "*обязательное поле для заполнения";
          empty = false;
          newObject.objectErrors.emptyNameColor = "red";
            setTimeout(this.clearErrorEmptyField,2000);
      }
      else { newObject.objectErrors.emptyNameColor = "";};
      if(newObject.objectContact.tel.length === 0){
          newObject.objectErrors.tel = "*обязательное поле для заполнения";
          empty = false;
          newObject.objectErrors.emptyTelColor = "red";
          setTimeout(this.clearErrorEmptyField,2000);
      }
      else {newObject.objectErrors.emptyTelColor = "";};
      this.setState(newObject);
      return empty;
  };
  changeValue (event) {
      let target = event.target;
      let newObject = Object.assign({},this.state);
      switch (target.id){
          case "name":{
                  if (/^[A-ZА-Я]/.test(target.value)){
                        if (/^[A-ZА-Я][A-Za-zА-Яа-я]*$/.test(target.value)){newObject.objectErrors.name = "";}
                        else {
                            newObject.objectErrors.emptyNameColor = "";
                            newObject.objectErrors.name = "Ошибка ввода - имя может содержать только буквы";
                        }
                     }
                 
                  else {
                      if(target.value.length === 0){newObject.objectErrors.name = ""}
                      else {
                            newObject.objectErrors.emptyNameColor = "";
                            newObject.objectErrors.name = "Ошибка ввода - имя должно начинаться с заглавной буквы";
                      };
                       };
                  newObject.objectContact.name = target.value;
                  newObject.objectErrors.nameColor = (this.state.objectErrors.name.length>0)?"red":"";
                  break;
          } 
          case "tel":{
                  if (/^\d+$/.test(target.value)){
                        if(/^[^0]/.test(target.value)){
                             if (/^\d{1,11}$/.test(target.value)){newObject.objectErrors.tel = "";}
                             else {
                                 newObject.objectErrors.emptyTelColor = "";
                                 newObject.objectErrors.tel = "Ошибка ввода - максимальная длина номера телефона составляет 11 цифр";
                                  }
                        }
                        else{
                             newObject.objectErrors.emptyTelColor = "";
                             newObject.objectErrors.tel = 'Ошибка ввода - номер не может начинаться с цифры "0"';
                        }; 
                  }
                  else {
                      if(target.value.length === 0){newObject.objectErrors.tel = "";}
                      else {
                          newObject.objectErrors.emptyTelColor = "";
                          newObject.objectErrors.tel = "Ошибка ввода - данное поле может содержать только цифры";
                           } 
                       };
                  newObject.objectContact.tel = target.value;
                  newObject.objectErrors.telColor = (this.state.objectErrors.tel.length>0)?"red":"";
                  break;
          }   
          case "email":{
                  if (!/^[\w_\-.@]+$/.test(target.value)){
                      if(target.value.length === 0){newObject.objectErrors.email = "";}
                      else {
                       let indexError = target.value.search(/[^\w_\-.@]/);  
                       newObject.objectErrors.email = `Ошибка ввода - недопустимый символ "${target.value[indexError]}"`;
                      }}
                  else {
                      newObject.objectErrors.email = "";
                      if (/@/.test(target.value)){
                          if(!/@[a-z]*$|@[a-z]+\.[a-z]*$/.test(target.value)){newObject.objectErrors.email = `Ошибка ввода - недопустимый формат email`;}
                      }
                        }
                  newObject.objectContact.email = target.value;
                  newObject.objectErrors.emailColor = (this.state.objectErrors.email.length>0)?"red":"";
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
      let error = this.checkErrors();
      let empty = this.emptyField();
      if (error&&empty){
      let pushObject = Object.assign({},this.state.objectContact);
      let newObject = Object.assign({},this.state,{objectContact:{name:"",
                                    tel: "",
                                    email: "",
                                    group: pushObject.group
                                }});
      newObject.arrContacts.push(pushObject);
      this.setState (newObject);
          };
  };
  handleSearch (event){
     let inputName = event.target.value.toLowerCase();
     let newObject = Object.assign({},this.state);
     if (newObject.saveCount === true){newObject.saveArrContacts = newObject.arrContacts;};
     inputName.length === 0 ? newObject.saveCount = true : newObject.saveCount = false;
     newObject.arrContacts= newObject.saveArrContacts.filter (function (item){
         return item.name.toLowerCase().indexOf(inputName) !==-1;
     });
     this.setState(newObject);
  };
  handleDelete(){};
  render (){return ( <div>
                     <FormInputContact 
                                    id ="field-input"
                                    object = { this.state.objectContact}
                                    changeValue ={(event)=>{this.changeValue(event);}}
                                    pushPersons = {(event)=>{this.pushPersons(event);}}
                                    state ={this.state}
                                    objectErrors ={this.state.objectErrors}
                     />
                     <label>Поиск
                     <input type ="search" id ="search" placeholder = "введите имя" onChange = {this.handleSearch}/>
                     </label>
                     <ContactUl persons = {this.state.arrContacts}/>
                     </div>     
                  );
                };
  componentDidMount (){
                       let newObjectContact = Object.assign({},this.state.objectContact, {group: document.getElementById("select").value});
                        let newObject = Object.assign({},this.state, {objectContact: newObjectContact});
                        this.setState (newObject);
                        var objectArr= require('./jsonobject.json');
                        this.setState({arrContacts:objectArr});
  };

                      };
                      
export default App;