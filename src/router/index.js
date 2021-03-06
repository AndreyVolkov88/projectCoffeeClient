import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Products from '../pages/Products'
import Details from '../pages/Details'
import Edit from '../pages/Edit'
import Chart from '../pages/Chart'
import History from '../pages/History';
import Profile from '../pages/Profile'
import NewProduct from '../pages/NewProduct';
import Guard from './Guard'

const Router = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>

            <Route path="/register">
                <Register />
            </Route>

            <Route path="/login">
                <Login />
            </Route>

            <Guard path="/products" component={Products} />

            <Guard path="/new-products" component={NewProduct} />

            <Guard path="/details/:id" component={Details} />

            <Guard path="/edit/:id" component={Edit} />

            <Guard path="/cart" component={Chart} />
            
            <Guard path="/history" component={History} />
            
            <Guard path="/profile" component={Profile} />

            <Route>
                Not Found
            </Route>
        </Switch>
    )
}

export default Router