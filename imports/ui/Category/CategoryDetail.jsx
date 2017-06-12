import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import Category from "./Category";
import {Categories} from "../../api/categories";

class CategoryDetail extends Component {
    constructor(props) {
        super(props);
    }

    mapAndRenderCategory() {
        let category = Categories.findOne(this.props.id);

        console.log(this.props.id);

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
    id: PropTypes.string.isRequired
};

export default createContainer((object) => {
    return {
        id: object.match.params["id"]
    };
}, CategoryDetail);