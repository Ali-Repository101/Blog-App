import { useQuery } from "@apollo/client";
import SinglePostContent from "../Components/SinglePostContent";
import { LOAD_POST_CONTENT } from "./Query"


function GetPostContent(props) {
    const { loading, error, data } = useQuery(LOAD_POST_CONTENT(props.slug));

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    if (data) {
        return <SinglePostContent title={data.post.title} author={data.post.author} content={data.post.content} coverImage={data.post.coverImage} date={data.post.date} />
    } if (!data) {
        return <div>POST NOT FOUND</div>
    }

}


export default GetPostContent;