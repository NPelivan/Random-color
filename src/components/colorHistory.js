import React, { Component } from "react";
import "./style.css";

export default class ColorHistory extends Component {
	render() {
		return (
			<>
				<h2>Previous colors:</h2>
				<div className="previous-colors">
					{this.props.history.reverse().map((element) => {
						let hex = "#" + element;
						const color = {
							background: hex,
						};
						return (
							<div className="bg-color previous" style={color}>
								<p>#{element}</p>
							</div>
						);
					})}
				</div>
			</>
		);
	}
}
