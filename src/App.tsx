import logo from "./assets/logo.png";
import footerWatermark from "./assets/ad-watermark.png";
import { SocialLink } from "./components/SocialLink";
import { Card } from "./components/Card";
import { Playlists } from "./components/Playlists";

function App() {
	return (
		<div className="bg-black/75 w-full">
			<div className="bg-dark bg-cover max-w-125 min-h-screen m-auto font-poppins px-5">
				<header className="flex flex-col items-center gap-6">
					<img src={logo} alt="Alessio Dicorato Logo" className="w-35 border-5 border-white rounded-full mt-5" />
					<h1 className="font-semibold text-white">Alessio Dicorato</h1>
					<h2 className="font-normal text-sm text-white text-center max-w-80">
						Hello! I'm an Italian pianist creating cozy piano renditions of your favourite Video game, Anime and Movie
						soundtracks for you to relax and chill to 🎹
					</h2>
					<div className="flex gap-4">
						<SocialLink destination="https://open.spotify.com/artist/3GiQj667WPXtnx32N8Btwe" iconType="spotify" />
						<SocialLink
							destination="https://music.apple.com/artist/alessio-dicorato/1621574211"
							iconType="appleMusic"
						/>
						<SocialLink destination="https://www.youtube.com/@AlessioDicorato?sub_confirmation=1" iconType="youtube" />
						<SocialLink destination="https://www.instagram.com/alessio.dicorato" iconType="instagram" />
						<SocialLink destination="https://www.twitch.tv/alessiodmusic" iconType="twitch" />
						<SocialLink destination="https://discord.gg/UcDTeaRmnQ" iconType="discord" />
					</div>
				</header>
				<main className="mt-10 flex flex-col gap-10">
					{/* Support Section */}
					<div className="flex flex-col items-center gap-4">
						<h3 className="font-semibold text-lg text-white">Support Me 💖</h3>
						<Card title="Bandcamp" destination="https://alessiodicorato.bandcamp.com/" iconType="bandcamp"></Card>
						<Card
							title="Sheet Music on Discord"
							desc="For free!"
							destination="https://discord.gg/UcDTeaRmnQ"
							iconType="discord"
						></Card>
						<Card title="Donate on Ko-fi" destination="https://ko-fi.com/alessiodicorato" iconType="kofi"></Card>
						<Card
							title="Become a YT Supporter"
							desc="Support my channel with just $0.99!"
							destination="https://www.youtube.com/@AlessioDicorato/join"
							iconType="youtube"
						></Card>
					</div>
					{/* Playlists Section */}
					<div className="flex flex-col items-center gap-4">
						<h3 className="font-semibold text-lg text-white">My Spotify Playlists 🎧</h3>
						<Playlists />
					</div>
				</main>
				<footer className="mt-10 flex justify-center">
					<img src={footerWatermark} alt="Footer AD Watermark" className="w-30" />
				</footer>
			</div>
		</div>
	);
}

export default App;
