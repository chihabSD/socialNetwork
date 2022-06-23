import { useState } from "react";

export default function HelpSupport({setVisible}) {

  const [menu, setMenu] = useState(  [
    {id:0, icon:'help_center_icon', title:'Help Center'}, 
    {id:1, icon:'email_icon', title:'Support Inbox'}, 
    {id:2, icon:'info_filled_icon', title:'Report a Problem'}, 
  ])

  return (
    <div className="absolute_wrap">
      <div className="absolute_wrap_header">
        <div className="circle hover1" onClick={()=> {
setVisible(0)
        }}>
          <i className="arrow_back_icon"></i>
        </div>
       Help & Support 
      </div>
      
      {menu.map(menu =>{
        return   <div className="mmenu_item hover3" key={menu.id}>
        <div className="small_circle">
          <i className={menu.icon}></i>
        </div>
        <span>{menu.title}</span>
      </div>
      })}
    
    
    </div>
  );
}
