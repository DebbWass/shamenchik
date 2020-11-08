import React from 'react'
import RecipeListItem from '../RecipeListItem/RecipeListItem'
import './ListPart.scss';

export default function ListPart() {
    const arr =[1,2,3,4,5,6,7];
    return (
        <div class= "row text-center" id='111'>
             {arr.map((item) =>
            <div class ="col-md-3 col-sm-6">
               <RecipeListItem />
            </div>
            )}
        </div>
    )
}
