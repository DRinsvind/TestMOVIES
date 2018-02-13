import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {changeFilter,searchFunction} from '../AC'

class Filters extends Component{
    state={
        search:''
    }
    useFilter = (type) => (ev)=>{
        ev.preventDefault()
        if(type!=='time'){
            this.props.changeFilter(this.props.content,type)
        }else{
            this.props.changeFilter(this.props.content,{now:Date.now()})
        }

    }
    handleChangeSearch = ev =>{
        this.props.searchFunction(content,ev.target.value)
        this.setState({
            search:ev.target.value
        })
    }
    getClass = type =>{

        return type===this.props.filter?'filter-list__filter active':this.props.filter.now&&type==='time'?'filter-list__filter active':'filter-list__filter'
    }
    getSearchContent =()=>{
        if(this.props.search.length){
            const searchFiltered = this.props.search.filter((item,id)=>id<5)
            const searchItems = this.state.search?searchFiltered.map(item=>{
                    return(
                        <div className="search-result-item" key={'search'+item.id}>
                            <Link className="search-result-link" to={`/${this.props.content}/single/${item.id}`}>{item.name}</Link>
                        </div>
                        )

            }):''
            return(
                <div className="search-result">
                    {searchItems}
                </div>
            )
        }else{
            return <div className="search-result"/>
        }
    }
    render(){
        return(
            <div className="col-12 col-lg-3">
                <div className="filter-list">
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-12">
                            <a href="#" className={this.getClass('popularity')} onClick={this.useFilter('popularity')}>Популярные</a>
                        </div>
                        <div className="col-12 col-md-4 col-lg-12">
                            <a href="#" className={this.getClass('vote_average')} onClick={this.useFilter('vote_average')}>С наивысшим рейтингом</a>
                        </div>
                        <div className="col-12 col-md-4 col-lg-12">
                            <a href="#" className={this.getClass('time')} onClick={this.useFilter('time')}>Сейчас в прокате</a>
                        </div>
                        <div className="col-12">
                            <div className="search-block">
                                <label htmlFor="search_input">Поиск</label>
                                <input type="text" id="search_input" value={this.state.search} onChange={this.handleChangeSearch}/>
                                {this.getSearchContent()}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect((state,ownProps)=>({
    filter:state[ownProps.content].filter,
    search:state.search
}),{changeFilter,searchFunction})(Filters)