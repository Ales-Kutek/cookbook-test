import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import Category from "./Category";
import {Categories} from "../../api/categories";

import { Route, Redirect } from 'react-router';

class CategoryDetail extends Component {
    constructor(props) {
        super(props);
    }

    mapAndRenderCategory() {
        let category = this.props.category;
        if (category !== undefined) {
            return (<Category key={category._id} category={category}/>);
        } else {
            return (<Redirect to="/"/>);
        }
    }

    render() {
        return (
            <div className="container marginFromTopDefault">
                {this.mapAndRenderCategory()}
            </div>
        )
    }
}

CategoryDetail.PropTypes = {
    slug: PropTypes.string.isRequired
};

export default createContainer((object) => {
    let slug = object.match.params["id"];
    return {
        slug: slug,
        category: Categories.findOne({slug: slug})
    };
}, CategoryDetail);