import React from 'react'
import pic from './ff814e63495c488f692617ff11e3f784.jpg'
import './RecipeListItem.scss'

export default function RecipeListItem() {
    return (
        <div class = "img-thumbnail">
            <img id ="recipeListItemPic" src={pic} ></img>
            <div class = "caption">
                <h4>Recipe Title</h4>
            </div>
            <div>
                <span class="badge label-primary"><i class="fas fa-thumbs-up"></i> Likes</span>
            </div>
            <div>
              	<em>No reviews yet.</em>
            </div>
            <p>
				<a href="#" class="btn btn-primary">More Info</a>
			</p>
        </div>
    )
}
