import { useState } from "react"

const CommentAdd = ({ postid, commentadd }) => {
    const [userPic, setUserPic] = useState(localStorage.getItem("profile_pic"));
    const [commentText, setCommentText] = useState("");
    const [userId, setUserId] = useState(localStorage.getItem("user_id"));
    const onKeyUp = (e) => {
        if (e.keyCode == 13) {
            console.log("call api", commentText, userId, postid);
            commentadd(postid, commentText)
        }
    }
    return (
        <>
            <div className="media">
                <img src={userPic} alt="" className="link-icon link-radius" />
                <div className="media-body">
                    <input
                        type="text"
                        value={commentText}
                        className="form-control badge-pill ml-2"
                        placeholder="write your comments"
                        onChange={(e) => setCommentText(e.target.value)}
                        onKeyUp={onKeyUp}
                    />
                </div>
            </div>

        </>
    );
};

export default CommentAdd;