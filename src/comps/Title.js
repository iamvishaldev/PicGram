import React from "react";
import { signInWithGoogle } from "../firbase/config";

const Title = () => {
  return (
    <div className="title">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand" href="#">
          <h1>PicGram</h1>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <button className="sigin-button" onClick={signInWithGoogle}>
                  Signin
                </button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <h2>Your Pictures</h2>
      <p>Upload your images and check them on the site</p>
    </div>
  );
};

export default Title;
