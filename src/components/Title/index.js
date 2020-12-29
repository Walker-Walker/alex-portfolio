import React from 'react'
import { Helmet } from 'react-helmet'

const TITLE = 'ALEX WALKER'

function Title (){
  
    return (
      <>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
      </>
    )

}

export default Title;