import React from 'react';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


class MovieSearchSort extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            sort: '',
            error: null,
            isLoaded: false,
            items: []
        }
    }

    handleChange = event =>{
        this.setState({sort: event.target.value});
    }

    render() {
        return (
            <FormControl style = {{width:'15vw'}}>
            <InputLabel htmlfor = "genre" >Genre</InputLabel>
            <Select
                value={this.state.sort}
                onChange={this.handleChange}
                inputProps={{
                    name: 'sort',
                    id: 'sort'
                }}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={item.id}>{item.name}</MenuItem>
                <MenuItem value={item.id}>{item.name}</MenuItem>
                <MenuItem value={item.id}>{item.name}</MenuItem>
            </Select>
            </FormControl>
        );
    }
}




export default MovieSearchSort
