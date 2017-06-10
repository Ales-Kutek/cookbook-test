import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import {Recipes} from "../api/recipe"
import Recipe from "./Recipe";
class Category extends Component {
    render() {
        if (this.props.render === "option") {
            return this.renderAsOption()
        } else if (this.props.render === "li") {
            return this.renderAsListItem();
        }
    }

    renderRecipes() {
        let length = this.props.recipes.length;

        let map = this.props.recipes.map((recipe) => (
            <Recipe key={recipe._id} recipe={recipe}/>
        ));

        if (length !== 0) {
            return (
                <ul>
                    {map}
                </ul>
            )
        }
    }

    renderAsListItem() {
        return(
            <li className="list-group-item">
                {this.props.category.title}
                {this.renderRecipes()}
            </li>
        )
    }

    renderAsOption() {
        return(
            <option value={this.props.category._id}>{this.props.category.title}</option>
        )
    }
}

Category.PropTypes = {
    category: PropTypes.array.isRequired,
    render: PropTypes.string,
    recipes: PropTypes.array.isRequired
};

export default createContainer((object) => {

    let recipes = Recipes.find({category: object.category._id}).fetch();

    return {
        recipes: recipes,
    };
}, Category);