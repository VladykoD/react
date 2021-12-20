import React from 'react';
import PostComponent from "./PostComponent";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, remove}) => {

    if (!posts.length) {
        return <p>Постов нет</p>
    }

    return (
        <div>
            <h1 className="title-h1">{title}</h1>

            <TransitionGroup>
                {posts.map( (post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostComponent remove={remove} number={index + 1} post={post}></PostComponent>
                    </CSSTransition>
                 )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;
