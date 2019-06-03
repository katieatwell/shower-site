import React from 'react';

import './home.scss';
export default class Home extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={'hero-wrapper'}>
				<div className={'frosted'}>
					<h1>baby shower!
						<span>
							In honor of
							<br/>Michelle Atwell
						</span>
					</h1>
					<p>
						Sunday August 11, 2019 | 2:30pm<br/>
						Berkshire Dilworth Apartments <br/>
						1440 Harding Place Charlotte, 28204 <br/>
					</p>
					<div className={'buttons'}>
						<button>
							RSVP
						</button>
						<button>
							Details
						</button>
					</div>
				</div>
			</div>
		);
	}
}
