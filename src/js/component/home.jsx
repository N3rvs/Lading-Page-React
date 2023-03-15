import React from "react";
import { Navbar } from "./navbar.jsx";
import { Jumbotron } from "./jumbotron.jsx"
import { Card } from "./card.jsx"
import { Footer } from "./footer.jsx"


//create your first component
export const Home = () => {
	return (
		<>
		<Navbar />
		<div className="container">
			<Jumbotron />
				<div className="row">
				<Card imageUrl="https://fastly.picsum.photos/id/184/500/325.jpg?hmac=rXFjFCCwU-x6AcZI39mznVS2VW7irJmtxvKmLhnV27E" cardTitle="Card 1" cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." buttonUrl="https://google.com" buttonLabel="Go to Google" />
				<Card imageUrl="https://fastly.picsum.photos/id/452/500/325.jpg?hmac=VNJh0nP2FqSn2RHxAVnZqoqpFhCZatWHkQu11X0bgCA" cardTitle="Card 2" cardText="Sed ut perspiciatis unde omnis iste natus error sit voluptatem." buttonUrl="https://www.wikipedia.org/" buttonLabel="Go to Wikipedia" />
				<Card imageUrl="https://fastly.picsum.photos/id/880/500/325.jpg?hmac=pGjBF0lsVyQmk8OxS4YLWQHwjTRBE3EhtKrDUa5jtRc" cardTitle="Card 3" cardText="Nemo enim ipsam voluptatem quia voluptas sit aspernatur." buttonUrl="https://4geeks.com/" buttonLabel="Go to 4Geeks" />
				<Card imageUrl="https://fastly.picsum.photos/id/642/500/325.jpg?hmac=2Wvny8MXaGnSVkKjpEz-0cQ21lEkdCsl8DAV8H0ynhw" cardTitle="Card 4" cardText="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit." buttonUrl="https://github.com/" buttonLabel="Go to GitHub" />
				</div>
			</div>
		<Footer />
		</>
	)
};

  