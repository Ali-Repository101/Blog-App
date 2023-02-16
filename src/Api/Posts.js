import { useQuery } from "@apollo/client";
import { LOAD_POSTS } from "./Query"
import BlogCard from "../Components/BlogCard";

function GetPosts() {
    const { loading, error, data } = useQuery(LOAD_POSTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.posts.map(({ title, coverImage, url, slug, excerpt, date }) => (
        <BlogCard key={slug} title={title} coverImage={coverImage} url={url} slug={slug} excerpt={excerpt} date={date} />
    ));
}



export default GetPosts;