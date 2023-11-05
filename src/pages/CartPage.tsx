import React from 'react';
import { useFetchers, useLoaderData } from 'react-router-dom';
import { ICartItems } from '../services/getCartItems';

export const CartPage = () => {
	const fetchers = useFetchers();
	const data = useLoaderData() as ICartItems;

	console.log({fetchers});

	return (
		<div>
			<h1>This is Cart Page</h1>
			{
				data.items.map(({id, title, description}) => {
					return (
						<div key={id} data-id={id}>
							<h4>{title}</h4>
							<div>{description}</div>
						</div>
					)
				})
			}
		</div>
	);
};