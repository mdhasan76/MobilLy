import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../shared/AuthProvider';
import Header from '../shared/Header';
import useAdmin from '../shared/hooks/useAdmin';
import useSeller from '../shared/hooks/useSeller';

const DashboardLay = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);

    return (
        <section>
            <Header />
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/allseller'>All Sellers</Link></li>
                                <li><Link to='/dashboard/allbuyer'>All Buyers</Link></li>
                                <li><Link to='/dashboard/reporteditems'>Reported Items</Link></li></>
                        }
                        {
                            isSeller && <>
                                <li><Link to={`/dashboard/myproducts`}>My Products</Link></li>
                                <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </section>
    );
};

export default DashboardLay;