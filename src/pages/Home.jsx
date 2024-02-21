import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
      <Main/>
      <Row RowId='1' title='Popular' fetchURL={requests.requestPopular}/>
      <Row RowId='2' title='Trending' fetchURL={requests.requestTrending}/>
      <Row RowId='3' title='Recommendation' fetchURL={requests.requestRecommendation}/>
    </>
  )
}

export default Home