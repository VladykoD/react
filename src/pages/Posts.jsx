import React, {useEffect, useState} from 'react';
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";
import {useFetching} from "../hooks/useFetching";
import {usePosts} from "../hooks/usePosts";
import Button from "../components/ui/button/Button";
import Modal from "../components/ui/Modal/Modal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import Loader from "../components/ui/Loader/Loader";
import PostList from "../components/PostList";
import Paginator from "../components/ui/Paginator/Paginator";


function Posts () {
    const [posts, setPosts] = useState([])
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const [totalPages, setTotalPages] = useState(0);
    const [limit] = useState(10);
    const [page, setPage] = useState(1);

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)

        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    useEffect(() => {
        fetchPosts(limit, page)
    }, [page, limit])


    const [filter, setFilter] = useState({sort: '', query: ''});
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [modal, setModal] = useState(false)

    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div className="App">
            <Button onClick={() => setModal(true)}>создать пост</Button>
            <Modal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </Modal>
            <PostFilter filter={filter} setFilter={setFilter}/>

            {
                postError && <p>что-то не загрузилось. ${postError}</p>
            }

            {
                isPostsLoading
                    ? <Loader/>
                    : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов'}/>
            }

            <Paginator
                page={page}
                changePage={changePage}
                totalPages={totalPages}/>
        </div>
    );
}

export default Posts;
