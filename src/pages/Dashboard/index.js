import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import Header from '../../components/navigation/Header';
import Sidebar from '../../components/navigation/Sidebar';
import '../Dashboard/style.css';
import UsersPage from './Pages/Users';
import DashboardPage from './Pages/Dashboard';
import KatalogsPage from './Pages/Katalogs';
import NewsPage from './Pages/News';
import OrderPage from './Pages/Order';
import PatnersPage from './Pages/Patners';
import ProdoctsPage from './Pages/Prodocts';
import SettingsPage from './Pages/Settings';
import AddNewPage from './Pages/Prodocts/Addnew';
import AddNewPag from './Pages/Patners/Addnew';
function Dashboard() {
	let { path } = useRouteMatch();
	return (
		<body className='body'>
			<Sidebar />
			{/* Bar Right.......... */}
			<div className='content'>
				<Header />
				<Switch>
					<Route
						exact
						path={`/dashboard/user`}
						component={UsersPage}
					/>
					<Route
						exact
						path={`/dashboard/dashboard`}
						component={DashboardPage}
					/>
					<Route
						exact
						path={`/dashboard/katalogs`}
						component={KatalogsPage}
					/>
					<Route
						exact
						path={`/dashboard/news`}
						component={NewsPage}
					/>
					<Route
						exact
						path={`/dashboard/order`}
						component={OrderPage}
					/>
					<Route
						exact
						path={`/dashboard/patners`}
						component={PatnersPage}
					/>
					<Route
						exact
						path={`/dashboard/prodocts`}
						component={ProdoctsPage}
					/>
					<Route
						exact
						path={`/dashboard/settings`}
						component={SettingsPage}
					/>
					<Route
						exact
						path='/dashboard/prodocts/addnew'
						component={AddNewPage}
					/>
					<Route
						exact
						path='/dashboard/patners/addnew'
						component={AddNewPag}
					/>
				</Switch>
			</div>
		</body>
	);
}

export default Dashboard;
