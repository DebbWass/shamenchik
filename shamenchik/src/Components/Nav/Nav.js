import React from 'react'

export function Nav() {
    return (
        
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>

                <a className="navbar-brand" href="/"><span className="glyphicon glyphicon-scale"></span> ShaMenChik</a>
                </div>

                <div id="navbar" className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li className="<%= typeof page !== 'undefined' && page === 'campgrounds' ? 'active' : '' %>"><a href="/campgrounds">Home</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li class="<%= typeof page !== 'undefined' && page === 'login' ? 'active' : '' %>"><a href="/login">Login</a></li>
                    <li class="<%= typeof page !== 'undefined' && page === 'register' ? 'active' : '' %>"><a href="/register">Sign Up</a></li>
                </ul>
                </div>

            </div>
        </nav>
        
    )
}




    
        
       
