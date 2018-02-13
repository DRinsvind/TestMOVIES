import React,{Component} from 'react'
import Filters from './Filters'
import ItemList from './ItemList'
class Main extends Component{

    render(){
        return(
            <main>
                <div className="container">
                    <div className="row">
                        <Filters content={this.props.content}/>
                        <ItemList content={this.props.content} page={this.props.page}/>
                    </div>
                </div>
            </main>
        )
    }
}

export default Main