import {useState} from "react";

const NewPost = () => {
    const [postContent, setPostContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the post submission logic here
        console.log('New Post:', postContent);
        setPostContent(''); // Clear the input field after submission
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-lg mb-4">
      <textarea
          className="w-full p-2 border border-gray-300 rounded mb-2"
          rows={4}
          placeholder="What's on your mind?"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
      ></textarea>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Post
            </button>
        </form>
    );
};

export default NewPost;
