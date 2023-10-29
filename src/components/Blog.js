import React, { useState } from 'react';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([
    {
      title: 'Asynchronous Operations',
      description:
        '🤹‍♂️ First, JavaScript wows the crowd with Asynchronous Operations, handling multiple tasks at once, making real-time data updates a breeze.',
      content:
        ' JavaScript leverages asynchronous operations to perform tasks that were traditionally reserved for the back end. This includes making HTTP requests, handling databases, and managing real-time data. Libraries like Axios and the built-in fetch API enable developers to send requests to servers and process responses without requiring a page refresh. This allows for dynamic and responsive front-end experiences.',
    },
    {
      title: 'Front-End Frameworks',
      description:
        ' Modern front-end frameworks like Angular, React, and Vue provide extensive tools for building complex applications. They offer features like state management, data fetching, and component-based architecture, which were traditionally the domain of the back end.',
      content:
        'Single-page applications (SPAs) heavily rely on JavaScript for client-side routing. Frameworks like React, Angular, and Vue provide powerful routing mechanisms that let you control what content is displayed in the browser based on the URL. This capability was traditionally associated with server-side rendering, but JavaScript now enables the front end to manage it efficiently.',
    },
    {
      title: 'Client-Side Routing',
      description:
        "🎉 Don't forget the star-studded Front-End Frameworks! - they're the icing on the cake!",
      content:
        'Single-page applications (SPAs) heavily rely on JavaScript for client-side routing. Frameworks like React, Angular, and Vue provide powerful routing mechanisms that let you control what content is displayed in the browser based on the URL. This capability was traditionally associated with server-side rendering, but JavaScript now enables the front end to manage it efficiently.',
    },
  ]);

  return (
    <div>
      <main>
        <div className="m-auto w-1/2">
          <h2 className=" text-whiteTest  text-center text-5xl mt-5">
            🎪 Step right up to witness the spectacular world of web
            development! In this carnival of coding, JavaScript is the star,
            turning the front end into a back-end marvel.
          </h2>
        </div>

        <div className="w-1/2 m-auto ">
          {blogPosts.map((post, index) => (
            <div
              className="w-2/3 bg-wood-pattern m-auto mt-20 flex
               p-20"
              key={index}
            >
              <div>
                <h2 className="text-center text-5xl p-3 m-5 mt-24 bg-paper-background">
                  {post.title}
                </h2>
                <p className="  bg-whiteTest m-10">{post.description}</p>
                <p className="  bg-whiteTest m-10">{post.content}</p>
              </div>
              <div>
                <img src="/sign1.png" />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blog;

