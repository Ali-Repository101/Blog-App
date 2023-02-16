import React from 'react'



function SinglePostContent(props) {

    return (
        <div className="container-fluid mt-5 ">
            <div className="">
                <div className="container">
                    <div className="container">
                        <div className="col-lg-12 m-15">
                            <article className=" article">
                                <div className="article-title">
                                    <h2 className="mb-5">
                                    {props.title}
                                    </h2>
                                    <div className="media">
                                        <div className="">
                                            <img
                                                src={props.coverImage.url}
                                                title=""
                                                alt=""
                                                style={{ height: "400 !important", width:'100%', objectFit:'cover'}}
                                            />
                                        </div>
                                        <div className="d-flex justify-content-between my-5">
                                            <label>{props.author.name}</label>
                                            <b>{props.date}</b>
                                        </div>
                                    </div>
                                </div>
                                <div className="article-content my-5">

                                    {<div dangerouslySetInnerHTML={{ __html: props.content.html }} />}
                                </div>

                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePostContent