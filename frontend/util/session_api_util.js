//sign up user
export const signup = (user) => (
    $.ajax({
        url: '/api/users', 
        method: 'POST', 
        data: { user }
    })
);

//login user
export const login = (user) => (
    $.ajax({
        url: 'api/session', 
        method: 'POST', 
        data: { user }
    })
);

//log out user
export const logout = () => (
    $.ajax({
        url: 'api/session', 
        method: 'DELETE'
    })
);