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
      					baby shower!
                <span>
                  in celebration of<br/> Michelle Atwell
                </span>
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
      				<div className={'content'}>
      					<b>Sunday August 11, 2019</b> | <b>2:30pm</b> <br/>
      					Berkshire Dilworth Apartments <br/>
      					1440 Harding Place Charlotte, 28204 <br/>
                <br/>
                  <b>where to park:</b>
                  <br/>
                  <p>
                    Please park at 920 Monticello Terrace Charlotte, NC 28204.
                    The event location is approximately one block from the event location.
                    There will be balloons and signs to serve as directions to Berkshire Dilworth Apartments. 
                    Please do not park in any diagonal spaces. Feel free to call with any questions!
                  </p>
      				</div>
              
			     </div>
          </div>
          <div className="section secondary">
          	<div className={'flex'}>
      				<h1>details</h1>
              <div className={'flex2'}>
                <div>
                  <h2>
                    Diaper Raffle
                  </h2>
                  <p>
                    Please bring a package of diapers if you wish to participate 
                    in our diaper raffle for the chance to win prizes.
                  </p>
                  <h2 style={{marginTop: '2rem'}}>
                    Registries 
                  </h2>
                  <p>
                    Michelle is registered at <a href={''} target={'_blank'}>Amazon</a> and <a href={''} target={'_blank'}>Target</a>.
                  </p>
                </div>
                <div>
                  <h2>
                    Books for Baby Gavin
                  </h2>
                  <p>
                    One small request that we hope isn't hard, please bring a book instead of a card.
                    Your book will be cherised whether well-loved or new. And each time it's read, Gavin will be
                    reminded of you. ❤
                  </p>
                </div>
              </div>
      			</div>
          </div>
          <div className="section secondary">
      			<div className={'flex center'}>
              <h1>
                RSVP 
              </h1>
      				<Form/>
      			</div>
          </div>
        </div>
      )
    }}
  />
)

export default FullpageWrapper;