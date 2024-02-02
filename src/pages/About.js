import './About.css';

const About = () => {
  return (
    <div className="about-content">
      <h1 className="about-header">About Adrik Gurganus</h1>
      <figure>
        <img
          className="portrait"
          src={require('../images/DrawnPortrait.png')}
          alt="Drawn profile of Adrik"
          width="605"
          height="709"
        />
        <figcaption>Digital self portrait</figcaption>
      </figure>
      <div>
        <h2 className="experience">Background and Experience</h2>
        <p className="paragraph">
          I am Adrik Gurganus (he / him). I am a Computer Science graduate,
          having graduated with an Associates from PCC and a Bachelors of
          Science in Computer Science from PSU in June 2023. I'm a well rounded
          programmer with my strengths being algorithms and backend development
          for websites. I'm on GitHub, @AdrikGG, where I have a handful of
          projects from over the years.
        </p>
        <p className="paragraph">
          Much of my programming experience from PCC and PSU has been with C and
          C++, though I shifted my focus to TypeScript and JavaScript in the
          last year and a half of my degree. From that focus, I've gained
          experience with React, React Native, Express, Node and SQL and NoSQL
          databases. Most of my web dev experience is in using the MERN stack
          (MongoDB, Express, React, Node), though I have also used frameworks
          such as Angular and Vue. I have experience styling web elements using
          solely HTML and CSS, and, alternatively, solely using JSX and custom
          components with inline styles and or Bootstrap, and a mix of all of
          the above. I have designed apps for desktop and mobile use, though I
          most often style apps responsively so that they are suitable for any
          device. I have worked many times in solo and team environments, having
          developed complete apps and exceeding expectations.
        </p>
        <p className="paragraph">
          Through my time in school, I've also gained some experience with a
          handful of other programming languages including Java and Python,
          parallel languages (Chapel and Fortran) and models (MPI and OpenMP),
          and the functional language Haskell.
        </p>
        <p className="paragraph">
          Throughout my time in college, I often helped other CS students,
          mostly lower division, with their computer science and math classes as
          a tutor. I was also a moderator for a Discord server designed to help
          PCC and PSU students study by connecting them with additional
          resources relevant to their projects and courses and with others who
          were taking or had taken their class. I helped make changes to the
          server in response to updates, monitor chat rooms and communicated
          with members, moderated content, and issued warnings or bans when
          necessary. I also often set up and run game servers for friends, often
          writing scripts and mods, on a Linux machine I've built and
          customized.
        </p>
      </div>
      <div>
        <h2 className="hobbies">Hobbies</h2>
        <p className="paragraph">
          I like to build and fix computers. I've helped friends and family
          budget and buy parts and construct their PCs. I've also fixed laptops
          and audio equipment and replaced chips using soldering kits.
        </p>
        <p className="paragraph">
          I like to listen to folk music from cultures and languages from all
          around the world. My favorites of what I have found as of yet have
          been throat singing from Central Asia (Mongolia, Tuva, Kazakhstan,
          etc.) from bands like Khusugtun, Huun-Huur-Tu, and Altai Kai, Latvian
          festival / holiday songs (mostly from Auļi), and some more modern
          Polish folk pop like Burza by Tulia. Due to my particular interest in
          throat singing, I decided to learn how to do it myself and I now
          practice regularly.
        </p>
        <p className="paragraph">
          Another of my hobbies is learning about cultures and languages. Since
          2014 I have been learning Spanish on and off. It's a skill that
          requires constant maintenance. At this time in my life, I can read
          Spanish decently well, but can't speak it as well as I used to. I have
          also dabbled in learning Dutch and French. At this point, my ambitions
          are to improve my Spanish and at some point learn Mongolian.
        </p>
        <p className="paragraph">
          However, my most nerdy passion is for geography, mostly in relation to
          political and demographic boundaries. I have memorized a great deal,
          including countries, their shapes, languages spoken within them, how
          their borders have changed throughout history, their significant
          placenames, and more. I've used this knowledge to draw many fictional
          maps of worlds of my own creation.
        </p>
        <p className="paragraph">
          I also enjoy playing video games with friends and am particularly fond
          strategy games.
        </p>
        <p className="paragraph">
          My last hobby worth note is drawing, most often digitally. I usually
          do portraits like the one of me above, though sometimes I draw
          landscapes as well.
        </p>
      </div>
    </div>
  );
};

export default About;
