import React from 'react';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


class MovieSearchGenre extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            genre: this.props.searched,
            error: null,
            isLoaded: false,
            items: []
        }
    }


    handleChange = event => {
        this.setState({
            ...this.state,
            genre: event.target.value
        });
        console.log(this.state.genre)
        this.props.updateGenre(event.target.value);
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=62c52cfa5f5e3486e1a7b739ca88c626&language=en-US`)
        .then(res => res.json())
        .then(
            (result)=>{
                
                this.setState({
                    isLoaded: true,
                    items: result.genres
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
        var genresList;
        genresList = this.state.items.map(item => {
            return <MenuItem value={item.id.toString()}>{item.name}</MenuItem>
        })
        return (
            <FormControl style = {{width:'15vw'}}>
            <InputLabel htmlFor = "genre" >Genre</InputLabel>
            <Select
                value={this.state.genre}
                onChange={this.handleChange.bind(this)}
                inputProps={{
                    name: 'genre',
                    id: 'genre'
                }}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {genresList}
            </Select>
            {/* <button onClick = {()=>{console.log(this.state)}}>check</button> */}
        </FormControl>
        );
    }
}



export default MovieSearchGenre
