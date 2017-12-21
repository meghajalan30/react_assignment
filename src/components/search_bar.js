import React, {Component} from 'react';

class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state={
            term:''

        };
        props.onSearchTermChange(this.state.term);

        //this.onInputChange=this.onInputChange.bind(this); (updating to the bound function)(returns a new function ref)
       //this.onInputChange();
        // onChange{this.onInputChange};
         }
//control component
    onInputChange(term){  //component level but calling at class level
        console.log(term);
        this.setState({term:term});
        this.props.onSearchTermChange(term);
    }

    render(){
        return( //JSX(html inside js inside html)
            <div>
                <input value={this.state.term} onChange={(event)=>this.onInputChange(event.target.value)}/>

            </div>
        );
    }

}
export default SearchBar;