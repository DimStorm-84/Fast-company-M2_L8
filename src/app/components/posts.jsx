import PostsList from "./postsList";
import Post from "./post";

const Posts = ({ match }) => {
  const posts = [
    { id: 1, lable: "post 1" },
    { id: 2, lable: "post 2" },
    { id: 3, lable: "post 3" },
  ];
  const postId = match.params.postId;
  return <>{postId ? <Post /> : <PostsList posts={posts} />}</>;
};
export default Posts;
