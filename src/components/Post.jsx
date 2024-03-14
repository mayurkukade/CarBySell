/* eslint-disable react/prop-types */


export default function Post({ post }) {
    console.log(post)
  return <li style={{ margin: 10 }}>{post.carId}</li>;
}
