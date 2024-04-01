import "./../../src/data.js";


const Post = ({ title, content, imgUrl, fullContent }) => {
  return (
    <div className="post-container">
      <img
        src={imgUrl}
        alt="Meaningful alt text for an image that is not purely decorative"
      />
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => alert(fullContent)}>Read More</button> 
    </div>
  );
}

export default Post;
