import React from "react";

export default function Category() {
  return (
    <div className="Container" id="Category">
      <div className="container text-center">
        <div className="container ">
          <h1 id="mainheadin" className="text-white">
            Connect with music culture
          </h1>

          <div className="flex-container" id="cat">
            <div id="f1">
              <img
                src="https://i.scdn.co/image/ab671c3d0000f4309894eb4527215b7fde79e673"
                alt="hello"
                className="image1"
              />

              <h6 className="headcategory text-white">
                <b>Bollywood Butter</b>
              </h6>
              <p className="para text-white">Finest quality bollywood.</p>
            </div>
            <div id="f1">
              <img
                src="https://i.scdn.co/image/ab671c3d0000f4308180688c87bd403b7a6da8c7"
                alt="hello"
                className="image1"
              />
              <h6 className="headcategory text-white">
                <b>Punjabi 101</b>
              </h6>
              <p className="para text-white">Ultimate punjabi hits.</p>
            </div>
            <div id="f1">
              <img
                src="https://i.scdn.co/image/ab671c3d0000f430ed50366d5d8ba3e7d12fca43"
                alt="hello"
                className="image1"
              />
              <h6 className="headcategory text-white">
                <b>Tollywood Pearls</b>
              </h6>
              <p className="para text-white">Finest Telugu music.</p>
            </div>
            <div id="f1">
              <img
                src="https://i.scdn.co/image/ab671c3d0000f430330523a1b60c1d5e0b31935f"
                alt="hello"
                className="image1"
              />
              <h6 className="headcategory text-white">
                <b>Hot hits India</b>
              </h6>
              <p className="para text-white">Hottest hits across globe!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
