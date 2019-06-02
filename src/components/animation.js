import { render } from 'react-dom'
import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import Blobs from './Blobs';
import './wrapper.scss'
import './map.scss'

const sections = [
  ({ style }) => <animated.div style={{ ...style }}>
	<div className={'wrapper'} style={{ position: `relative` }}>
      <h1 style={{opacity: .8}}>Oh <br/> boy!</h1>
      <Blobs/>
      <div className={"right"}>
        <h2>
          Please join us 
          in showering <br/>
          <span>Michelle Edwards</span>
        </h2>
      </div>
    </div>
  	</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: '#3C5947', justifyContent: `flex-start`, overflow: `hidden` }}>
  	<div className="mapouter">
  		<div class="gmap_canvas">
  			<iframe width="800" height="1000" id="gmap_canvas" src="https://maps.google.com/maps?q=1351%20E%20Morehead%20St%2C%20Charlotte%2C%20NC%2028204&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
  			</iframe>
  		</div>
  	</div>
  	<div className={"flex"} style={{maxWidth: `48%`}}>
  		<h2>Where</h2>
  	 	<a href={"https://maps.google.com/maps?q=1351%20E%20Morehead%20St%2C%20Charlotte%2C%20NC%2028204&t=&z=11&ie=UTF8&iwloc=&output=embed"}>Berkshire Dilworth Apartments</a>
  		<p>'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use </p> 
  		<p>	Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
  		<p>	Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
  	</div>
  </animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: '#ECF7FF' }}>C</animated.div>,
]

export default function App() {
  const [index, set] = useState(0)
  const onClick = useCallback(() => set(state => (state + 1) % 3), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(0,-50%,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0%,0)' },
    leave: { opacity: 0, transform: 'translate3d(0,100%,0)' },
  })
  return (
    <div className="simple-trans-main" onClick={onClick}>
      {transitions.map(({ item, props, key }) => {
        const Page = sections[item]
        return <Page key={key} style={props} />
      })}
    </div>
  )
}