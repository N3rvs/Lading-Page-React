import React from "react";

export const Navbar = ()=>{
	return (
		<>
			<nav className="navbar navbar-expand-lg  navbar-dark bg-dark fixed-top ">
				<div className="container-fluid ">
					<a className="navbar-brand mx-5 text-warning" href="#">Guillermo Longueira</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse  justify-content-center" id="navbarNav">
						<ul className="navbar-nav ">
							<li className="nav-item">
								<a
									className="nav-link text-warning"
									aria-current="page"
									href="#">
									Home
								</a>
							</li>
							<li className="nav-item text-warning">
								<a className="nav-link" href="#">
									Features
								</a>
							</li>
							<li className="nav-item text-warning">
								<a className="nav-link" href="#">
									Pricing
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}