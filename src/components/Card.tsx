import { SiBandcamp, SiDiscord, SiKofi, SiYoutube } from "react-icons/si";

type CardProps = {
	title: string;
	desc?: string;
	destination: string;
	iconType: "bandcamp" | "discord" | "kofi" | "youtube";
};

export function Card({ title, desc, destination, iconType }: CardProps) {
	const cardSize = 80;
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
				{iconType && iconMap[iconType]}
			</div>
			<div className="flex flex-col justify-center min-w-0 px-3">
				<h4 className="font-semibold truncate">{title}</h4>
				{desc && <p className="text-xs truncate">{desc}</p>}
			</div>
		</a>
	);
}
