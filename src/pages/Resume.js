import './Resume.css';

const Resume = () => {
  return (
    <div>
      <div className="resume-content">
        <h1>Resume</h1>
        <div className="section">
          <h2 className="section-header">
            Software Engineering Knowledge and Skills
          </h2>
          <ul className="resume-ul">
            <li className="resume-li">
              <p className="list-text">
                Experienced in object-oriented programming; developing, testing
                and debugging code; designing interfaces; administering systems
                and networks.
              </p>
            </li>
            <li className="resume-li">
              <p className="list-text">
                Experience in designing and writing software using agile
                methodology as part of a scrum team.
              </p>
            </li>
            <li className="resume-li">
              <p className="list-text">
                Quickly learn and master new technologies; successful working in
                both team and self-directed settings.
              </p>
            </li>
          </ul>
        </div>
        <div className="section">
          <h2 className="section-header">Education</h2>
          <div className="span-group">
            <span className="bold">Portland Community College, </span>
            <span>Portland, Oregon</span>
          </div>
          <div className="span-group">
            <span className="bold">Associate of General Studies, </span>
            <span>Transferred to PSU: January 2021</span>
          </div>
          <ul className="resume-ul">
            <li className="resume-li">
              <p className="list-text">
                Academic Honors: President’s List (7 terms), Dean’s List (1
                term)
              </p>
            </li>
            <li className="resume-li">
              <p className="list-text">3.84 GPA</p>
            </li>
          </ul>
          <br />
          <div className="span-group">
            <span className="bold">Portland State University, </span>
            <span>Portland, Oregon</span>
          </div>
          <div className="span-group">
            <span className="bold">
              Bachelor of Science in Computer Science,
            </span>
            <span> Graduation: March 2023</span>
          </div>
          <ul className="resume-ul">
            <li className="resume-li">
              <p className="list-text">
                Academic Honors: President’s List (4 terms)
              </p>
            </li>
            <li className="resume-li">
              <p className="list-text">
                4.0 University GPA, 3.90 Cumulative GPA
              </p>
            </li>
          </ul>
          <br />
          <p className="resume-p">Courses of Note Completed:</p>
          <ul className="resume-ul">
            <li className="resume-li">
              <p className="list-text">Software Engineering Capstone</p>
            </li>
            <li className="resume-li">
              <p className="list-text">CS 465P Full Stack Web Development</p>
            </li>
            <li className="resume-li">
              <p className="list-text">CS 410 Intro. to Web Development</p>
            </li>
            <li className="resume-li">
              <p className="list-text">
                CS 486 Intro. to Database Management Systems
              </p>
            </li>
            <li className="resume-li">
              <p className="list-text">
                CS 300 Elements of Software Engineering
              </p>
            </li>
            <li className="resume-li">
              <p className="list-text">CS 333 Intro. to Operating Systems</p>
            </li>
            <li className="resume-li">
              <p className="list-text">CS 410P Code Revision & Review</p>
            </li>
            <li className="resume-li">
              <p className="list-text">CS 415P Parallel Programming</p>
            </li>
            <li className="resume-li">
              <p className="list-text">Math up to Calculus IV</p>
            </li>
          </ul>
        </div>
        <div className="section">
          <h2 className="section-header">Work Experience</h2>
          <div className="span-group">
            <span className="bold">Computer Science Tutor, </span>
            <span>September 2018 to January 2023</span>
          </div>
          <ul className="resume-ul">
            <li className="resume-li">
              <p className="list-text">
                Reviewed computer science and math class material with students
                to support discovery of correct answers to problems.
              </p>
            </li>
            <li>
              <p className="list-text">
                Tracked and analyzed student progress to provide relevant
                feedback to students.
              </p>
            </li>
            <li>
              <p className="list-text">
                Encouraged students with supportive language and patient
                teaching approaches.
              </p>
            </li>
          </ul>
          <div className="span-group">
            <span className="bold">Home Restoration and Remodeling, </span>
            <span>September 2016 to January 2023</span>
          </div>
          <ul className="resume-ul">
            <li className="resume-li">
              <p className="list-text">
                Helped project managers develop work schedules for overall
                projects and individual stages.
              </p>
            </li>
            <li>
              <p className="list-text">
                Followed instructions from construction project managers and
                supervisors.
              </p>
            </li>
            <li>
              <p className="list-text">
                Collaborated with a small team of diverse skill sets.
              </p>
            </li>
          </ul>
        </div>
        <div className="section">
          <h2 className="section-header">Technology Summary</h2>
          <ul className="resume-ul">
            <li className="resume-li">
              <p className="list-text">
                Most Proficient: JavaScript, TypeScript, React.js, React Native,
                HTML, CSS, C++, Linux, Windows
              </p>
            </li>
            <li className="resume-li">
              <p className="list-text">
                Proficient: C, Java, Express.js, Node.js, MongoDB
              </p>
            </li>
            <li className="resume-li">
              <p className="list-text">
                Some Experience: Angular.js, Vue.js, Spring Boot, Python,
                Haskell, Chapel, Fortran, MPI, OpenMP
              </p>
            </li>
          </ul>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Resume;
