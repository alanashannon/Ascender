export const fetchCategories = () => {
    return $.ajax({
        method: 'GET', 
        url: '/api/categories'
    });
};

export const createCategory = (category) => {
    return $.ajax({
        method: 'POST', 
        url: '/api/categories', 
        data: { category }
    });
};