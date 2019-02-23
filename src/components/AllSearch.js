import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Movie from './Movie';
import './styles/AllSearch.css'

class AllSearch extends React.Component {
    constructor(props) {
        super(props);
        this.path = window.location.pathname
        
        this.state = {
            textFieldValue: '',
        }

    }

    componentDidMount(){
        var data = this.path.slice(8)
        console.log(data)
        // var pageNumberString = this.pageNumber.toString()
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=62c52cfa5f5e3486e1a7b739ca88c626&language=en-US&include_adult=false&${data}`)
        .then(res => res.json())
        .then(
            (result)=>{
                console.log(result.results)
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

    handleTextFieldChange = (e) =>{
        this.setState({
            textFieldValue: e.target.value
        });
    }

    search(){
        var searchLink = this.state.textFieldValue
        var url = `/search/page=1&query=${searchLink}`
        window.location.href = url
    }

    render() {
        var item;
        if (this.state.items){
        item = this.state.items.map(item => {
            return <Movie key = {item.id} movie = {item}/>
        })
    }else{
        item = ''
    }

        return (
            <div>
                <div>
                    <TextField value={this.state.textFieldValue} onChange={this.handleTextFieldChange} />
                    <Button onClick={() => this.search()}>Search</Button>
                </div>
                <div className = "middle">
                    {item}
                </div>
                <button onClick={()=>{
                   var pagenumber = parseInt(this.path.slice(13,14)) + 1;
                   window.location.href = this.path.slice(0,13)+ pagenumber + this.path.slice(14)
                }}>Next</button>
            </div>
        );
    }
}


export default AllSearch