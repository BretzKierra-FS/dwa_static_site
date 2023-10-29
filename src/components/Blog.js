import React, { useState } from 'react';
import BlogPost from './BlogPost';
import Footer from './Footer';
const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: 'Asynchronous Operations',
      description:
        '🤹‍♂️ First, JavaScript wows the crowd with Asynchronous Operations, handling multiple tasks at once, making real-time data updates a breeze.',
      content:
        ' JavaScript leverages asynchronous operations to perform tasks that were traditionally reserved for the back end. This includes making HTTP requests, handling databases, and managing real-time data. Libraries like Axios and the built-in fetch API enable developers to send requests to servers and process responses without requiring a page refresh. This allows for dynamic and responsive front-end experiences.',
    },
    {
      id: 2,
      title: 'Front-End Frameworks',
      description:
        ' Modern front-end frameworks like Angular, React, and Vue provide extensive tools for building complex applications. They offer features like state management, data fetching, and component-based architecture, which were traditionally the domain of the back end.',
      content:
        'Single-page applications (SPAs) heavily rely on JavaScript for client-side routing. Frameworks like React, Angular, and Vue provide powerful routing mechanisms that let you control what content is displayed in the browser based on the URL. This capability was traditionally associated with server-side rendering, but JavaScript now enables the front end to manage it efficiently.',
    },
    {
      id: 3,
      title: 'Client-Side Routing',
      description:
        "🎉 Don't forget the star-studded Front-End Frameworks! - they're the icing on the cake!",
      content:
        'Single-page applications (SPAs) heavily rely on JavaScript for client-side routing. Frameworks like React, Angular, and Vue provide powerful routing mechanisms that let you control what content is displayed in the browser based on the URL. This capability was traditionally associated with server-side rendering, but JavaScript now enables the front end to manage it efficiently.',
    },
  ]);

  const [selectedPost, setSelectedPost] = useState(null);

  const selectPost = (postId) => {
    const post = blogPosts.find((post) => post.id === postId);
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
                className=" bg-giantOrange p-5 rounded-3xl relative left-9 text-whiteTest text-2xl mt-10"
              >
                Go Back
              </button>
              <BlogPost post={selectedPost} />
            </div>
          ) : (
            blogPosts.map((post) => (
              <div
                style={{ backgroundImage: "url('./postboard.png')" }}
                className="w-2/3 m-auto mt-20 flex p-20  rounded-2x"
                key={post.id}
              >
                <div className=" bg-paper-background rounded-2xl p-5">
                  <h2 className="text-center text-5xl p-3 m-5 mt-24 font-signFon rounded-xl text-whiteTest text opacity-70 bg-black ">
                    {post.title}
                  </h2>
                  <p className=" font-semibold m-10">{post.description}...</p>
                  <div>
                    <button
                      onClick={() => selectPost(post.id)}
                      className=" bg-giantOrange p-5 rounded-3xl relative left-9 text-whiteTest text-2xl"
                    >
                      Read More
                    </button>{' '}
                    {/* Read more */}
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

const styles = {};
