import React from 'react'; 
import { Provider } from 'react-redux'; 
import { HashRouter } from 'react-router-dom';
import App from './App'; 

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
)
//App will be rendered for all routes in app, routes defined in App 

export default Root; 