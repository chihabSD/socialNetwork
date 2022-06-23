import { useState } from "react";

export default function SettingsPrivacy({setVisible}) {

  const [menu, setMenu] = useState(  [
    {id:0, icon:'settings_filled_icon', title:'Settings'}, 
    {id:1, icon:'privacy_checkup_icon', title:'Privacy Checkup'}, 
    {id:2, icon:'privacy_shortcuts_icon', title:'Privacy Shortcuts'}, 
    {id:3, icon:'activity_log_icon', title:'Activity log'}, 
    {id:4, icon:'news_icon', title:'News Feed Preferences'}, 
    {id:5, icon:'language_icon', title:'Language'}, 
  ])

  return (
    <div className="absolute_wrap">
      <div className="absolute_wrap_header">
        <div className="circle hover1" onClick={()=> {
setVisible(0)
        }}>
          <i className="arrow_back_icon"></i>
        </div>
        Settings & privacy
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
