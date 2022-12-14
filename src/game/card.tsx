import React from "react";
import { Card, Suit, Value } from "./gameTypes";

//return SVG card according to value and suit
export function getCard(card: Card) {
	if (!card.revealed) return cardBack;
	else
		return (
			<div style={{ cursor: "pointer" }}>
				<svg
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 250 350"
				>
					<rect width="250" height="350" rx="20" ry="20" fill={"white"} />
					<rect
						x="8"
						y="8"
						width="234"
						height="334"
						rx="12"
						ry="12"
						fill="none"
						strokeWidth="1%"
						stroke={getColor(card.suit)}
					/>
					<g transform="translate(20, 60)">
						<g transform="scale(0.1)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, false)}
							</svg>
						</g>
						<text
							textAnchor="middle"
							x="11"
							y="-10"
							fill={getColor(card.suit)}
							fontSize="40"
							fontFamily="arial"
						>
							{card.value === 1
								? "A"
								: card.value < 11
								? card.value
								: card.value === 11
								? "J"
								: card.value === 12
								? "Q"
								: "K"}
						</text>
					</g>
					{getMiddle(card)}
					<g transform="translate(230, 290) rotate(180)">
						<g transform="scale(0.1)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, false)}
							</svg>
						</g>
						<text
							textAnchor="middle"
							x="11"
							y="-10"
							fill={getColor(card.suit)}
							fontSize="40"
							fontFamily="arial"
						>
							{card.value === 1
								? "A"
								: card.value < 11
								? card.value
								: card.value === 11
								? "J"
								: card.value === 12
								? "Q"
								: "K"}
						</text>
					</g>
				</svg>
			</div>
		);
}

//return color of card elements according to suit
const getColor = (suit: Suit): string => {
	if (suit === "diamond" || suit === "heart") {
		return "tomato";
	} else {
		return "#2b2b2b";
	}
};

//return card symbol according to suit
const getSymbol = (suit: Suit, large: boolean) => {
	switch (suit) {
		case "heart":
			return (
				<path
					d="M1,16 Q0,25 9,35 L25,53 L41,35Q50,25 49,16Q47,3 35,3Q28,3 25,13Q22,3 15,3
                Q3,3 1,16"
					fill="tomato"
				/>
			);
		case "diamond":
			return <polygon points="25,0 45,27.5 25,55 5, 27.5" fill="tomato" />;
		case "spade":
			return (
				<path
					d="M25,5L45,32A9,9 0 1 1 28,40Q28,48 35,50L35,52L15,52 L15,50Q22,48 22,40
                  A9,9 0 1 1 5,32Z"
					fill={getColor(suit)}
				/>
			);
		case "club":
			return (
				<path
					d="M22,40A11,11 0 1 1 17.5,25A11,11 0 1 1 32.5,25A11,11 0 1 1 28,40
                  Q28,48 35,50L35,52L15,52L15,50Q22,48 22,40"
					fill={getColor(suit)}
				/>
			);
		default:
			return;
	}
};

//return the middle pattern of the card according to value and suit
const getMiddle = (card: Card) => {
	switch (card.value) {
		case 1:
			return (
				<g transform="translate(75, 107.5)">
					<g transform="scale(0.4)">
						<svg
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 50 55"
						>
							{getSymbol(card.suit, true)}
						</svg>
					</g>
				</g>
			);
		case 2:
			return (
				<g>
					<g transform="translate(100, 47.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(100, 247.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
				</g>
			);
		case 3:
			return (
				<g>
					<g transform="translate(100, 47.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(100, 147.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(100, 247.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
				</g>
			);
		case 4:
			return (
				<g>
					<g transform="translate(60, 47.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(140, 247.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(140, 47.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(60, 247.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
				</g>
			);
		case 5:
			return (
				<g>
					<g transform="translate(60, 47.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(140, 247.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(140, 47.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(60, 247.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(100, 147.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
				</g>
			);
		case 6:
			return (
				<g>
					<g transform="translate(60, 47.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(60, 147.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(60, 247.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(140, 47.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(140, 147.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(140, 247.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
				</g>
			);
		case 7:
			return (
				<g>
					<g transform="translate(60, 47.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(60, 147.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(60, 247.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(140, 47.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(140, 147.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(140, 247.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(100, 97.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
				</g>
			);
		case 8:
			return (
				<g>
					<g transform="translate(60, 47.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(60, 147.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(60, 247.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(140, 47.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(140, 147.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(140, 247.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(100, 97.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(100, 197.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
				</g>
			);
		case 9:
			return (
				<g>
					<g transform="translate(60, 37.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(140, 37.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(140, 109.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(60, 109.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(60, 185.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(140, 185.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(60, 257.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(140, 257.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(100, 147.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
				</g>
			);
		case 10:
			return (
				<g>
					<g transform="translate(60, 37.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(140, 37.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(140, 109.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(60, 109.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(60, 185.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(140, 185.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(60, 257.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(140, 257.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(100, 72.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
					<g transform="translate(100, 222.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
				</g>
			);
		case 11:
			return (
				<g>
					<polygon
						points="100,115 150, 115 155, 90 140, 100 125, 85 110,100 95, 90"
						fill={getColor(card.suit)}
					/>
					<text
						textAnchor="middle"
						x="125"
						y="210"
						fill={getColor(card.suit)}
						fontSize="120"
						fontFamily="arial"
					>
						J
					</text>
					<g transform="translate(100, 208.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
				</g>
			);
		case 12:
			return (
				<g>
					<polygon
						points="100,115 150, 115 155, 90 140, 100 125, 85 110,100 95, 90"
						fill={getColor(card.suit)}
					/>
					<text
						textAnchor="middle"
						x="125"
						y="210"
						fill={getColor(card.suit)}
						fontSize="120"
						fontFamily="arial"
					>
						Q
					</text>
					<g transform="translate(100, 208.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
				</g>
			);
		case 13:
			return (
				<g>
					<polygon
						points="100,115 150, 115 155, 90 140, 100 125, 85 110,100 95, 90"
						fill={getColor(card.suit)}
					/>
					<text
						textAnchor="middle"
						x="125"
						y="210"
						fill={getColor(card.suit)}
						fontSize="120"
						fontFamily="arial"
					>
						K
					</text>
					<g transform="translate(100, 208.5)">
						<g transform="scale(0.2)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{getSymbol(card.suit, true)}
							</svg>
						</g>
					</g>
				</g>
			);
	}
};

export const cardBack = (
	<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 350">
		<rect width="250" height="350" rx="20" ry="20" fill="#005a9b" />
		<path
			d="M0,330 L0,200 Q50,204 80, 220 Q150,250 250,180 L250, 330 Q250,350 230,350 L20,350 Q 0,350 0,330"
			fill="#00375e"
		/>
		<path
			d="M60, 350 Q90, 260 140, 200 Q190, 145 200, 0 L230,0 Q250, 0 250,20 L250,330 Q250,350 230,350"
			fill="white"
			opacity="0.2"
		/>
		<rect
			x="8"
			y="8"
			width="234"
			height="334"
			rx="12"
			ry="12"
			fill="none"
			strokeWidth="1%"
			stroke="#2a2a2a"
		/>
	</svg>
);
export const emptyDeck = (
	<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 350">
		<rect
			width="250"
			height="350"
			rx="20"
			ry="20"
			fill="none"
			strokeWidth="1%"
			stroke={"#FFFFFF"}
		/>
		<circle
			cx="125"
			cy="175"
			r="50"
			fill="none"
			strokeWidth="1%"
			stroke={"#FFFFFF"}
		/>
	</svg>
);
