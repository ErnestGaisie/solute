import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import NotificationsIcon from '@material-ui/icons/Notifications';
import StarIcon from '@material-ui/icons/Star';

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9eF3AdDg-2a3ZuIuD-7voOtscmwtaoViPSA&usqp=CAU"
/>
      </Link>

      <div className="header__center">
        <div className="header__option header__option--active">
          Jobs
        </div>
        <div className="header__option">
          Internships
        </div>
        <div className="header__option">
          Volunteer
        </div>
        <div className="header__option">
          Training Programs
        </div>

       
      </div>

      <div className="header__right">
          <div className="header__right--option">
          <p>For employers</p>
          </div>
          <div className="header__right--option">
          <NotificationsIcon />
          </div>
          <div className="header__right--option">
          <StarIcon />
          </div>
          <div className="header__right--option">
          <Avatar />
          </div>
        
        
        
       
      </div>
    </div>
  );
}

export default Header;

