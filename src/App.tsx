import footerWatermark from "./assets/ad-watermark.png";

function App() {
	return (
		<div className="bg-black/75 w-full">
			<div className="bg-dark bg-cover max-w-125 min-h-screen m-auto font-poppins">
				<header></header>
				<main></main>
				<footer className="flex justify-center">
					<img src={footerWatermark} alt="Footer AD Watermark" className="w-30" />
				</footer>
			</div>
		</div>
	);
}

export default App;
