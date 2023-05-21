// import faq from '../assets/faq1.jpg'
import fq from "../assets/fq.jpg";

const Blog = () => {
  return (
    <div className="flex">
      <div>
        <img src={fq} alt="" />
      </div>
      <div>
        <div>
          <h1>
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h1>
          <p></p>
        </div>
        <div>
          <h1>Difference between SQL and NoSQL databases?</h1>

          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* head*/}
              <thead>
                <tr>
                  <th></th>
                  <th>SQL</th>
                  <th>NoSQL</th>
                  
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>Relational database system.</td>
                  <td>Non-relational or distributed database system.</td>
                  
                </tr>
                {/* row 2 */}
                <tr className="active">
                  <th>2</th>
                  <td>These databases have fixed or static or predefined schema</td>
                  <td>They have a dynamic schema</td>
                  
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3</th>
                  <td>These databases are best suited for complex queries</td>
                  <td>These databases are not so good for complex queries</td>
                 
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h1>What is express js? What is Nest JS?</h1>
          <p>
         <strong> Express JS</strong> is a Node.js framework designed to build API's web applications. It is used to build a single page, multipage, and hybrid web application.
         <br />
         <strong>Next.js is a React framework which ease large scale applications</strong>
          </p>
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
