import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Header = lazy(() => import('./Header/Header'));
const Footer = lazy(() => import('./Footer'));

const RootLayout = () => {
  return (
		<div className="wrapper">
			<Suspense fallback={<div style={{padding: 15}}>Header Loading..</div>}>
				<Header/>
			</Suspense>
			<main>
				<Outlet/>
			</main>
			<Suspense fallback={<div>Footer Loading..</div>}>
				<Footer/>
			</Suspense>
		</div>
  );
}

export default RootLayout;