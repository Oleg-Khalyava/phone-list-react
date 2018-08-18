/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*в качестве параметров принимает: (object, changeValue) - для input*/
import React from "react";
import SelectGroup from "./select_group";
export default class InputField extends React.Component {
        constructor ({object,changeValue, state, objectErrors}){
            super ({object,changeValue, state, objectErrors});
        }
    render (){return (
                <div>
                
                <label>Имя:
                <input 
                id ="name" 
                type="text" 
                placeholder = "имя" 
                autocomplete="off" 
                data-rule ="length, a"
                value = {this.props.object.name} 
                onChange = {this.props.changeValue}
                style={{color:this.props.objectErrors.nameColor}}/>
                </label>
                <div style = {{color:this.props.objectErrors.emptyNameColor}}>{this.props.objectErrors.name}</div>
                <label>Номер тел:
                <input 
                id ="tel" 
                type="tel" 
                placeholder = "тел." 
                autocomplete="off" 
                data-rule ="length"
                value = {this.props.object.tel} 
                onChange = {this.props.changeValue}
                style={{color:this.props.objectErrors.telColor}}/>
                </label>
                <div style = {{color:this.props.objectErrors.emptyTelColor}}>{this.props.objectErrors.tel}</div>
                <label>E-mail:
                <input 
                id ="email" 
                type="email" 
                placeholder = "e-mail" 
                autocomplete="on"
                data-rule ="length"
                value = {this.props.object.email} 
                onChange = {this.props.changeValue}
                style={{color:this.props.objectErrors.emailColor}}/>
                </label>
                <div>{this.props.objectErrors.email}</div>
                <SelectGroup onChange = {this.props.changeValue} state = {this.props.state}/>
                </div>
                     )
             };
};

