import React from 'react'
import ListPart from '../ListPart/ListPart'
import './RecipesList.scss'

export function RecipesList() {
    return (
        <div>
            <header className = "jumbotron">
                <div className ="container">
                    <h1 id="recipesTitle"><span className="glyphicon glyphicon-scale"></span> Welcome to ShaMenChik Recipes!	</h1>
                    <p>View our hand-picked recipes from all over the world</p>
                    <p>
                        <a className="btn btn-primary btn-large" href = "#">Add New Recipe</a>
                    </p>
                </div>
                <div className="container">
                    <form className="search-form">
                        <div className="form-group has-feedback">
                            <label for="search" className="sr-only">Search</label>
                            <input type="text" className="form-control" name="search" id="search" placeholder="search"/>
                            <span className="glyphicon glyphicon-search form-control-feedback"></span>
              		        
                        </div>
                    </form>
                </div>
            </header>
            
            <ListPart />
            
        </div>
    )
}
