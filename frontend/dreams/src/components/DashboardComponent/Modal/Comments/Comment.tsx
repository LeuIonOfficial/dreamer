import React from "react";
import CommentForm from './CommentForm';
import noAvatar from "../../../../assets/media/noAvatar.png";
const Comment = ({
                     comment,
                     replies,
                     setActiveComment,
                     activeComment,
                     updateComment,
                     deleteComment,
                     addComment,
                     parentId = null,
                     currentUserId,
                 }) => {
    const isEditing =
        activeComment &&
        activeComment.id === comment.id &&
        activeComment.type === "editing";
    const isReplying =
        activeComment &&
        activeComment.id === comment.id &&
        activeComment.type === "replying";
    // const fiveMinutes = 300000;
    // const timePassed = new Date().getTime() - new Date(comment.createdAt).getTime() > fiveMinutes;
    // const canDelete = currentUserId === comment.userId && replies.length === 0 && !timePassed;
    const canReply = Boolean(currentUserId);
    // const canEdit = currentUserId === comment.userId && !timePassed;
    const replyId = parentId ? parentId : comment.id;
    const createdAt = new Date(comment.createdAt).toLocaleDateString();
    return (
        <div key={comment.id} className="flex mb-[10px] gap-2.5">
            <div className="flex items-start">
                <img src={noAvatar} alt="profile-img" className="h-[40px] leading-[40px] w-[40px] align-middle rounded-[50rem] object-cover"/>
            </div>
            <div className="flex flex-col w-full">
                <div className="flex flex-col">
                    <div className="flex mb-[5px]">
                        <div className="flex flex-col w-full p-[10px] rounded-[8px] bg-[#f5f5f5]">
                            <a className="text-left text-[14px] text-[#000] font-normal leading-4">{comment.username}</a>
                            {!isEditing && <span className=" text-left	text-[14px] text-[#6c6a6a] font-normal hyphens-auto break-words leading-5">{comment.body}</span>}
                        </div>
                    </div>
                </div>
                {isEditing && (
                    <CommentForm
                        submitLabel="Update"
                        hasCancelButton
                        initialText={comment.body}
                        handleSubmit={(text) => updateComment(text, comment.id)}
                        handleCancel={() => {
                            setActiveComment(null);
                        }}
                    />
                )}
                <div className="flex items-start ml-[5px] gap-2.5">
                    <span className="text-[12px] text-[#828282] font-normal leading-5 pt-[1px] cursor-pointer">{createdAt}</span>
                    <div className="flex h-[17px] w-[36px] justify-center">
                    {canReply && (
                        <div
                            className="text-[12px] text-[#828282] font-normal leading-6 cursor-pointer mr-[5px]"
                            onClick={() =>
                                setActiveComment({ id: comment.id, type: "replying" })
                            }
                        >
                            Reply
                        </div>
                    )}
                    {/*{canEdit && (*/}
                    {/*    <div*/}
                    {/*        className="text-[12px] text-[#828282] font-normal leading-6 cursor-pointer mr-[5px]"*/}
                    {/*        onClick={() =>*/}
                    {/*            setActiveComment({ id: comment.id, type: "editing" })*/}
                    {/*        }*/}
                    {/*    >*/}
                    {/*        Edit*/}
                    {/*    </div>*/}
                    {/*)}*/}
                    {/*{canDelete && (*/}
                    {/*    <div*/}
                    {/*        className="text-[12px] text-[#828282] font-normal leading-6 cursor-pointer"*/}
                    {/*        onClick={() => deleteComment(comment.id)}*/}
                    {/*    >*/}
                    {/*        Delete*/}
                    {/*    </div>*/}
                    {/*)}*/}
                    </div>
                </div>
                {isReplying && (
                    <CommentForm
                        submitLabel="Reply"
                        handleSubmit={(text) => addComment(text, replyId)}
                    />
                )}
                {replies.length > 0 && (
                    <div className="mt-[10px]">
                        {replies.map((reply) => (
                            <Comment
                                comment={reply}
                                key={reply.id}
                                setActiveComment={setActiveComment}
                                activeComment={activeComment}
                                updateComment={updateComment}
                                deleteComment={deleteComment}
                                addComment={addComment}
                                parentId={comment.id}
                                replies={[]}
                                currentUserId={currentUserId}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Comment;