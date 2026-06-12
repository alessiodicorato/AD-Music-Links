type Playlist = {
	value: string;
	imageUrl: string;
	alt: string;
	destination: string;
};

export function Playlists() {
	const playlists: Playlist[] = [
		{
			value: "nintendo",
			imageUrl: "src/assets/playlists/nintendo.png",
			alt: "Nintendo Piano & Chill",
			destination: "https://open.spotify.com/playlist/4q1i96pZwI4NIESICQCINC?si=2477bfb432b3400d",
		},
		{
			value: "videogame",
			imageUrl: "src/assets/playlists/videogame.png",
			alt: "Video Game Piano & Chill",
			destination: "https://open.spotify.com/playlist/6pRe66vaPOsN5KyBzaQyYV?si=ec31767dd6a945c2",
		},
		{
			value: "pmd",
			imageUrl: "src/assets/playlists/pmd.png",
			alt: "Pokémon Mystery Dungeon - Piano Music",
			destination: "https://open.spotify.com/playlist/2xjOit0iD2sAObgQ8MHAEG?si=f72ed68dfd70474d",
		},
		{
			value: "lullabies",
			imageUrl: "src/assets/playlists/lullabies.png",
			alt: "video game lullabies to fall asleep to 💤",
			destination: "https://open.spotify.com/playlist/2lvGK7f9ltIVIWGWgrv4qu?si=3a52a986bd9b4c4c",
		},
	];

	return (
		<div className="grid grid-cols-2 gap-4">
			{playlists.map((p: Playlist) => (
				<a href={p.destination} target="_blank">
					<img src={p.imageUrl} alt={p.alt} className="rounded-xl shadow-lg shadow-black/30" />
				</a>
			))}
		</div>
	);
}
