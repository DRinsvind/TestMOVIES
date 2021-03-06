import React,{Component} from 'react'
import {connect} from 'react-redux'
import {checkAndLoadItemsForPage} from '../AC'
import {Link} from 'react-router-dom'
import Loader from './Loader'
import Item from './Item'
class ItemList extends Component{

    componentDidMount(){

        const{checkAndLoadItemsForPage,content,page,offlineFail}=this.props
        checkAndLoadItemsForPage(content,page)
    }

    componentDidUpdate(){
        const{checkAndLoadItemsForPage,content,page,offlineFail}=this.props
        if(!offlineFail)checkAndLoadItemsForPage(content,page)
    }
    reloadPage =()=>{
        const{checkAndLoadItemsForPage,content,page}=this.props
        checkAndLoadItemsForPage(content,page)
    }
    getPagination = ()=>{
        let previous=<div className="col-4"></div>,next=<div className="col-4"></div>
        if(+this.props.page!==1){
            previous=<div className="col-4"><Link className='pagination-list__link' to={`/${this.props.content}/${+this.props.page-1}`}>Previous page</Link></div>
        }
        if(+this.props.page!==this.props.total_pages){
            next=<div className="col-4"><Link className='pagination-list__link' to={`/${this.props.content}/${+this.props.page+1}`}>Next page</Link></div>
        }
        return(
            <div className="row pagination-list align-items-center">
                {previous}
                <div className="col-4"><h2 className="pagination-list__heading">Current page:{this.props.page}</h2></div>
                {next}
            </div>
        )
    }
    getContent =()=>{
        const {items} = this.props
        if(items){
            const contentItems = items.map((item)=>(
                <div className="col-12 col-sm-6 col-md-4 " key={item.id}>
                   <Item item={item} content={this.props.content}/>
                </div>
            ))

            return(
                <div className="row">
                    {contentItems}
                </div>
            )
        }
    }
    render(){
        if(this.props.offlineFail){
            return (
                <div className="col-12 col-lg-9">
                    <h2>SORRY, THIS PAGE IS NOT AVAILABLE FOR OFFLINE VERSION</h2>
                    <button onClick={this.reloadPage}>reload</button>
                </div>
            )
        }
        if(this.props.loading){
            return <Loader/>
        }
        return(

            <div className="col-12 col-lg-9">
                {this.getPagination()}
                <div className="item-list">
                    {this.getContent()}
                </div>

            </div>


        )
    }
}

export default connect((state,ownProps)=>{
    return ({
        loading:state[ownProps.content].loading,
        total_pages:state[ownProps.content].total_pages,
        items:state[ownProps.content].pagination[ownProps.page],
        offlineFail:state[ownProps.content].offlineFail
    })
},{checkAndLoadItemsForPage})(ItemList)