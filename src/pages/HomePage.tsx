import React from 'react';
import { useLoaderData } from 'react-router-dom';

interface IData {
	userId: number
	id: number
	title: string
	completed: boolean
}

export const HomePage = () => {
	const data = useLoaderData() as IData;

	return (
		<div>
			<h1>Home Page</h1>
			<div>{data.title}</div>
		</div>
	);
};