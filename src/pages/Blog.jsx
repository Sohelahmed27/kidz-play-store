// import faq from '../assets/faq1.jpg'
import fq from '../assets/fq.jpg'

const Blog = () => {
  return (
    <div className="flex">
      <div>
        <img src={fq} alt="" />
      </div>
      <div>
        <div>
          <h1>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
          <p></p>
        </div>
        <div>
          <h1>Difference between SQL and NoSQL databases?</h1>
          <p></p>
        </div>
        <div>
          <h1>What is express js? What is Nest JS? 

              </h1>
          <p></p>
        </div>
        <div>
          <h1>What is MongoDB aggregate and how does it work?</h1>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Blog;