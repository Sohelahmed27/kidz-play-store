// import faq from '../assets/faq1.jpg'
import fq from "../assets/fq.jpg";

const Blog = () => {
  return (
    <div className="flex flex-col bg-[#11468F]">
      <div>
        <img src={fq} alt="" style={{width: '100%', height: '400px'}}/>
      </div>
      <div className="container">
        <div className="mt-10 p-10 border">
          <h1 className="text-2xl font-bold text-emerald-500">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h1>
          <p className="text-xl bg-slate-300 p-2 rounded mt-4">
            An access token is a temporary credential that verifies identity and
            allows to access specific resources. It has a limited lifespan.
            <br />
            A refresh token is a long-lasting credential that helps to obtain a
            new access token when the current one expires. It ensures secure
            authentication process for non-native speakers and helps protect
            sensitive information.
            <br />
            Access tokens and refresh tokens work together in an authentication
            system. The access token is used for authentication and
            authorization during requests, while the refresh token is used to
            obtain a new access token when the current one expires. The tokens
            are securely stored on the client-side, with the access token
            typically stored in memory or a browser cookie, and the refresh
            token stored in a secure HTTP-only cookie or local storage. This
            ensures secure and seamless user authentication and access to
            protected resources.
          </p>
        </div>
        <div className="mt-10 p-10 border">
          <h1 className="text-2xl font-bold text-emerald-500">
            Difference between SQL and NoSQL databases?
          </h1>

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
                  <td>
                    These databases have fixed or static or predefined schema
                  </td>
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
        <div className="mt-10 p-10 border">
          <h1 className="text-2xl font-bold text-emerald-500">
            What is express js? What is Nest JS?
          </h1>
          <p className="text-xl bg-slate-300 p-2 rounded mt-4">
            <strong> Express JS</strong> is a Node.js framework designed to
            build API's web applications. It is used to build a single page,
            multipage, and hybrid web application.
            <br />
            <strong>Next.js </strong> is a framework for building React applications that simplifies the process of creating server-rendered and statically-generated websites. It provides an easy and efficient way to develop robust and performant web applications using React, making it suitable for non-native speakers to create dynamic websites with ease.
          </p>
        </div>
        <div className="mt-10 p-10 border">
          <h1 className="text-2xl font-bold text-emerald-500">
            What is MongoDB aggregate and how does it work?
          </h1>
          <p className="text-xl bg-slate-300 p-2 rounded mt-4">
            {" "}
            MongoDB aggregation operations process the data and it is return
            computed results. It collects values from various documents, then
            aggregates them together. After then, it performs different types of
            operations on that grouped data like sum, average, minimum, maximum,
            etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
