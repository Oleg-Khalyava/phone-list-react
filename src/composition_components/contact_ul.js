/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from "react";
import ContactLi from "./contact_li";


const ContactUl = ({persons}) =>(
        <ul> <ContactLi index = "№" name = "Имя" tel = "Номер тел." email = "E-mail" group = "Группа" visible ="hidden" />
            {                              persons.map ( (item, index)=>(<ContactLi 
                                            key = {index}
                                            index = {index+1} 
                                            name = {item.name} 
                                            tel = {item.tel}
                                            email = {item.email} 
                                            group = {item.group}
                                            visible ="visible"
                                            />
                                           )               
                        )
             }
        </ul>
        );
export default ContactUl;
