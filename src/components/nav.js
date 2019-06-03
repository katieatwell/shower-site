import React from 'react';
import './home.scss';
const nav = (props) => {
  return (
    <div style={{position: `fixed`, 
    	height: `100vh`, 
    	zIndex: `1000`, 
    	right: `4vw`, 
    	display: `flex`, 
    	flexFlow: `column wrap`, 
    	justifyContent: `center`, 
    	alignItems: `center`,
    	color: `white`,
    	fontWeight: `bold`}}>
    	<div style={{margin: `12px auto`, fontSize: `24px`}}>
    		<a style={{fontFamily: `Montserrat, sans-serif`, fontWeight: `900`, textDecoration: `none`, color: `white`}} href={'/'}>DIRECTIONS</a>
    	</div>
    	<div style={{margin: `12px auto`, fontSize: `24px`}}>
    		<a style={{fontFamily: `Montserrat, sans-serif`, fontWeight: `900`, textDecoration: `none`, color: `white`}} href={'/'}>DETAILS</a>
    	</div>
    	<div style={{margin: `12px auto`, fontSize: `24px`}}>
    		<a style={{fontFamily: `Montserrat, sans-serif`, fontWeight: `900`, textDecoration: `none`, color: `white`}} href={'/'}>REGISTRIES</a>
    	</div>
    	<div style={{margin: `12px auto`, fontSize: `24px`}}>
    		<a style={{fontFamily: `Montserrat, sans-serif`, fontWeight: `900`, textDecoration: `none` , color:`white`}} href={'/'}>RSVP</a>
    	</div>
    </div>
  )
}

export default nav;