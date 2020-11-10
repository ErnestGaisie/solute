import React from 'react'
import "./Banner.css"
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Banner() {
    const history = useHistory();
    return (
        
        <div className="banner">

      <div className="banner__info">
        <h1>Get out and get your dream job.</h1>
        <h5>
          Plan with us and see what is rerquired of you to land your dream job.
        </h5>
        <Button variant="outlined" onClick={() => history.push("/search")}>
          Search Job
        </Button>
      </div>
        </div>
    )
}

export default Banner
