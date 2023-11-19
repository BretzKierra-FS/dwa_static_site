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
    {
      id: 5,
      title: 'Keeping Your Digital World Safe: Tips for Securing Your API',
      description:
        "In today's tech-driven world, Application Programming Interfaces (APIs) are like the superheroes behind the scenes, making sure different software systems can talk to each other smoothly. Whether you're creating a website, a mobile app, or any software, making sure your API is secure is super important. It helps keep sensitive information safe, builds trust with users, and shields against potential online dangers. Let's check out some simple ways to make sure your API is safe and sound.",
      content:
        "# 1. Locking the Door: Authentication and Authorization\n\nImagine your API as a high-tech club with a bouncer at the door. To get in, you need to prove you're on the guest list. That's what authentication does—it checks if you're authorized to use the API. Use secure methods like OAuth 2.0 or API keys to make sure only the right people (or programs) get in. Also, set up rules so only certain folks can access specific parts of the API.\n\n## 2. Secret Language: SSL/TLS Encryption\n\nWhen your data travels from one place to another, it's like sending a secret message. To keep it safe from eavesdroppers or sneaky middlemen, use SSL or TLS encryption. It's like putting your message in an unbreakable code so that even if someone tries to read it, they won't understand a thing.\n\n## 3. Checking IDs: Input Validation\n\nImagine if your API accepts any kind of information without checking. It's like letting strangers into your club without checking their IDs. Input validation makes sure that the data your API receives is what it expects. This way, you avoid unexpected issues or potential attacks that could mess up your system.\n\n## 4. Playing Fair: Rate Limiting\n\nJust like a game, make sure everyone plays fair with rate limiting. This means setting rules on how many requests someone can make in a specific time. It prevents cheaters from trying to flood your system with requests, causing chaos.\n\n## 5. Watchful Eyes: Logging and Monitoring\n\nImagine having security cameras everywhere in your club. That's what logging and monitoring do for your API—they keep an eye on everything. Regularly check the logs to catch anything fishy and set up alarms for anything unusual. It's like having your own superhero surveillance system.\n\n## 6. Safety Checks: Regular Security Audits\n\nThink of security audits like health checkups for your API. Regularly assess it for weaknesses and fix any issues you find. Stay updated on the latest online threats, and if you want a second opinion, bring in outside experts to make sure your API is in tip-top shape.\n\n## 7. Central Command: API Gateway\n\nMake life easier by using an API gateway. It's like having a central command center for your API traffic. It helps with authentication, authorization, rate limiting, and keeps a neat record of everything. It's like the superhero HQ for your API's security.\n\n## Conclusion\n\nSecuring your API is like building a fortress—it's a mix of planning and using the right tools. Focus on things like authentication, encryption, input validation, rate limiting, monitoring, regular checkups, and using an API gateway. Remember, a secure API not only protects your data and systems but also builds trust, making your digital adventures more successful in the long run. Stay safe out there!",
      image:
        'https://images.unsplash.com/photo-1586661615438-349a276d098b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 1,
      title: 'Unlocking Security with JSON Web Tokens (JWT)',
      content:
        "In the ever-evolving landscape of web development and data exchange, ensuring secure communication between parties is paramount. JSON Web Tokens (JWT) have emerged as a robust solution for authentication and data integrity, providing a streamlined way to transmit information securely between parties. Let's delve into the world of JWT and explore how it has become a cornerstone for secure web applications.\n\nLet's break down what JSON Web Tokens (JWT) are in simpler terms:\n\nJSON Web Tokens (JWT) are like secret messages that people on the internet use to talk securely. Imagine you and a friend passing notes to each other, but these notes are special. They're small, safe to send over the internet, and can only be read by you and your friend.\n\nNow, these special notes have three parts:\n\nHeader: This is like the title of the note. It says what kind of note it is and how it's kept safe. Think of it as the cover page.\n\nPayload: This is the actual message inside the note. It contains things you want to share, like who you are or some extra details. These details are put in pairs, like a list.\n\nSignature: This is like your secret code at the end of the note. It's a way for you and your friend to make sure the note hasn't been changed and that it really came from you.\n\nNow, why do people use these special notes (JWT)? Here are a few reasons:\n\nAuthentication: When you log in to a website, it sends you a special note (JWT). When you want to do something else on the site, you show this note to prove it's really you, so you don't have to log in every time.\n\nAuthorization: This note can also say what you're allowed to do, like whether you can see certain parts of a website or not.\n\nSharing Information: These notes are handy for sharing information securely between different parts of a website. It's like passing notes between different groups without worrying that someone else might read them.\n\nNow, these special notes have some cool benefits:\n\nNo Need for Constant Checking: The note carries all the important information, so the website doesn't have to keep asking a central server all the time. This makes things work faster.\n\nWorks Everywhere: These notes can be understood by different types of websites and apps. It's like using the same kind of language so that everyone can talk to each other.\n\nLess Work for the Computer: Since the note has everything it needs, the computer doesn't have to keep asking a big database for information all the time. This helps the computer work better and faster.\n\nIn the end, these special notes (JWT) have become a super useful tool for web developers. They help keep things safe, let different parts of a website talk to each other easily, and make the whole internet experience smoother and more secure. So, don't be surprised if you hear a lot about JWTs in the world of web development!",
      image:
        'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
