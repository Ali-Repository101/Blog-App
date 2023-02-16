import React from 'react'
import { useParams } from 'react-router-dom';
import GetPostContent from '../Api/GetPost';

function SinglePost() {
    let { slug } = useParams();
    return (

        <GetPostContent slug={slug} />


    )
}

export default SinglePost;