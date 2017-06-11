import route from './router';

import CategoryList from '/imports/ui/Category/CategoryList.jsx';
import Category from '/imports/ui/Category/Category.jsx';
import {Categories} from "../api/categories";

import Index from '/imports/ui/Index.jsx';

route('/', Index);
route('/category', CategoryList);
route('/category/detail/:_id', Category);