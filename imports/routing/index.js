import route from './router';
import CategoryList from '/imports/ui/CategoryList.jsx';
import Menu from '/imports/ui/Menu.jsx';
import Index from '/imports/ui/Index.jsx';

route('/', Index);
route('/category', CategoryList);