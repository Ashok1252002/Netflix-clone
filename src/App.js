import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
// git remote add origin https://github.com/Ashok1252002/Netflix-clone.git

const App = () => {
	return (
		<div className="app">
			<Nav />
			<Banner />
			<Row
				title="Netflix Originals"
				fetchUrl={requests.fetchNetflixOrginals}
				isLargeRow
			/>
			<Row title="Trending Now" fetchUrl={requests.fetchTrending} />
			<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
			<Row
				title="Action Movies"
				fetchUrl={requests.fetchActionMovies}
			/>
			<Row
				title="Comedy Movies"
				fetchUrl={requests.fetchComedyMovies}
			/>
			<Row
				title="Romance Movies"
				fetchUrl={requests.fetchRomanceMovies}
			/>
			<Row
				title="Horror Movies"
				fetchUrl={requests.fetchHorrorMovies}
			/>
			<Row
				title="Documentaries"
				fetchUrl={requests.fetchDocumentaries}
			/>
		</div>
	);
};

export default App;
