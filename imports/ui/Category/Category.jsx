import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import {Categories} from "../../api/categories";
import {Recipes} from "../../api/recipe"
import Recipe from "../Recipe";
import CategoryForm from "./CategoryForm";

import Card from 'react-toolbox/lib/card/Card';
import CardTitle from 'react-toolbox/lib/card/CardTitle';
import CardMedia from 'react-toolbox/lib/card/CardMedia';
import CardText from 'react-toolbox/lib/card/CardText';
import CardActions from 'react-toolbox/lib/card/CardActions';
import Button from 'react-toolbox/lib/button/Button';
import TableCell from 'react-toolbox/lib/table/TableCell';
import TableRow from 'react-toolbox/lib/table/TableRow';
import Dialog from 'react-toolbox/lib/dialog/Dialog';


class Category extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dialog: false
        };
    }

    handleToggle = () => {
        this.setState({dialog: !this.state.dialog});
    };

    actions = [
        { label: "Zrušit", onClick: this.handleToggle },
        { label: "Uložit", onClick: this.handleToggle}
    ];

    updateCategory(data) {
        console.log(data);
        console.log(this.props);
        Categories.update(this.props.category._id, data);
    }

    renderEdit() {
            return (
                <Dialog
                    active={this.state.dialog}
                    actions={this.actions}
                    onEscKeyDown={this.handleToggle}
                    onOverlayClick={this.handleToggle}
                    title='Upravit kategorii'
                    >

                    <CategoryForm submitCallback={this.updateCategory} category={this.props.category}/>
                </Dialog>
            )
    }

    render() {
        return(
            <Card style={{width: "100%"}}>
                <CardTitle
                    title={this.props.category.title}
                />
                <CardText>Just text...</CardText>
                <CardActions>
                    <Button onClick={this.handleToggle} label="Upravit" />
                    {/*<Button label="Action 2" />*/}
                </CardActions>
                {this.renderEdit()}
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
