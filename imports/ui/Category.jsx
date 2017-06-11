import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import {Categories} from "../api/categories";
import {Recipes} from "../api/recipe"
import Recipe from "./Recipe";

import TableCell from 'react-toolbox/lib/table/TableCell';
import TableRow from 'react-toolbox/lib/table/TableRow';

export default class Category extends Component {
    render() {
        return(
            <TableRow key={this.props.key}>
                <TableCell>{this.props.category.title}</TableCell>
                <TableCell>{this.props.category.created}</TableCell>
            </TableRow>
        )
    }
}

Category.PropTypes = {
    category: PropTypes.array.isRequired
};

// export default createContainer((object) => {
//
//     // let recipes = Recipes.find({category: object.category._id}).fetch();
//
//     return {
//         // recipes: recipes,
//     };
// }, Category);