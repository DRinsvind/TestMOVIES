import React,{Component} from 'react'
import Choose from './Choose'
import Main from './Main'
import {connect} from 'react-redux'
import {getPopular,getProkat,getRating} from '../AC'
import {Route, Redirect,Link,Switch} from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux'
import history from '../history'
import SinglePage from './SinglePage'
class App extends Component{
    getContentLink = type=>({match}) =>{
        const {page}=match.params
        return <Main content={type} page={page}/>
    }
    getSingleLink = type=>(arg) =>{
        const {id}=arg.match.params
        return <SinglePage content={type} id={id} goBack={arg.history.goBack}/>
    }
    getHomeLink = ()=>{
        return  <Link className="header-link" to='/'>Home</Link>
    }

    render(){
        return(

            <ConnectedRouter history={history}>
                <div>

                    <header>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-2">
                                    <Switch>
                                        <Route path="/" exact/>
                                        <Route path="/*" render={this.getHomeLink} />
                                     </Switch>

                                </div>
                                <div className="col-2">
                                    <Link className="header-link" to='/movies'>Movies</Link>
                                </div>
                                <div className="col-2">
                                    <Link className="header-link" to='/series'>TV-series</Link>
                                </div>
                            </div>
                        </div>
                    </header>
                    <Switch>

                        <Route path="/" component = {Choose} exact/>
                        <Route exact path="/movies" render={() => (

                            <Redirect to="/movies/1"/>

                        )}/>
                        <Route exact path="/series" render={() => (

                            <Redirect to="/series/1"/>

                        )}/>
                        <Route path="/movies/single/:id" component = {this.getSingleLink('movies')}/>
                        <Route path="/series/single/:id" component = {this.getSingleLink('series')}/>
                        <Route path="/movies/:page" component = {this.getContentLink('movies')}/>
                        <Route path="/series/:page" component = {this.getContentLink('series')}/>
                    </Switch>
                    <bottom></bottom>
                </div>
            </ConnectedRouter>
        )
    }
}

export default App
