import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {createContainer} from 'meteor/react-meteor-data';

import Category from "./Category";
import {Categories} from "../../api/categories";

import { Route, Redirect } from 'react-router';
import Input from 'react-toolbox/lib/input/Input';

class CategoryForm extends Component {
    constructor(props) {
        super(props);
    }

    callUserCallback(e) {
        e.preventDefault();

        const textNode = ReactDOM.findDOMNode(this.refs.formText).childNodes[0];
        let text = textNode.value.trim();

        const descNode = ReactDOM.findDOMNode(this.refs.formDesc).childNodes[0];
        let desc = descNode.value.trim();

        let data = {
            desc: desc,
            text: text
        };

        this.props.submitCallback(data);

        textNode.value = "";
        descNode.value = "";
    }

    render() {
        return (
            <form className="add-new-category" onSubmit={this.callUserCallback.bind(this)}>
                <div>
                    <Input
                        autoFocus={true}
                        ref="formText"
                        type="text"
                        placeholder="název kategorie"
                        defaultValue={this.props.category.title}
                    />
                    <Input
                        ref="formDesc"
                        type="text"
                        multiline={true}
                        placeholder="krátký popis"
                        defaultValue={this.props.category.desc}
                    />
                </div>
            </form>
        )
    }
}

CategoryForm.PropTypes = {
    submitCallback: PropTypes.func.isRequired,
    id: PropTypes.string
};

export default createContainer((object) => {
    return {
    };
}, CategoryForm);