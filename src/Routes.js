import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import UserDashboard from "./user/UserDashBoard";
import AdminDashboard from "./user/AdminDashBoard"

import PrivateRoute from "./auth/helper/PrivateRoutes";
import AdminRoute from "./auth/helper/AdminRoutes";
import AddCategory from "./admin/AddCategory";
import ManageCategories from "./admin/ManageCategories";
import addProdcut from "./admin/AddProduct";
import ManageProducts from "./admin/ManageProducts";
import updateProduct from "./admin/UpdateProduct";
import Cart from "./admin/Cart";


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Signin" component={Signin} />
        <Route path="/cart" component={Cart} />
        <PrivateRoute path="/user/dashboard" exact component={UserDashboard} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
        <AdminRoute path="/admin/create/category" exact component={AddCategory} />
        <AdminRoute path="/admin/categoryies" exact component={ManageCategories} />
        <AdminRoute path="/admin/createproduct" exact component={addProdcut} />
        <AdminRoute path="/admin/manageProcuts" exact component={ManageProducts} />
        <AdminRoute path="/admin/product/update/:productId" exact component={updateProduct} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
