import React,{Component} from 'react'
import {loadItemById} from '../AC'
import {connect} from 'react-redux'
import Loader from './Loader'
import img404 from '../images/404.jpg'


class SinglePage extends Component{

    componentDidMount(){
        const{loadItemById,content,id,offlineFail}=this.props
        if(!offlineFail)loadItemById(content,id)
    }
    componentDidUpdate(){
        const{loadItemById,content,id,offlineFail}=this.props
        if(!offlineFail)loadItemById(content,id)
    }
    getImage = () =>{
        if(this.props.item.poster_path){
            return "https://image.tmdb.org/t/p/w370_and_h556_bestv2/"+this.props.item.poster_path
        }else{
            return img404
        }
    }

    render(){
        if(this.props.offlineFail){
            return (
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-9">
                                <h2>SORRY, THIS PAGE IS NOT AVAILABLE FOR OFFLINE VERSION</h2>
                                <button onClick={this.props.goBack}>back</button>
                            </div>
                        </div>
                    </div>
                </main>
            )
        }
        if(this.props.loading||!this.props.item) return <Loader/>
        const {item} = this.props
        return(
           <main>
               <div className="container">
                   <div className="row">
                       <div className="col-12 col-md-3">
                           <div className="item-block__img-block">
                               <img className="item-block__img-block" src={this.getImage()} alt=""/>
                           </div>
                       </div>
                       <div className="col-12 col-md-9">
                            <h2>{item.original_title||item.original_name} ({item.title||item.name})</h2>
                           <p>{item.overview}</p>
                           <button onClick={this.props.goBack}>back</button>
                       </div>
                   </div>
               </div>
           </main>
        )

    }
}

export default connect((state,ownProps)=>({
    item:state[ownProps.content].single[ownProps.id],
    loading:state[ownProps.content].singleLoading,
    offlineFail:state[ownProps.content].offlineFail
}),{loadItemById})(SinglePage)