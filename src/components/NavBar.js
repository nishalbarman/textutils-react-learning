import React from "react";
import PropTypes from "prop-types";

export default function NavBar(props) {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={
          props.mode === "light"
            ? { backgroundColor: "white" }
            : { backgroundColor: "black" }
        }>
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="/"
            style={
              props.mode === "light" ? { color: "black" } : { color: "white" }
            }>
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="/"
                  style={
                    props.mode === "light"
                      ? { color: "black" }
                      : { color: "white" }
                  }>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/"
                  style={
                    props.mode === "light"
                      ? { color: "black" }
                      : { color: "white" }
                  }>
                  About US
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={
                    props.mode === "light"
                      ? { color: "black" }
                      : { color: "white" }
                  }>
                  More
                </a>
                <ul
                  className="dropdown-menu"
                  style={
                    props.mode === "light"
                      ? {}
                      : {
                          backgroundColor: "black",
                          border: "1px solid white",
                        }
                  }>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/"
                      style={
                        props.mode === "light"
                          ? { color: "black" }
                          : { color: "white" }
                      }>
                      Download
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/"
                      style={
                        props.mode === "light"
                          ? { color: "black" }
                          : { color: "white" }
                      }>
                      Upload
                    </a>
                  </li>
                  <li>
                    <hr
                      className="dropdown-divider"
                      style={
                        props.mode === "light"
                          ? { color: "black" }
                          : { color: "white", backgroundColor: "white" }
                      }
                    />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/"
                      style={
                        props.mode === "light"
                          ? { color: "black" }
                          : { color: "white" }
                      }>
                      Share
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="/"
                  style={
                    props.mode === "light"
                      ? { color: "black" }
                      : { color: "white" }
                  }>
                  Hire Me
                </a>
              </li>
            </ul>

            {/* <div className="mx-5">
              <button
                type="button"
                className="btn btn-success"
                style={(btnStyle, { fontSize: fontSize + "rem" })}
                onClick={handleFontSize}>
                A+
              </button>
              <br />
            </div> */}

            <div className="mx-5">
              <button
                type="button"
                className="btn btn-light"
                style={
                  props.mode === "light"
                    ? { color: "black" }
                    : {
                        color: "white",
                        backgroundColor: "black",
                        border: "1px solid white",
                      }
                }
                onClick={props.toogleMode}>
                {props.switchBtn}
              </button>
              <br />
            </div>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={
                  props.mode === "dark"
                    ? {
                        backgroundColor: "black",
                        ouline: "1px solid white",
                        color: "white",
                      }
                    : {}
                }
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                style={
                  props.mode === "light"
                    ? { color: "black" }
                    : { color: "white" }
                }>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
};

NavBar.defaultProps = {
  title: "Title",
};

// function NavBar() {
//   return (
//     <>

//     </>
//   );
// }

// export default NavBar;
