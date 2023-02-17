import React from 'react'
import { useParams } from 'react-router-dom';
import GetPostContent from '../Api/GetPost';

function SinglePost() {
    let { slug } = useParams();
    console.log("param test", slug)
    return (

        <GetPostContent slug={slug} />


    )
}

export default SinglePost;