import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';


import {Categories} from "../api/categories";
import {Recipes} from "../api/recipe";
import Category from "./Category.jsx";

import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Navigation from 'react-toolbox/lib/navigation/Navigation';
import Table from 'react-toolbox/lib/table/Table';
import TableHead from 'react-toolbox/lib/table/TableHead';
import TableCell from 'react-toolbox/lib/table/TableCell';
import TableRow from 'react-toolbox/lib/table/TableRow';
import Button from 'react-toolbox/lib/button/Button';
import Drawer from 'react-toolbox/lib/drawer/Drawer';
import Link from 'react-toolbox/lib/link/Link';
import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';
import ListSubHeader from 'react-toolbox/lib/list/ListSubHeader';
import DatePicker from 'react-toolbox/lib/date_picker/DatePicker';

class CategoryList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipeError: false,
            categoryError: false
        };
    }

    addNewSubmitCategory(e) {
        e.preventDefault();

        const node = ReactDOM.findDOMNode(this.refs.addNewCategory);
        let text = node.value;

        if (text === "") {
            this.setState({categoryError: true});
        } else {
            this.setState({categoryError: false});
            Categories.insert({
                title: text,
                created: new Date()
            });

            node.value = "";
        }
    }

    renderAddNewForm() {
        let newCatClassValue = this.state.categoryError ? "has-error" : "";

        return (
            <form className="add-new-category" onSubmit={this.addNewSubmitCategory.bind(this)}>
                <label htmlFor="addNewCategory">Category</label>
                <div className={newCatClassValue}>
                    <input
                        ref="addNewCategory"
                        type="text"
                        placeholder="add new category..."
                        className="form-control"
                        id="addNewCategory"
                        />
                </div>

                <br/>

                <input type="submit" value="Send" className="form-control"/>
            </form>
        )
    }


    addNewSubmitRecipe(e) {
        e.preventDefault();

        const textNode = ReactDOM.findDOMNode(this.refs.addNewRecipeText);
        const categoryNode = ReactDOM.findDOMNode(this.refs.addNewRecipeCategory);

        let text = textNode.value.trim();
        let category = categoryNode.value;

        if (text === "") {
            this.setState({recipeError: true});
        } else {
            this.setState({recipeError: false});

            Recipes.insert({
                created: new Date(),
                title: text,
                category: category
            });

            textNode.value = "";
        }
    }

    renderAddNewRecipe() {
        let newRecpClassValue = this.state.recipeError ? "has-error" : "";

        return (
            <form className="add-new-recipe" onSubmit={this.addNewSubmitRecipe.bind(this)}>
                <label htmlFor="addNewRecipeText">Recipe name</label>
                <div className={newRecpClassValue}>
                    <input
                    ref="addNewRecipeText"
                    type="text"
                    placeholder="add new recipe.."
                    className="form-control"
                    id="addNewRecipeText"
                    />
                </div>

                <br/>

                <label htmlFor="addNewRecipeCategory">Category</label>
                 <select ref="addNewRecipeCategory" className="form-control" id="addNewRecipeCategory">
                     {this.renderCategories("option")}
                 </select>

                <br/>

                <input type="submit" value="Send" className="form-control"/>
            </form>
        )
    }

    renderCategories() {
        return this.props.categories.map((category) => (
            <Category key={category._id} category={category}/>
        ));
    }

    render() {
        return (
            <Table>
                <TableHead>
                    <TableCell>Název kategorie</TableCell>
                    <TableCell>Založena</TableCell>
                    <TableCell>Smazat</TableCell>
                </TableHead>
                {this.props.categories.map((item, idx) => (
                    <TableRow key={idx}>
                        <TableCell>{item.title}</TableCell>
                        <TableCell>{item.created.toDateString()}</TableCell>
                        <TableCell><span onClick={this.removeCategory(item._id)} className="material-icons">delete</span></TableCell>
                    </TableRow>
                ))}
            </Table>
        )
    }

    removeCategory(id) {
        console.log("remove");

        return;

        Categories.remove({
            _id: id
        });
    }
}

CategoryList.propTypes = {
    categories: PropTypes.array.isRequired,
};

export default createContainer(() => {
    return {
        categories: Categories.find({}).fetch(),
    };
}, CategoryList);