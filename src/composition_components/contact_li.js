/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from "react";

const ContactLi = ({index,name,tel,email,group, visible})=>(<li>
                                                         <span id ="index_s">{index}</span> 
                                                         <span id="name_s">{name}</span> 
                                                         <span id="tel_s">{tel}</span>
                                                         <span id = "email_s">{email}</span>
                                                         <span id="group_s">{group}</span>
                                                         <input type="checkbox" id="delete" style = {{visibility:visible}}/>
                                                    </li>);

export default ContactLi;

