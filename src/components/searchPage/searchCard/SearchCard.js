import React from 'react'
import "./SearchCard.css"
import PeopleIcon from '@material-ui/icons/People';

function SearchCard({image , title, location , duration, description, applicants, company,companySrc}) {
    return (
        <div className="searchCard">
            <div className="searchCard__block">
                <img src={image} className="searchCard__image" />
                <div className="searchCard__info">
                    <h2 className="searchCard__title">
                        {title}
                    </h2>

                    <h4 className="searchCard__locationAndDuration">
                        <small>{location} . </small>
                        <small>{duration}</small>
                    </h4>

                    <p className="searchCard__description">
                        {description}
                    </p>

                    
                    <h2 className="searchCard__companyInfo">
                        <img src={companySrc} className="searchCard__companyLogo" />
                        {company}
                    </h2>
                    
                    
                </div>
                
                <h4 className="searchCard__applicantsInfo">
                    <PeopleIcon />
                    <small style={{marginLeft:"10px"}}> {applicants} </small> 
                    <small style={{marginLeft:"10px"}}> applicants </small>
                </h4>
                
                
            </div>
            
        </div>
    )
}

export default SearchCard
