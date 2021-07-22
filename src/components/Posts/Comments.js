import { useState } from "react";

const Comments = ({ comment }) => {

    const [userId, setUserId] = useState(localStorage.getItem("user_id"));
    return (
        <>
            <div className="media mb-2">
                <img src={comment.user_pic} alt="pic" className="link-icon link-radius" />
                <div className="media-body ,ml-2  fb-bg rounded-lg">
                    <strong>{comment.user_name}</strong>
                    <p>
                        {comment.comment} {userId + "," + comment.user_id}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Comments;