import React from "react";

export default function Features() {
  return (
    <div className="Container" id="features">
      <div className="container text-center">
        <div className="container ">
          <h1 id="mainheadin">The Power Of Premium</h1>

          <div className="flex-container">
            <div id="f1">
              <img
                src="https://i.scdn.co/image/ab671c3d0000f43098292b95d24a697c20df5137"
                alt="hello"
                className="image"
              />

              <h6 className="headcategory">
                <b>Ad-free music listening</b>
              </h6>
              <p className="para">Enjoy uninterrupted music.</p>
            </div>
            <div id="f1">
              <img
                src="https://i.scdn.co/image/ab671c3d0000f43009302fbaf6259b4c117c704f"
                alt="hello"
                className="image"
              />
              <h6 className="headcategory">
                <b>Offline playback</b>
              </h6>
              <p className="para">Save your data by listening offline.</p>
            </div>
            <div id="f1">
              <img
                src="https://i.scdn.co/image/ab671c3d0000f4306998d3ffd58aad6da6afdf67"
                alt="hello"
                className="image"
              />
              <h6 className="headcategory">
                <b>Play everywhere</b>
              </h6>
              <p className="para">Listen on your speakers, Tv and other</p>
            </div>
            <div id="f1">
              <img
                src="https://i.scdn.co/image/ab671c3d0000f430cd6c528745e510c5be63a012"
                alt="hello"
                className="image"
              />
              <h6 className="headcategory">
                <b>Pay your way</b>
              </h6>
              <p className="para">Prepay with patym,UPI and more.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
