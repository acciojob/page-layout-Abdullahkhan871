import React from 'react'

const PageLayout = (props) => {
  return (
    <>
      <header><h1>{props.Header}</h1></header>
      <p>{props.child}</p>
      <footer><h4>{props.footer}</h4></footer>
    </>
  )
}

export default PageLayout