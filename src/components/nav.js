import React from 'react';

const nav = (props) => {
  return (
    <div style={{position: `fixed`, height: `100vh`, zIndex: `1000`, right: `4vw`, display: `flex`, flexFlow: `column wrap`, justifyContent: `center`, alignItems: `center`}}>
    	<div style={{margin: `12px auto`, fontSize: `20px`}}>WHEN</div>
    	<div style={{margin: `12px auto`, fontSize: `20px`}}>WHERE</div>
    	<div style={{margin: `12px auto`, fontSize: `20px`}}>DETAILS</div>
    	<div style={{margin: `12px auto`, fontSize: `20px`}}>RSVP</div>
    </div>
  )
}

export default nav;