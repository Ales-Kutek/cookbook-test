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
import Dialog from 'react-toolbox/lib/dialog/Dialog';
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
            categoryError: false,
            activeAdd: false
        };
    }

    renderAddNewForm() {
        let newCatClassValue = this.state.categoryError ? "has-error" : "";

        return (
            <form className="add-new-category" onSubmit={this.addNewSubmitCategory.bind(this)}>
                <label htmlFor="addNewCategory">Category</label>
                <div className={newCatClassValue}>
                    <input
                        autoFocus={true}
                        ref="addNewCategory"
                        type="text"
                        placeholder="add new category..."
                        className="form-control"
                        id="addNewCategory"
                        />
                </div>
            </form>
        )
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

            this.handleToggle();
            node.value = "";
        }

        return false;
    }

    handleToggle = () => {
        this.setState({activeAdd: !this.state.activeAdd});
    };

    actions = [
        { label: "Cancel", onClick: this.handleToggle },
        { label: "Save", onClick: this.addNewSubmitCategory.bind(this)}
    ];

    renderDialog() {
        return (
            <div>
                <Button label='Přidat kategorii' onClick={this.handleToggle} />
                <Dialog
                active={this.state.activeAdd}
                actions={this.actions}
                onEscKeyDown={this.handleToggle}
                onOverlayClick={this.handleToggle}
                title='Přidat novou kategorii'>
                    {this.renderAddNewForm()}
                </Dialog>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderDialog()}
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
                            <TableCell><span onClick={this.removeCategory(item._id)} className="pointer material-icons">delete</span></TableCell>
                        </TableRow>
                    ))}
                </Table>
            </div>
        )
    }

    removeCategory(id) {
        /** bind funkce */
        return function (e) {
            Categories.remove({
                _id: id
            });
        }.bind(this);
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