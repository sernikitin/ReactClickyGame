import React, { Component } from 'react';




class NavBar extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="card card-image" style={{ backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)' }}>
                        <div className="text-white text-center py-5 px-4 my-5">
                            <div>
                                <h1 className="card-title pt-3 mb-5 font-bold"><strong>Welcome to my first React js app</strong></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}
export default NavBar;


