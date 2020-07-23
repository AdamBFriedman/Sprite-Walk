import React, { Component } from 'react';
import './App.css';

export default class Scene extends Component {
	componentDidMount() {
		const canvas = document.getElementById('canvas');
		const ctx = canvas.getContext('2d');
		canvas.height = window.innerHeight;
		canvas.width = window.innerWidth;

		// load images
		const images = {};
		images.player = new Image();
		images.player.src = 'https://i.ibb.co/Ybk7y06/character.png';
		const characterActions = ['up', 'top right', 'right', 'down right', 'down'];
		const numberOfCharacters = 25;
		const characters = [];

		class Character {
			constructor() {}
			draw() {
				drawSprite(
					images.player,
					this.width * this.frameX,
					this.height * this.frameY,
					this.width,
					this.height,
					this.x,
					this.y,
					this.width * 1.5,
					this.height * 1.5
				);

				if (this.frameX < this.maxFrame) this.frameX++;
				else this.frameX = this.minFrame;
			}
		}
	}
	render() {
		return (
			<div>
				<div className="floor"></div>
				<canvas id="canvas"></canvas>
			</div>
		);
	}
}
