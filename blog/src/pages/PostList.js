import { API } from "../utils/axios";
import { useState, useEffect } from "react";
import PostCard from "../components/PostCard";

export default function PostList() {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState('1')
    const [pages, setPages] = useState([1, 2, 3])
    const [perpage, setPerpage] = useState('')

    useEffect(() => {
        async function fetchData() {
            const response = await API.get(`blog?page=${page}`);
            let result = response.data;
            setPosts(result.data);
        }
        fetchData();
    }, [page]);

    const perPage = () => {
        async function fetchData() {
            const response = await API.get(`blog?page=${page}&per_page=${perpage}`);
            let result = response.data;
            setPosts(result.data);
            console.log(perpage)
        }
        fetchData();
    }

    return (
        <div>
            <h1>POST LIST</h1>
            <div>
                <p>Per page</p>
                <input type="number" onChange={(e) => setPerpage(e.target.value)}></input>
                <button onClick={perPage} >search</button>
            </div>
            <div className="posts">
                {posts?.map((post, index) => {
                    return <PostCard post={post} key={index} index={index} />
                })}
            </div>
            <div>
                {
                    pages.map((i) => <button onClick={() => setPage(i)}>{i}</button>)
                }
                <br />
                <a>You're in page {page}</a>
            </div>
        </div>
    );
}