import React from 'react';
import { render } from '@testing-library/react';

import Header from './Header';

test('Header component renders correctly', () => {
	// @ts-ignore
	const { getByText } = render(<Header />);

	// Проверяем, что текст "React Router Test App" отображается
	expect(getByText('React Router Test App')).toBeInTheDocument();

	// Проверяем, что есть ссылка "Home Page"
	expect(getByText('Home Page')).toBeInTheDocument();

	// Проверяем, что есть ссылка "Cart Page"
	expect(getByText('Cart Page')).toBeInTheDocument();
});