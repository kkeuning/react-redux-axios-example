import React, {Component} from 'react';
import {connect} from 'react-redux';
import Bottle from './Bottle';

@connect(state => ({data: state.example.data}))
class Bottles extends Component{
	constructor(props){
		super(props);
	}

	render() {

		const {data} = this.props;

		return (
			<div className='container'>
				<table className='table table-bordered table-striped'>
					<thead>
						<tr>
							<th>href</th>
							<th>id</th>
							<th>name</th>
							<th>rating</th>
							<th>varietal</th>
							<th>vineyard</th>
							<th>vintage</th>
						</tr>
					</thead>
					<tbody>
					{data.map(bottle => {
						return (
							<Bottle key={bottle.id} bottle={bottle} />
						)
					})}
					</tbody>
				</table>
			</div>
		)
	}
};

export default Bottles;
