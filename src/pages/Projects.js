import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-content">
      <h1 className="projects-header">Previous Projects</h1>
      <div className="project">
        <h2 className="project-header">Capstone Project</h2>
        <div className="description">
          <h3 className="section">Description:</h3>
          <p>
            I, along with the seven others in my capstone team, worked to
            develop an app that allows users to translate their medical
            information. This worked by having users fill out a large form that
            described their personal medical history, then, by choosing one of
            the available languages, the form text would be swapped with a
            professionally translated copy while maintaining the user's inputs.
            This app aimed to tackle the issue of communicating medical
            information in a situation where you don't speak the language of the
            medical professionals, for example when traveling. Users are able to
            create multiple of these forms as profiles and edit them whenever
            they like. All the data is stored locally to limit the vulnerability
            of users' sensitive medical data, avoid any possible HIPAA
            violations, and allow use of the app even when the user doesn't have
            access to the internet. Edits to profiles are saved as soon as they
            are made to make the process more user friendly and to minimize the
            chance that a user's inputs go unsaved without them knowing.
          </p>
          <h3 className="section">Responsibilities:</h3>
          <p>
            Initially, my role for this project was to handle the research,
            design and implementation of most of the backend; the data
            structure, storage, optimization, integration with the language
            packs, and, of course, documentation and presentations for all my
            work. I took on more responsibility in the project as time went on.
            I worked on bug fixing and rewriting insufficient frontend
            components, creating missing frontend components, integrating
            existing components with the backend and assisting in UI design and
            implementation. I was also responsible for testing the production
            builds. In the end, I was responsible for a very large portion of
            the app and it's code as I took on more tasks to deliver as much of
            what we had planned as possible.
          </p>
          <h3 className="section">Key Takeaways:</h3>
          <p>
            Our group self imposed the agile method for the development of this
            app, including defining a rough scope, planning features by defining
            plausible user stories that would justify each feature, defining the
            architecture of the app, and getting together frequently for scrums
            to discuss our progress and issues during our two week sprints. This
            process taught me more about how to communicate my work verbally and
            through documentation and how to respond to the progress of others
            on my team.
          </p>
          <p>
            Additionally, I gained some valuable leadership experience as I lead
            development of more and more portions of the app. It was also a
            great opportunity for me to improve my TypeScript, React / React
            Native, algorithm and optimization skills.
          </p>
          <h3 className="section">Tech:</h3>
          <p>TypeScript, React Native, Expo</p>
        </div>
        <div className="link">
          <p>
            I have permission to share this project for the purpose of
            displaying my work, including version of the app (a couple updates
            old) on my phone, however, the repository must be kept private.
          </p>
        </div>
      </div>
      <div className="project">
        <h2 className="project-header">GeoQuiz</h2>
        <div className="description">
          <p>
            This project is a website that hosts a few geography quiz games and
            allows users to create accounts that will save their scores. There
            are three quizzes as of now, more are to be added in the future.
          </p>
          <p>This project is currently a work in progress.</p>
          <h3 className="section">Key Takeaways:</h3>
          <p>
            While I had developed some precursors to this app, the web version
            was initially a group project that included two others. I took the
            role of lead developer, directing the project's overall development,
            though not stopping anyone from implementing their own ideas. I
            gained some great collaborative experience, working in a fast paced
            environment, making executive decisions on how to limit scope to fit
            our three week time frame.
          </p>
          <p>
            Since the project was turned in, I have decided to continue working
            on it, fixing bugs, adding features, and refactoring existing code.
            I've used the project as an opportunity to expand my knowledge an
            improve my skills in React and UI development.
          </p>
          <h3 className="section">Tech:</h3>
          <p>
            JavaScript, MERN stack (Mongodb, Express, React, Node), CSS,
            Cloudinary
          </p>
        </div>
        <div className="link">
          <span>Check out the project hosted </span>
          <a href="https://adrikgg.github.io/GeoQuiz">here!</a>
        </div>
        <div className="link">
          <span>Learn more about the project by checking it out on </span>
          <a href="https://github.com/AdrikGG/FullStackFinal">GitHub!</a>
        </div>
      </div>
      <div className="project">
        <h2 className="project-header">SendIt</h2>
        <div className="description">
          <p>
            SendIt is an instant messaging app that I developed in the MERN
            stack over the course of a month while first learning JavaScript.
          </p>
          <h3 className="section">Key Takeaways:</h3>
          <p>
            There is a lot about this project I would change or tweak if I were
            to come back to it, and there is a lot that I'd add as well. I
            showcase this project not because it's perfect (it's far from it)
            but because it demonstrates my ability to quickly learn and adapt to
            complete a task. I'm quite proud of the result especially
            considering the severe time constraints and lack of assistance.
          </p>
          <h3 className="section">Tech:</h3>
          <p>JavaScript, MERN stack (Mongodb, Express, React, Node), CSS</p>
        </div>
        <div className="link">
          <span>Check out the project hosted </span>
          <a href="https://adrikgg.github.io/sendit">here!</a>
        </div>
        <div className="link">
          <span>Learn more about the project by checking it out on </span>
          <a href="https://github.com/AdrikGG/sendit">GitHub!</a>
        </div>
      </div>
      <div className="project">
        <h2 className="project-header">Mandelbrot Set Visualizer</h2>
        <div className="description">
          <p>
            An app for visualizing the Mandelbrot set fractal. There are three
            visualizations, each supporting panning and zooming, one run
            sequentially on the CPU, one parallelized on the CPU and one
            parallelized on the GPU.
          </p>
          <h3 className="section">Key Takeaways:</h3>
          <p>
            This small hobby project was an exercise in optimization. I was
            initially interested in simply rendering the stunning visuals of the
            Mandelbrot set fractal and playing around with the math. However, my
            initial naive approach left a lot to be desired performance wise
            (while zooming). So, I decided this would be a fun project to
            practice some frontend optimizations. I reduced the number of
            operations per render to the bare minimum of what I could with my
            knowledge of the math and React. Not quite satisfied with the
            results, I did a deep dive into available JavaScript frameworks
            compatible with React for parallelization. In the end I made two
            parallel versions, one parallelized on the CPU using web workers
            that was somewhat fast and allowed for a deep zoom (using the
            precision of the JS `number` type), and another parallelized on the
            GPU using WebGL that was very fast, though, with a much shallower
            zoom due to WebGL's precision limitations.
          </p>
          <h3 className="section">Tech:</h3>
          <p>TypeScript, React, WebGL</p>
        </div>
        <div className="link">
          <span>Check out the project hosted </span>
          <a href="https://adrikgg.github.io/Mandelbrot">here!</a>
        </div>
        <div className="link">
          <span>Learn more about the project by checking it out on </span>
          <a href="https://github.com/AdrikGG/Mandelbrot">GitHub!</a>
        </div>
      </div>
      <div className="project">
        <h2 className="project-header">Full Stack Homework</h2>
        <div className="description">
          <p>
            A collection of small JavaScript programs highlighting different
            aspects of JavaScript and full stack web development.
          </p>
          <h3 className="section">Tech:</h3>
          <p>JavaScript, HTML, CSS, Bootstrap, Express, Pug</p>
        </div>
        <div className="link">
          <span>Learn more about the project by checking it out on </span>
          <a href="https://github.com/AdrikGG/FullStackWebDev">GitHub!</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
