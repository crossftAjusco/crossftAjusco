import React from 'react'

export const CatchLink = ({ media }) => {
    //console.log(media)
  return (
    <a target="_blanck" href={ media }>{ media }</a>
    /*<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/5CikEry4J0Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>*/
  )
}


