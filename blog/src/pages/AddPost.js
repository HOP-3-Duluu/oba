import { useRef, useState } from "react";
import { API } from "../utils/axios";


const AddPost = () => {
  const [post, setPost] = useState({
    title: '',
    body: '',
    coverImage: null,
    userId: ''
  });
  const [res, setRes] = useState('')
  const file = useRef(null)
  
  const add = async () => {
    try {
      const form = new FormData();
      // form.append('file', post.coverImage);
      // await API.post('upload', form);

      const { data } = await API.post('blog', {
        ...post,
        // coverImage: post.coverImage.name
      });

      setRes('post added')
    } catch (err) {

      if (err.response.status === 401) {
        setRes('unauthorized')
      }
      if (err.response.status === 400) {
        setRes('dutuu bogolson ')
      }
    }
  }


  return (
    <div>
      <h1>Add Post</h1>
      
      <input placeholder="title" value={post.title} onChange={(e) => setPost({...post, title: e.target.value})} />
      <input placeholder="body" value={post.body} onChange={(e) => setPost({ ...post, body: e.target.value })} />
      {/* <input placeholder="authorId" value={post.userId} onChange={(e) => setPost({ ...post, userId: e.target.value })} />
      <input type={'file'} alt={'img'} onChange={(e) => setPost({...post, coverImage: e.target.files[0]})} /> */}


      <button onClick={add} >Add</button>

      <h3>{res}</h3>

    </div>
  )
}

export default AddPost