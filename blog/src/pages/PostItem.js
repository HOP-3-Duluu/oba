import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../utils/axios";

const PostItem = (props) => {
  let { postId } = useParams();
  const [post, setPost] = useState({});
  const [img, setImg] = useState('');
  useEffect(() => {
    async function fetchData() {
      const response = await API.get(`blog/${postId}`);
      let result = response.data;
      console.log(result);
      setPost(result.data);
      setImg(result.data.coverImage);
      for (let i = 0; i < result.data.coverImage; i++) {
        setImg(i)
      }
    }
    fetchData();
  }, [postId]);
  return (
    <div className="postContainer">
      <h1>{post.title}</h1>
      <div>{post.body}</div>
      {
        img ? <img src={"http://localhost:3001/uploads/" + img} className="post_image" />: ''
      }
    </div>
  );
};
export default PostItem;