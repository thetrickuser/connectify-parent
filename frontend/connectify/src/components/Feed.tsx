import Post from "./Post.tsx";
import NewPost from "./NewPost.tsx";

const Feed = () => {
    return (
        <main className="w-3/4 bg-gray-100 p-4">
            <NewPost/>
            <Post/>
            <Post/>
            <Post/>
        </main>
    )
}

export default Feed;