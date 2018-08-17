/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* в качестве параметра передается state, для определения первичного значения свойства group объекта objectContact? а такжк onChange()*/  
import React from "react";
export default class SelectGroup extends React.Component {
    render (){return (
                
                <label>Выберите группу:
                <select 
                id ="select" 
                onChange = {this.props.onChange} 
                 >
                <option>коллеги</option>
                <option>друзья</option>
                <option>семья</option>
                </select>
                </label>
                
                     )
             };
};

