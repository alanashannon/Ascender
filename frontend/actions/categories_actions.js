import * as CategoriesApiUtil from '../util/categories_api_util';

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES"; 
export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY"; 

const receiveCategories = (categories) => ({
    type: RECEIVE_CATEGORIES, 
    categories 
});

// create category, not necessary? 
const receiveCategory = (category) => ({
    type: RECEIVE_CATEGORY, 
    category 
});

export const fetchCategories = () => dispatch => {
    return CategoriesApiUtil.fetchCategories()
        .then((categories) => dispatch(receiveCategories(categories)))
};

export const createCategory = (category) => dispatch => {
    return CategoriesApiUtil.createCategory(category)
        .then((category) => dispatch(receiveCategory(category)))
};