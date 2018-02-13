import React,{Component} from 'react'
import Filters from './Filters'
import ItemList from './ItemList'
function Main(props){
    return(
        <main>
            <div className="container">
                <div className="row">
                    <Filters content={props.content}/>
                    <ItemList content={props.content} page={props.page}/>
                </div>
            </div>
        </main>
    )

}

export default Main