import { Link } from "react-router-dom"
import "./singlePost.css"

const SinglePost = () => {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img className="singlePostImg" src="" alt="" />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Adam</b></span>
                <span className="singlePostDate">1 Hour Ago</span>
            </div>
            <p className="singlePostDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, ipsa numquam obcaecati porro
                     id repellat praesentium molestiae doloribus aperiam, dolor, architecto molestias labore ullam omnis. 
                     Officia voluptate, beatae pariatur illo soluta minima fugit neque quidem quasi
                     quaerat maxime nostrum unde nobis nulla itaque sed iure aliquam, alias accusamus ipsum animi.
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam atque laborum velit
                     ad quaerat ea veritatis iure et non eligendi est repellendus, quo officia nobis? Esse, velit tempore.
                     Dolorum omnis sit praesentium maxime illum ad, minima
                      nulla voluptas! Laudantium pariatur iure repellat eum magni esse quisquam labore repudiandae maiores
                     obcaecati?
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dicta molestias fugiat voluptatem cum, 
                     provident soluta quae dolorum unde ad tempore cumque facere quas sed porro totam quam alias quis illo eos autem.
                      Quaerat excepturi ipsam reprehenderit autem. Sint totam quis harum ratione optio? Soluta enim at voluptate impedit. 
                      Unde expedita mollitia voluptatem aspernatur sequi, necessitatibus vel esse itaque hic.

                </p>
        </div>
    </div>
  )
}

export default SinglePost