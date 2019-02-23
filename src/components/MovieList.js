import React from 'react';
import Movie from './Movie'
import './styles/MovieList.css';


class MovieList extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            link: ''
        }
        this.path = window.location.pathname
    }

    componentDidMount(){
        var data = this.path.slice(8)
        console.log(data)
        // var pageNumberString = this.pageNumber.toString()
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=62c52cfa5f5e3486e1a7b739ca88c626&language=en-US&${data}`)
        .then(res => res.json())
        .then(
            (result)=>{
                console.log(result)
                this.setState({
                    isLoaded: true,
                    items: result.results
                })
            },
            (error) => {
                this.setState({
                    isLoaded:true,
                    error
                });
            }
        )
    }

    render() {
        var item;
        item = this.state.items.map(item => {
            return <Movie key = {item.id} movie = {item}/>
        })
        return (
            <div className = 'margin'>
                <div className = 'displayMovies'>
                    {item}
                </div>
                
                <button onClick={()=>{
                   var pagenumber = parseInt(this.path.slice(13,14)) + 1
                   window.location.href = this.path.slice(0,13)+ pagenumber + this.path.slice(14)
                }}>Next</button>
            </div>
        );
    }
}



export default MovieList
