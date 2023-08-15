import React, { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import {
    getComments as getCommentsApi,
    createComment as createCommentApi,
    updateComment as updateCommentApi,
    deleteComment as deleteCommentApi,
} from './api';
import styled from "styled-components";

const Comments = ({ commentsUrl, currentUserId }) => {
    const [backendComments, setBackendComments] = useState([]);
    const [activeComment, setActiveComment] = useState(null);
    const rootComments = backendComments.filter(
        (backendComment) => backendComment.parentId === null
    );
    const getReplies = (commentId) =>
        backendComments
            .filter((backendComment) => backendComment.parentId === commentId)
            .sort(
                (a, b) =>
                    new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            );
    const addComment = (text, parentId) => {
        createCommentApi(text, parentId).then((comment) => {
            setBackendComments([...backendComments, comment]);
            setActiveComment(null);
        });
    };

    const updateComment = (text, commentId) => {
        updateCommentApi(text).then(() => {
            const updatedBackendComments = backendComments.map((backendComment) => {
                if (backendComment.id === commentId) {
                    return { ...backendComment, body: text };
                }
                return backendComment;
            });
            setBackendComments(updatedBackendComments);
            setActiveComment(null);
        });
    };
    const deleteComment = (commentId) => {
        if (window.confirm("Are you sure you want to remove comment?")) {
            deleteCommentApi().then(() => {
                const updatedBackendComments = backendComments.filter(
                    (backendComment) => backendComment.id !== commentId
                );
                setBackendComments(updatedBackendComments);
            });
        }
    };

    useEffect(() => {
        getCommentsApi().then((data) => {
            setBackendComments(data);
        });
    }, []);
const CommentsScroll = styled.div`
  &::-webkit-scrollbar {
    border-radius: 20px;
    height: 0.5rem;
    width: 0.2rem;
  }

  &::-webkit-scrollbar-thumb {
    background: #b9b9b9;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 20px;
  }
    
`
    return (
        <CommentsScroll className="h-[498px] overflow-auto mb-0 mt-0 pl-2.5">
                {rootComments.map((rootComment) => (
                    <Comment
                        key={rootComment.id}
                        comment={rootComment}
                        replies={getReplies(rootComment.id)}
                        activeComment={activeComment}
                        setActiveComment={setActiveComment}
                        addComment={addComment}
                        deleteComment={deleteComment}
                        updateComment={updateComment}
                        currentUserId={currentUserId}
                    />
                ))}
            <CommentForm submitLabel="Send" handleSubmit={addComment} />
        </CommentsScroll>
    );
};

export default Comments;