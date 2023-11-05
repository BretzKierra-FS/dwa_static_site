import React, { useState, useEffect } from 'react';
import BlogPost from './BlogPost';
import Footer from './Footer';

const Blog = () => {
  // Hooks
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  const API_BASE =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:4000'
      : process.env.REACT_APP_BASE_URL;

  let ignore = false;

  useEffect(() => {
    if (!ignore) {
      getBlogs();
    }

    return () => {
      ignore = true;
      setBlogs([]);
      setLoading(false);
      setError(null);
    };
  }, []);

  const getBlogs = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE}/newPost`);
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      setError(error.message || 'Unexpected Error');
    } finally {
      setLoading(false);
    }
  };

  const selectPost = (postId) => {
    const post = blogs.find((post) => post.id === postId);
    setSelectedPost(post);
  };

  const goBackToAllPosts = () => {
    setSelectedPost(null);
  };

  return (
    <div>
      <main>
        <div className="m-auto w-1/2">
          <h2 className="text-whiteTest text-center text-5xl mt-5">
            🎪 Step right up to witness the spectacular world of web
            development! In this carnival of coding, JavaScript is the star,
            turning the front end into a back-end marvel.
          </h2>
        </div>

        <div className="w-1/2 m-auto ">
          {selectedPost ? (
            <div>
              <button
                onClick={goBackToAllPosts}
                className="bg-giantOrange p-5 rounded-3xl relative left-9 text-whiteTest text-2xl mt-10"
              >
                Go Back
              </button>
              <BlogPost post={selectedPost} />
            </div>
          ) : (
            blogs.map((post) => (
              <div
                className="w-2/3 m-auto mt-20 flex p-20 rounded-2x"
                style={{ backgroundImage: "url('./postboard.png')" }}
                key={post.id}
              >
                <div className="bg-paper-background rounded-2xl p-5">
                  <h2 className="text-center text-5xl p-3 m-5 mt-24 font-signFon rounded-xl text-whiteTest text opacity-70 bg-black ">
                    {post.title}
                  </h2>
                  <p className="font-semibold m-10">{post.description}...</p>
                  <div>
                    <button
                      onClick={() => selectPost(post.id)}
                      className="bg-giantOrange p-5 rounded-3xl relative left-9 text-whiteTest text-2xl"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
