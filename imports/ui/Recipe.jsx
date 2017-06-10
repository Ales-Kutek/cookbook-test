import React, { Component, PropTypes } from 'react';

export default class Recipe extends Component {
    render() {
        return(
            <li>
                {this.props.recipe.title}
            </li>
        )
    }
}

Recipe.PropTypes = {
    recipe: PropTypes.array.isRequired
};