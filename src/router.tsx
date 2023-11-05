import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { getTodos } from './services/getTodos';

const RootLayout = React.lazy(() => import('./components/RootLayout'));
const NoMatchPage = React.lazy(() => import('./pages/NoMatchPage'));

export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout/>,
		children: [
			{
				index: true,
				async lazy() {
					const { HomePage } = await import('./pages/HomePage');
					return {
						Component: HomePage,
						loader: getTodos
					};
				}
			},
			{
				path: '/cart',
				lazy: async () => {
					const { CartPage } = await import('./pages/CartPage');
					const { getCartItems } = await import('./services/getCartItems');

					return {
						Component: CartPage,
						loader: getCartItems,
					};
				},

			}
		]
	},
	{
		path: '*',
		element: <NoMatchPage/>
	}
]);