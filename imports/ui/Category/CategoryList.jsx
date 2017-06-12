import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';


import {Categories} from "../../api/categories";
import {Recipes} from "../../api/recipe";
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
import Input from 'react-toolbox/lib/input/Input';
import ListItem from 'react-toolbox/lib/list/ListItem';
import ListSubHeader from 'react-toolbox/lib/list/ListSubHeader';
import DatePicker from 'react-toolbox/lib/date_picker/DatePicker';

import { Route, Redirect } from 'react-router';


class CategoryList extends Component {
    constructor(props) {
        super(props);

        console.log(this.props);

        this.state = {
            recipeError: false,
            categoryError: false,
            activeAdd: false,
            redirect: ""
        };
    }

    removeCategory(id) {
        /** bind funkce */
        return function (e) {
            Categories.remove({
                _id: id
            });
        }.bind(this);
    }

    redirectTo(to) {

        return function (e) {
            this.setState({redirect: to});
        }.bind(this);
    }

    renderAddNewForm() {
        let newCatClassValue = this.state.categoryError ? "has-error" : "";

        return (
            <form className="add-new-category" onSubmit={this.addNewSubmitCategory.bind(this)}>
                <div className={newCatClassValue}>
                    <Input
                        autoFocus={true}
                        ref="addNewCategory"
                        type="text"
                        placeholder="název kategorie"
                        />
                </div>
            </form>
        )
    }

    addNewSubmitCategory(e) {
        e.preventDefault();

        const node = ReactDOM.findDOMNode(this.refs.addNewCategory).childNodes[0];
        let text = node.value.trim();

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
        { label: "Zrušit", onClick: this.handleToggle },
        { label: "Uložit", onClick: this.addNewSubmitCategory.bind(this)}
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
                {this.state.redirect !== "" ? <Redirect push to={this.state.redirect}/> : ""}
                {this.state.redirect = ""}

                {this.renderDialog()}
                <Table>
                    <TableHead>
                        <TableCell>Název kategorie</TableCell>
                        <TableCell>Založena</TableCell>
                        <TableCell>Akce</TableCell>
                    </TableHead>
                    {this.props.categories.map((item, idx) => (
                        <TableRow key={idx}>
                            <TableCell>{item.title}</TableCell>
                            <TableCell>{item.created.toDateString()}</TableCell>
                            <TableCell>
                                <span onClick={this.removeCategory(item._id)} className="pointer material-icons">delete</span>
                                <span onClick={this.redirectTo("/category/detail/" + item.slug)} className="pointer material-icons">search</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </Table>
            </div>
        )
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