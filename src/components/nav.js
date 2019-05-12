import React from 'react';

const nav = (props) => {
  return (
    <div style={{position: `fixed`, height: `100vh`, zIndex: `1000`, right: `4vw`, display: `flex`, flexFlow: `column wrap`, justifyContent: `center`, alignItems: `center`}}>
    	<div style={{margin: `4px auto`}}>WHEN</div>
    	<div style={{margin: `4px auto`}}>WHERE</div>
    	<div style={{margin: `4px auto`}}>DETAILS</div>
    	<div style={{margin: `4px auto`}}>RSVP</div>
    </div>
  )
}

export default nav;