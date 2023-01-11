import React from 'react'
import Container from '../components/Container'
import SearchBar from '../components/SearchBar'
import Grid from '../components/Grid'

export default function Home() {
  return (
    <Container>
        <h1>MARVEL</h1>
        <SearchBar />
        <Grid>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </Grid>
    </Container>
  )
}
