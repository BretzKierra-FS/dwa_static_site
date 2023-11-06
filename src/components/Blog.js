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
    {
      id: 4,
      title: 'Using APIs in React: Best Practices',
      description:
        "This article explores the smart ways to make APIs work with React, a popular tool for creating web interfaces. Learn about how to choose the right methods, manage your data, handle errors, and keep your app safe. Whether you're new to React or a seasoned developer, these tips will help you use APIs effectively",
      content:
        "This article explores the smart ways to make APIs work with React, a popular tool for creating web interfaces. Learn about how to choose the right methods, manage your data, handle errors, and keep your app safe. Whether you're new to React or a seasoned developer, these tips will help you use APIs effectively.In web development, APIs (Application Programming Interfaces) help connect the front-end of an app to data and services in the back-end. React, a great tool for building web interfaces, often needs APIs to fetch data and perform tasks. This article discusses the best practices for using APIs in React to make sure your app works well and stays secure. Choose the Right Way to Connect When you want to use APIs with React, you have choices. You can use the modern fetch method or libraries like Axios to send and get data from APIs. These options make the process easier. Managing Data To handle data from APIs, you need to keep your app's state in check. React comes with a built-in way to do this, and you can also use libraries like Redux or the Context API. Make sure your app's state stays organized by storing API data in the right places. Dealing with Errors Dealing with errors is a must when working with APIs in React. Always check for problems like network issues or wrong data. Use try-catch blocks or error handling tools to manage errors and give useful feedback to users. How to Get Data Decide on the best way to get data based on your app's needs. You can get data when a component loads, or you can load data as users need it. This can make your app faster by reducing the time it takes to load. You can also control the number of requests to the API by using debounce or throttle. Keeping Secrets Safe Store sensitive information like API keys in special places called environment variables to protect them. Never put your API keys directly in your code, as that can create security problems. Use tools like dotenv to manage these variables. Handling Lots of Data If your app has lots of data, think about using pagination or infinite scrolling. These techniques make sure your app stays responsive and loads only the data users need. Caching and Avoiding Redundant Requests To avoid making too many requests to the API, consider using caching. You can store data in your browser, in memory, or in local storage so you don't have to request the same data over and over. Know Your Limits Be aware of the limits set by the API provider, like how many requests you can make. Follow their rules and think about what to do if a request fails. Testing Testing your app is important to make sure it works well. You can use tools like Jest and React Testing Library to create different types of tests, making sure your API connections are solid. Keeping Things Secure Security is crucial when using APIs. Make sure to check and clean user input to protect against security risks. Also, use proper methods for user authentication and authorization to keep your API safe. Conclusion Using APIs in React can make your app more powerful and give users access to lots of data. But to make sure everything works well and stays secure, follow these best practices. By connecting the right way, managing your data, handling errors, and thinking about security, your React app will be reliable and safe to use. Keep these tips in mind as you work on your next project, and youll build better apps.",
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
                <div
                  className="rounded-2xl p-5"
                  style={{ backgroundImage: "url('./paper.png')" }}
                >
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
