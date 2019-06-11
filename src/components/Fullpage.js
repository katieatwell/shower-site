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
                    Michelle is registered at <a href={'https://www.amazon.com/baby-reg/michelle-edwards-adam-bost-september-2019-stanley/K8RE5FUPDVJ9'} target={'_blank'}>Amazon</a> and <a href={'https://www.target.com/gift-registry/gift/7eac8060f9e84e289f2e0d2851a40864'} target={'_blank'}>Target</a>.
                  </p>
                </div>
                <div>
                  <h2>
                    Building a library for Baby Gavin
                  </h2>
                  <p>
                    We request that instead of bringing a card, 
                    you bring a book for baby Gavin. 
                    A book is a great way to say everything you 
                    would say with a card and still give a lasting gift. ❤
                  </p>
                </div>
              </div>
      			</div>
          </div>
          <div className="section secondary">
      			<div className={'flex center'}>
              <h1>
                rsvp 
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