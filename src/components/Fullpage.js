import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Map from './Map';
import Form from './Form';

import './home.scss';
const fullpageOptions = {
  anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
  sectionsColor: ['white', 'white', 'white'],
  callbacks: ['onLeave', 'afterLoad'],
  navigation:  true,
  navigationTooltips: ['HOME', 'DIRECTIONS', 'REGISTRIES', 'RSVP'],
  showActiveTooltip: true,
}

const FullpageWrapper = fullpageProps => (
  <ReactFullpage
    {...fullpageOptions}
    render={({ state, fullpageApi }) => {
      console.log('render prop change', state) // eslint-disable-line no-console

      if (state.callback === 'onLeave') {
        if (state.direction === 'down') { 
          console.log('going down...' + state.origin.index)
        }
      }
      return (
        <div id="fullpage-wrapper">
          <div className="hero-wrapper section">
            <div className='overlay'></div>
          	<div className={'frosted'}>
      				<h1>
      					<span>
      						in celebration of<br/> Michelle Atwell
      					</span>
      					baby shower!
      				</h1>
      			</div>
          </div>
          <div className="section secondary map-section">
            <div className={'flex'}>
              <h1>
                when | where
              </h1>
              <div className="maps">
                <Map/>
              </div>
      				<p>
      					<b>Sunday August 11, 2019</b> | <b>2:30pm</b> <br/>
      					Berkshire Dilworth Apartments <br/>
      					1440 Harding Place Charlotte, 28204 <br/>
                <br/>
                  <b>Parking Instructions:</b>
                  <br/>
                  <div>
                    Please park at 920 Monticello Terrace Charlotte, NC 28204.
                    The event location is approximately one block from the event location.
                    There will be balloons and signs to serve as directions to Berkshire Dilworth Apartments. 
                    Please do not hesitate to call with any questions.
                  </div>
      				</p>
              
			     </div>
          </div>
          <div className="section secondary">
          	<div>
      				Registries
      			</div>
      			<div>
      				Special Requests
      			</div>
          </div>
          <div className="section secondary">
      			<div className={'flex'}>
      				<Form/>
      			</div>
          </div>
        </div>
      )
    }}
  />
)

export default FullpageWrapper;