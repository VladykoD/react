import React, {useState} from 'react';
import Input from "./ui/input/Input";
import Button from "./ui/button/Button";

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', body: ''})


    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }


    return(
        <form>
            <Input value={post.title}
                   onChange={e => setPost({...post, title: e.target.value})}
                   type="text"
                   placeholder={"название"}/>
            <Input value={post.body}
                   onChange={e => setPost({...post, body: e.target.value})}
                   type="text"
                   placeholder={"описание"}/>


            <Button onClick={addNewPost}>создать</Button>
        </form>
    )
}


export default PostForm;
