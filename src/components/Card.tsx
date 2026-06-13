import { SiBandcamp, SiDiscord, SiKofi, SiYoutube } from "react-icons/si";

type CardProps = {
	cardType: "default" | "release";
	title: string;
	desc?: string;
	destination: string;
	iconType?: "bandcamp" | "discord" | "kofi" | "youtube";
};

export function Card({ cardType, title, desc, destination, iconType }: CardProps) {
	const cardSize = cardType === "default" ? 80 : 120;
	const iconColor = "#373e48";
	const iconSize = cardSize * 0.5;
	const iconMap = {
		bandcamp: <SiBandcamp color={iconColor} size={iconSize} />,
		discord: <SiDiscord color={iconColor} size={iconSize} />,
		kofi: <SiKofi color={iconColor} size={iconSize} />,
		youtube: <SiYoutube color={iconColor} size={iconSize} />,
	};

	return (
		<a
			href={destination}
			target="_blank"
			style={{ height: cardSize }}
			className={`flex rounded-xl w-full shadow-lg shadow-black/30 bg-card text-dark-grey`}
		>
			<div className={`flex items-center justify-center rounded-s-xl shrink-0 bg-white`} style={{ width: cardSize }}>
				{cardType === "default" && iconType && iconMap[iconType]}
				{cardType === "release" && (
					<img src="/src/assets/latest-release.jpg" alt={`${title} Artwork`} className="rounded-s-xl" />
				)}
			</div>
			<div className="flex flex-col justify-center min-w-0 px-3">
				<h4 className="font-semibold">{title}</h4>
				{desc && <p className="text-xs">{desc}</p>}
			</div>
		</a>
	);
}
