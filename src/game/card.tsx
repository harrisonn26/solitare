import React from "react";
import { Suit, Value } from "./gameTypes";

export default class Card {
	constructor(
		private value: Value,
		private suit: Suit,
		private revealed: boolean
	) {
		this.suit = suit;
		this.value = value;
		this.revealed = revealed;
	}

	public reveal = () => {
		this.revealed = true;
	};

	//return SVG card according to value and suit
	public get = () => {
		if (!this.revealed) return cardBack;
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
							stroke={this.getColor()}
						/>
						<g transform="translate(20, 60)">
							<g transform="scale(0.1)">
								<svg
									version="1.1"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 50 55"
								>
									{this.getSymbol(false)}
								</svg>
							</g>
							<text
								textAnchor="middle"
								x="11"
								y="-10"
								fill={this.getColor()}
								fontSize="40"
								fontFamily="arial"
							>
								{this.value === 1
									? "A"
									: this.value < 11
									? this.value
									: this.value === 11
									? "J"
									: this.value === 12
									? "Q"
									: "K"}
							</text>
						</g>
						{this.getMiddle()}
						<g transform="translate(230, 290) rotate(180)">
							<g transform="scale(0.1)">
								<svg
									version="1.1"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 50 55"
								>
									{this.getSymbol(false)}
								</svg>
							</g>
							<text
								textAnchor="middle"
								x="11"
								y="-10"
								fill={this.getColor()}
								fontSize="40"
								fontFamily="arial"
							>
								{this.value === 1
									? "A"
									: this.value < 11
									? this.value
									: this.value === 11
									? "J"
									: this.value === 12
									? "Q"
									: "K"}
							</text>
						</g>
					</svg>
				</div>
			);
	};

	//return color of card elements according to suit
	private getColor = (): string => {
		if (this.suit === "diamond" || this.suit === "heart") {
			return "tomato";
		} else {
			return "#2b2b2b";
		}
	};

	//return card symbol according to suit
	private getSymbol = (large: boolean) => {
		switch (this.suit) {
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
						fill={this.getColor()}
					/>
				);
			case "club":
				return (
					<path
						d="M22,40A11,11 0 1 1 17.5,25A11,11 0 1 1 32.5,25A11,11 0 1 1 28,40
                  Q28,48 35,50L35,52L15,52L15,50Q22,48 22,40"
						fill={this.getColor()}
					/>
				);
			default:
				return;
		}
	};

	//return the middle pattern of the card according to value and suit
	getMiddle = () => {
		switch (this.value) {
			case 1:
				return (
					<g transform="translate(75, 107.5)">
						<g transform="scale(0.4)">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 55"
							>
								{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
									{this.getSymbol(true)}
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
							fill={this.getColor()}
						/>
						<text
							textAnchor="middle"
							x="125"
							y="210"
							fill={this.getColor()}
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
									{this.getSymbol(true)}
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
							fill={this.getColor()}
						/>
						<text
							textAnchor="middle"
							x="125"
							y="210"
							fill={this.getColor()}
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
									{this.getSymbol(true)}
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
							fill={this.getColor()}
						/>
						<text
							textAnchor="middle"
							x="125"
							y="210"
							fill={this.getColor()}
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
									{this.getSymbol(true)}
								</svg>
							</g>
						</g>
					</g>
				);
		}
	};
}
const cardBack = (
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
