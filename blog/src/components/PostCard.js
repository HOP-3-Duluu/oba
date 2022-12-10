import { Link } from "react-router-dom";
export default function PostItem(props) {
  return (
    <div className="post-container">
      <h2>
        <Link to={`/posts/${props.post._id}`}>{props.post.title}</Link>
      </h2>
      <p>{props.post.body}</p>
    </div>
  );
}