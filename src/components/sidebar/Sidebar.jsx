import React from "react";
import { Navigation, NavItem } from "../navigation/Navigation";

import "./sidebar.scss";

const Sidebar = ({ count }) => {
  let content = [];
  for(let j= 1; j <= count;j++){
    content.push(<NavItem key={j} path={`tasks/${j}`} text={`Task ${j}`}/>);
  }
  if(content){
    return (
      <aside className="sidebar">
        <Navigation>
          <NavItem path="/" text="Home" exact />
          {content.map((item) => {
      return item;
    })}
        </Navigation>
      </aside>
    );
  }
  else{
    return (
      <aside className="sidebar">
        <Navigation>
          <NavItem path="/" text="Home" exact />
        </Navigation>
      </aside>
    );
  }
};

export default Sidebar;
