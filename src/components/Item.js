import React,{Component} from 'react'
import img404 from '../images/404.jpg'
import {Link} from 'react-router-dom'
class Item extends Component{

    getStars=()=>{
        const countStars = Math.floor(this.props.item.vote_average/2)
        var stars=[]
        for(var i=1;i<=countStars;i++){
            stars.push(<div className="star" key={'star'+i}/>)
        }
        return(
            <div className="item-block__star-block">
                {stars}
            </div>
        )
    }
    getImage =()=>{

        if(this.props.item.poster_path){
            return "https://image.tmdb.org/t/p/w370_and_h556_bestv2/"+this.props.item.poster_path
        }else{
            return img404
        }
    }
    render(){

        return(
            <div className="item-block" >
                <div className="item-block__wrapper">
                    <div className="item-block__img-block">
                        <img className="item-block__img-block" src={this.getImage()} alt=""/>
                    </div>
                    <div className="item-block__content">
                        <h3 className="item-block__heading">{this.props.item.original_title||this.props.item.original_name}<br/>({this.props.item.title||this.props.item.name})</h3>
                        <div className="item-block__rating-block">
                            {this.getStars()}
                            <h2 className="item-block__rating-num">RAT:{this.props.item.vote_average}</h2>
                        </div>
                    </div>
                    <Link to={`/${this.props.content}/single/${this.props.item.id}`} className="item-block__link"/>
                </div>
            </div>
        )
    }
}


export default Item