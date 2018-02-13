import React from 'react'
import {Link} from 'react-router-dom'
function Choose(){

        return(
            <main>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8">
                            <div className="content-block">
                                <h3 className="content-heading">You can choose movies</h3>
                                <Link to="/movies" className="content-link content-link__movies"/>
                            </div>
                            <div className="content-block">
                                <h3 className="content-heading">Or You can choose TV-series</h3>
                                <Link to="/series" className="content-link content-link__series"/>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        )

}

export default Choose