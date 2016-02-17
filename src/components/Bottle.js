import React, {Component} from 'react';

class Bottle extends Component{
	constructor(props){
		super(props);
	}

	render() {
		const {bottle} = this.props;

		return (
			<tr>
				<td>{bottle.href}</td>
				<td>{bottle.id}</td>
				<td>{bottle.name}</td>
				<td>{bottle.rating}</td>
				<td>{bottle.varietal}</td>
				<td>{bottle.vineyard}</td>
				<td>{bottle.vintage}</td>
			</tr>
		)
	}
};

export default Bottle;
