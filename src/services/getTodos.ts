import { LoaderFunctionArgs } from 'react-router-dom';

export const getTodos = async ({ request }: LoaderFunctionArgs<any>) => {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
		signal: request.signal,
	});

	return await response.json();
}