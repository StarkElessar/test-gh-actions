import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './header.module.scss';

type NavLinkRenderProps = {
	isActive: boolean;
	isPending: boolean;
	isTransitioning: boolean;
};

const Header = () => {
	const setNavLinkClasses = ({isActive}: NavLinkRenderProps) => {
		return isActive ? `${classes.link} ${classes.link_active}` : classes.link
	};

	return (
		<div className={classes.header}>
			<span>React Router Test App</span>
			<nav className={classes.menu}>
				<ul>
					<li>
						<NavLink to={'/'} className={setNavLinkClasses}>Home Page</NavLink>
					</li>
					<li>
						<NavLink to={'/cart'} className={setNavLinkClasses}>Cart Page</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Header;