import React, { Component } from "react";
import "./style.css";

export default class HexColor extends Component {
	render() {
		const { hex } = this.props;
		const color = {
			background: "#" + hex,
		};

		return (
			<div>
				<h2>Hex</h2>
				<div className="bg-color" style={color}></div>
				<div>
					<span>#{this.props.hex}</span>
				</div>
			</div>
		);
	}
}
