import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav className="header">
      <header className="title">Adrik Gurganus</header>
      <CustomLink className="btn about" to="/AdrikGurganus/">
        About
      </CustomLink>
      <CustomLink className="btn work" to="/AdrikGurganus/resume">
        Resume
      </CustomLink>
      <CustomLink className="btn projects" to="/AdrikGurganus/projects">
        Projects
      </CustomLink>
      <CustomLink className="btn contact" to="/AdrikGurganus/contact">
        Contact
      </CustomLink>
    </nav>
  );
};

const CustomLink = ({ to, className, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  className = className + (isActive ? ' active' : '');

  return (
    <Link className={className} to={to} {...props}>
      {children}
    </Link>
  );
};

export default Header;
