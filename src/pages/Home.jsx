import { Card } from "flowbite-react";
import { useState } from "react";
import posts from "./../../src/data.js"; 
import "./../assets/syle.css";
import Post from "./Post.jsx";

const Home = () => {
  const [showFullContent, setShowFullContent] = useState(posts.map(() => false));

  const handleReadMoreClick = (postId) => {
    setShowFullContent(prevState => {
      const newState = [...prevState];
      newState[postId - 1] = !newState[postId - 1]; 
      return newState;
    });
  };
  return (
    <>
    <div className="title-container">
      <h1 className="text-2xl font-bold mb-4">Welcome to my blog</h1>
    </div>
    <div className="home-container">
      {posts.map((post) => (
        <Card key={post.id} className="max-w-sm">
          <Post
            title={post.title}
            content={
              showFullContent[post.id - 1] ? post.fullContent : post.content
            }
            imgUrl={post.imgUrl}
            fullContent={post.fullContent}
          />
          <button
            type="button"
            className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => handleReadMoreClick(post.id)}
          >
            Read More
          </button>
        </Card>
      ))}
    </div>
  </>
  );
};

export default Home;
