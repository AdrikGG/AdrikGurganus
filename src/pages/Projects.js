import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-content">
      <h1 className="projects-header">Previous Projects</h1>
      <div className="project">
        <h2 className="project-header">Capstone Project</h2>
        <div className="description">
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
          <p>
            Initially, my role for this project was to handle the research,
            design and implementation of most of the backend; the data
            structure, storage, optimization, integration with the language
            packs, and, of course, documentation and presentations for all my
            work. I took on more responsibility in the project as time went on
            and multiple members of the team consistently underdelivered. I
            worked on bug fixing and rewriting insufficient frontend components,
            creating missing frontend components, integrating existing
            components with the backend and assisting in UI design and
            implementation. I was also responsible for creating and testing the
            production builds. In the end, I was responsible for a very large
            portion of the app and it's code as only half our team put in much
            work.
          </p>
          <h3 className="tech">Tech:</h3>
          <p>TypeScript, React Native, Expo</p>
        </div>
        <div className="link">
          <p>
            I have permission to share this project for the purpose of
            displaying my work, however, the repo is to be kept private.
          </p>
        </div>
      </div>
      <div className="project">
        <h2 className="project-header">SendIt</h2>
        <div className="description">
          <p>
            SendIt is an instant messaging app that I developed in the MERN
            stack over the course of a month when first learning JavaScript. The
            app uses authentication so that users can securely register an
            account and login. When in the app, users are able to create chat
            rooms, delete chat rooms, invite other users to their chat rooms
            and, of course, send messages. The messages are saved within the
            MongoDB database, providing a permanence to every chat room's
            message history. Due to the use of authentication, done with
            jsonwebtoken, users are only allowed to see and enter chat rooms
            that they've created or have been invited to. Similarly, they are
            allowed to access their own account information, but not any other
            user's. Users were also able to delete their accounts and leave chat
            rooms.
          </p>
          <p>
            There is a lot about this project I would change or tweak if I were
            to come back to it, and there is a lot that I'd add as well. I
            showcase this project not because it's perfect, or even up to my
            current standards, but because it demonstrates my ability to quickly
            learn and adapt to complete a task. I'm quite proud of the result
            especially considering the severe time constraints and lack of
            assistance.
          </p>
          <h3 className="tech">Tech:</h3>
          <p>JavaScript, MERN stack (Mongodb, Express, React, Node), CSS</p>
        </div>
        <div className="link">
          <span>Checkout the project's code on </span>
          <a href="https://github.com/AdrikGG/sendit">GitHub!</a>
        </div>
      </div>
      <div className="project">
        <h2 className="project-header">GeoQuiz</h2>
        <div className="description">
          <p>
            This project is a website that hosts a few geography quiz games and
            allows users to create accounts that will save their scores. There
            are three quizzes as of now.
          </p>
          <p>
            The first quiz shows players rotated silhouettes of countries one at
            a time and has players guess the country by name. The second quiz
            shows players a world map, the game selects a random country as the
            target. The player's goal is to play hot and cold, guessing
            countries, until they find the target. Each wrong guess colors the
            guessed country based on its distance from the target on a gradient
            from blue (far) to red (near). When the target is guessed, all
            countries are colored in and the game ends. The third quiz is an
            island identification game for the Malay archipelago. Players have
            the option of picking one of five difficulties and a mode of play,
            clicking or typing. The difficulty options choose an area threshold,
            excluding smaller islands from play. The clicking mode gives the
            player the name of islands, one at a time, requiring them to click
            on that island. If they click the correct island, it fills in green,
            if they skip, it fills in red. Ending the quiz early fills in all
            unidentified islands with red. The typing mode simply allows players
            to type any island in play in any order, filling in guessed islands
            with green.
          </p>
          <p>
            Users of the site also have the option of creating an account and
            logging in to keep track of their scores and get put on the leader
            board. Users are authenticated using jsonwebtoken, making sure they
            can only manipulate their own accounts.
          </p>
          <p>
            This has been a passion project that I have been working on bit by
            bit for a while. I have developed early versions of the quizzes as
            stand-alone apps using Java and C++. I combined them into a website,
            rewriting the projects in JavaScript, as part of a school project.
            Since then, I have continued development here and there, including
            adding another quiz.
          </p>
          <p>This project is currently a work in progress.</p>
          <h3 className="tech">Tech:</h3>
          <p>JavaScript, MERN stack (Mongodb, Express, React, Node), CSS</p>
        </div>
        <div className="link">
          <span>Checkout the project's code on </span>
          <a href="https://github.com/AdrikGG/FullStackFinal">GitHub!</a>
        </div>
      </div>
      <div className="project">
        <h2 className="project-header">Full Stack Homework</h2>
        <div className="description">
          <p>
            A collection of small JavaScript programs highlighting different
            aspects of JavaScript and full stack web development.
          </p>
          <h3 className="tech">Tech:</h3>
          <p>JavaScript, HTML, CSS, Bootstrap, Express, Pug</p>
        </div>
        <div className="link">
          <span>Checkout the code on </span>
          <a href="https://github.com/AdrikGG/FullStackWebDev">GitHub!</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
