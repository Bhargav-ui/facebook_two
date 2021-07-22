import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobeAsia, faThumbsUp, faLaugh } from '@fortawesome/free-solid-svg-icons';
import Comments from "./Comments";
import { useState } from 'react';
import CommentAdd from "./CommentAdd";
const Post = ({ postData, onLikeClicked, onUnLikeClicked, onCommentAdded }) => {



    const [displayComments, setDisplayComments] = useState(false);

    const displayCommentsClicked = () => {
        setDisplayComments(true);
    }

    const likeClicked = () => {
        console.log("like clicked", postData.post_id);
        onLikeClicked(postData.post_id);
    };

    const unLikeClicked = () => {
        console.log("unLikeClicked", postData.post_id);
        onUnLikeClicked(postData.post_id);
    };

   

    return (
        <div className="card mt-4">
            <div className="card-body">


                {/* profile details */}
                <div className="media">
                    <img src={postData.user_pic} alt="" className="link-icon link-radius" />
                    <div className="media-body pl-2">
                        <h6 className="fb-no-margin-bottom"> {postData.user_name}</h6>
                        <br />
                        <span className="text-secondary">
                            {postData.user_posted_on} &nbsp;
                            <FontAwesomeIcon icon={faGlobeAsia} />
                        </span>
                    </div>
                </div>
                {/* Post text */}
                <p className="mt-2">{postData.post_desc}</p>
            </div>

            {postData.post_img.length > 0 && (
                <a href={postData.post_url} target="_blank">
                    <img src={postData.post_img} alt="" className="card-img-top" />
                </a>
            )}

            <div className="card-body">
                <div className="fb-left text-left">
                    {postData.laugh_count != undefined && (
                        <FontAwesomeIcon icon={faLaugh} />
                    )}

                    {postData.likes_count != undefined && postData.is_liked == "false" && (
                        <span>
                            <FontAwesomeIcon icon={faThumbsUp} />{postData.likes_count}
                        </span>
                    )}
                </div>
                {/* ////// */}
                <div className="fb-left">

                    {
                        postData.likes_count != undefined && postData.is_liked == "true" && (
                            <span>
                                <FontAwesomeIcon icon={faThumbsUp} /> you &{postData.likes_count - 1} other liked this post
                            </span>
                        )
                    }
                </div>


                {/* ////// */}


                <div className='fb-right text-right'>Comments</div>
            </div>

            <div className="card-body">
                <hr />
                <div className="row">
                    <div className="col-lg-3 text-center">
                        {
                            postData.is_liked == "true" && (
                                <div className="text-primary" onClick={unLikeClicked}>
                                    <FontAwesomeIcon icon={faThumbsUp} />Like
                                </div>
                            )}

                        {
                            postData.is_liked == "false" && (
                                <div onClick={likeClicked}>
                                    <FontAwesomeIcon icon={faThumbsUp} />Like
                                </div>
                            )}
                    </div>
                    <div className="col-lg-3 text-center" onClick={displayCommentsClicked}>Comment</div>
                    <div className="col-lg-3 text-center">Share</div>
                    <div className="col-lg-2 text-right">Profile </div>
                </div>
            </div>


            {
                displayComments &&
                <div className="card-body"> <CommentAdd postid={postData.post_id} commentadd={onCommentAdded} /></div>
            }


            {
                displayComments && <div className="card-body">
                    {postData.comments.map((comment, i) => (
                        <Comments comment={comment} key={i} />
                    )
                    )}

                </div>
            }
        </div>

    );
};
export default Post;