import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';


import {Categories} from "../api/categories";
import {Recipes} from "../api/recipe";
import Category from "./Category.jsx";

class CategoryList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipeError: false,
            categoryError: false
        };
    }

    renderCategories(render) {
        if (render === undefined) {
            render = "li";
        }

        let map = this.props.categories.map((category) => (
            <Category key={category._id} category={category} render={render}/>
        ));

        return map;
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

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <h2>Add new category</h2>
                        {this.renderAddNewForm()}
                    </div>

                    <div className="col-md-6">
                        <h2>Add new recipe</h2>
                        {this.renderAddNewRecipe()}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center">Result</h1>
                        <ul className="list-group">
                            {this.renderCategories()}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

CategoryList.propTypes = {
    categories: PropTypes.array.isRequired
};

export default createContainer(() => {
    return {
        categories: Categories.find({}).fetch(),
    };
}, CategoryList);