import "./post.css"
import boxed from "../../asset/images/boxed.jpg"
import { Link } from "react-router-dom"

const Post = () => {
  return (
    <div className="post">
        <img className="postImg" src={boxed} alt="" />
        <div className="postInfo">
            <div className="postCat">
                <span className="postCats">Music</span>
                <span className="postCats">Life</span>
            </div>
                <span className="postTitle">
                    <Link to="/post/:postId" className="link">Lorem ipsum dolor sit amet.</Link>
                </span>
                <hr/>
                <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, 
            nesciunt ratione accusantium nisi tempore similique 
            voluptas perferendis quasi eveniet provident.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, 
            nesciunt ratione accusantium nisi tempore similique 
            voluptas perferendis quasi eveniet provident.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, 
            nesciunt ratione accusantium nisi tempore similique 
            voluptas perferendis quasi eveniet provident.
        </p>
    </div>

  )
}

export default Post