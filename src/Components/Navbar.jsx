import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  //Event listener for addiing and removing fixed class to navbar
  window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".nav2");
    let sticky = navbar.offsetTop;

    if (window.scrollY > sticky) {
      navbar.classList.add("fixed-nav");
    } else {
      navbar.classList.remove("fixed-nav");
    }
  });
  return (
    <div className="">
      <div className="nav2">
        <nav className="navbar navbar-expand-lg navbar-warning bg-warning">
          <div className="container-fluid">
            <h1 className="navbar-brand">CWorld</h1>
            <button
              className="navbar-toggler-warning hiddenonlap"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <Link to="/" className="nav-link active" aria-current="page">
                  <li className="nav-item">Home</li>
                </Link>
                <Link to="/about" className="nav-link">
                  <li className="nav-item">About</li>
                </Link>
                <Link to="/blog" className="nav-link">
                  <li className="nav-item">Blog</li>
                </Link>
                <Link to="/partners" className="nav-link">
                  <li className="nav-item">Partners</li>
                </Link>
                <Link to="/faq" className="nav-link">
                  <li className="nav-item">Faq</li>
                </Link>
                <li className="nav-item">
                  <a className="btn btn-warning navbar-btn">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
