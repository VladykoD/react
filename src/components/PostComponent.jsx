import React from 'react';
import Button from "./ui/button/Button";


const PostComponent = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <h3>
                    <b>{props.post.id} </b>
                    {props.post.title}
                </h3>
                <p>{props.post.body}</p>
                <Button onClick={() => props.remove(props.post)} className="usual-btn">удалить</Button>
            </div>
        </div>
    );
};

export default PostComponent;

