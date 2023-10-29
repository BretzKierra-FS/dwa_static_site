import React from 'react';

const BlogPost = ({ post }) => {
  return (
    <div
      className="w-2/3 bg-cover m-auto mt-20 flex p-20 "
      style={{ backgroundImage: "url('./paper.png')" }}
    >
      <div>
        <h2 className="text-center text-5xl p-3 m-5 mt-10 s">{post.title}</h2>
        <p className=" text-lg font-semibold">{post.description}</p>
        <p className="text-lg font-semibold">{post.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
