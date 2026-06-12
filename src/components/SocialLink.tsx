import { SiSpotify, SiApplemusic, SiYoutube, SiInstagram, SiTwitch, SiDiscord } from "react-icons/si";

type SocialLinkProps = {
	destination: string;
	iconType: "spotify" | "appleMusic" | "youtube" | "instagram" | "twitch" | "discord";
};

export function SocialLink({ destination, iconType }: SocialLinkProps) {
	const iconColor = "#fff";
	const iconSize = 28;
	const iconMap = {
		spotify: <SiSpotify color={iconColor} size={iconSize} />,
		appleMusic: <SiApplemusic color={iconColor} size={iconSize} />,
		youtube: <SiYoutube color={iconColor} size={iconSize} />,
		instagram: <SiInstagram color={iconColor} size={iconSize} />,
		twitch: <SiTwitch color={iconColor} size={iconSize} />,
		discord: <SiDiscord color={iconColor} size={iconSize} />,
	};

	return (
		<a href={destination} target="_blank">
			{iconType && iconMap[iconType]}
		</a>
	);
}
