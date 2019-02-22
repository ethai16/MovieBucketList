import React from 'react';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class MovieSearchYear extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            year: this.props.searched,
            error: null,
            isLoaded: false,
            items: []
        }
    }

    handleChange = event =>{
        this.setState({
            ...this.state,
            year: event.target.value
        }, ()=>{
            console.log(this.props.searched)
            this.props.updateYear(this.state.year);
        });
    }

    render() {
        var createSelect = () =>{
            let select = []
        
        for(let i = 2019; i >= 1900; i--){
            select.push(<MenuItem value={i.toString()}>{i}</MenuItem>)
        }
        return select
        }
        console.log(this.props.searched)


        return (
            <FormControl style={{ width: '15vw' }}>
                <InputLabel htmlFor="year" >Year</InputLabel>
                <Select
                    value={this.state.year}
                    onChange={this.handleChange}
                    inputProps={{
                        name: 'year',
                        id: 'year'
                    }}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {createSelect()}
                    {}
                </Select>
            </FormControl>
        );
    }
}




export default MovieSearchYear
