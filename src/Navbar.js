import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>United Technologies</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/skeletalscreen">Skeletal Sc.</Link>
        <Link to="/chart">Charts</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>New Blog</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;