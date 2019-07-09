import React from 'react'
import '../notfound/notfound.css'
const NotFound = ()=>{
return(
    <div className ="error-page">
        <div className="error-content">
            <div className ="container">
                <img src="  imgs/404.png" alt="404" className="img-fluid" />
                <div className="error-message">
                    <h1 className ="error-title">NotFound !</h1>
                    <p>Looks like you are lost. But don't worry there is plenty to see!!</p>
                </div>
                <form className="search-form">
                    <div className="form-group">
                        <label htmlFor="search_content" className ="search_content">Search Content!</label>
                        <input id="search_content" type="text" className="form-control" placeholder="Search what you want to find..."></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Search Now!</button>
                </form>
            </div>
        </div>
    </div>
)
}
export default NotFound; 