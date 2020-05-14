import React, {Component} from 'react'
import ListItem from './ListItem'
import movieData from '../data/movies.json'

class List extends Component{
    constructor(){
        super()
        this.state= {
            movies: movieData        }
    }

    render(){
        const moviesMap = this.state.movies.map((e) => {
            return <ListItem key={e.id} movie={e}/>
        })
        return <div>{moviesMap}</div>
    }
}

export default List