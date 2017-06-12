import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import {Categories} from "../../api/categories";
import {Recipes} from "../../api/recipe"
import Recipe from "../Recipe";

import Card from 'react-toolbox/lib/card/Card';
import CardTitle from 'react-toolbox/lib/card/CardTitle';
import CardMedia from 'react-toolbox/lib/card/CardMedia';
import CardText from 'react-toolbox/lib/card/CardText';
import CardActions from 'react-toolbox/lib/card/CardActions';
import Button from 'react-toolbox/lib/button/Button';
import TableCell from 'react-toolbox/lib/table/TableCell';
import TableRow from 'react-toolbox/lib/table/TableRow';

class Category extends Component {
    render() {
        return(
            <Card style={{width: "100%"}}>
                <CardTitle
                    title={this.props.category.title}
                />
                <CardText>Just text...</CardText>
                <CardActions>
                    <Button label="Action 1" />
                    <Button label="Action 2" />
                </CardActions>
            </Card>
        )
    }
}

Category.PropTypes = {
    category: PropTypes.array.isRequired,
    recipes: PropTypes.array.isRequired
};

export default createContainer((object) => {
    let recipes = Recipes.find({category: object.category._id}).fetch();

    return {
        recipes: recipes,
    };

}, Category);
