import React, { Component } from 'react';
import GetPosts from '../Api/Posts'


export class Blog extends Component {
    render() {
        return (
            <section>
                <div className="container-fluid mt-5">
                    <div className="text-center mb-5">
                        <h2
                            className="display-20 display-md-18 display-lg-16"
                            style={{ textAlign: "left", fontWeight: 300, fontSize: 40 }}>
                            TRAVEL BLOG
                            <hr />
                        </h2>
                    </div>
                    <div className="row">
                        <GetPosts/>
                    </div>
                </div>
            </section>
        )
    }
}

export default Blog