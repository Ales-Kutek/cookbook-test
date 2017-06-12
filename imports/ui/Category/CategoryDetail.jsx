import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import Category from "./Category";
import {Categories} from "../../api/categories";

class CategoryDetail extends Component {
    constructor(props) {
        super(props);
    }

    mapAndRenderCategory() {

        console.log(Categories.find().fetch());

        let category = Categories.findOne({slug: this.props.slug});

        console.log(this.props.slug);

        return (<Category key={category._id} category={category}/>);
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
    console.log(object);

    return {
        slug: object.match.params["id"]
    };
}, CategoryDetail);