/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from "react";
import ButtonSub from "./button_sub";
import InputField from "./input_field";

const FormInputContact = ({pushPersons, object, changeValue, setGroup, state, id})=>{
    return (<form id = {id} onSubmit = {pushPersons}>
            <h1>Введите контактные данные</h1>
            <InputField object = {object} changeValue = {changeValue} state = {state}/>
            <ButtonSub name ="Записать контакт"/>
            </form>
            );
};
export default FormInputContact;

