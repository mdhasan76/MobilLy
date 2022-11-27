import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../shared/Header';

const DashboardLay = () => {
    return (
        <section>
            <Header />
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet />
                    <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to='/dashboard/allseller'>All Sellers</Link></li>
                        <li><Link to='/dashboard/allbuyer'>All Buyers</Link></li>
                        <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                        <li><Link to='/dashboard/myproducts'>My Products</Link></li>
                        <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
                        <li><Link to='/dashboard/reporteditems'>Reported Items</Link></li>
                    </ul>

                </div>
            </div>
        </section>
    );
};

export default DashboardLay;