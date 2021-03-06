import React, { Component } from "react";
import Fetch from "./fetch";
import HexColor from "./hexColor";
import ColorHistory from "./colorHistory";

export default class Display extends Fetch {
	render() {
		const hex = this.state.color;
		return (
			<div>
				<div>
					{this.state.color == "" && (
						<>
							<h1>Random color generator</h1>
						</>
					)}

					{!(this.state.color == "") && (
						<>
							<HexColor hex={hex} />
						</>
					)}
				</div>

				<button onClick={this.handleButtonClick}>Shuffle Color</button>
				{!(this.state.color == "") && (
					<ColorHistory history={this.state.colorHistory} />
				)}
			</div>
		);
	}
}
