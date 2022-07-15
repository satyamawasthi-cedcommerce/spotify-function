import React from "react";

export default function Footer() {
  return (
    <div classNameName="Container" id="footerDiv">
      <div className="foot">
        <div className="footerContent">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            alt="..."
            style={{ margin: "11%" }}
          />
        </div>
        <div className="footerContent">
          <h3> COMPANY</h3>
          <p>About</p>
          <p>Jobs</p>
          <p>For the Record</p>
        </div>
        <div className="footerContent">
          <h3> COMMUNITIES</h3>
          <p>For Artists</p>
          <p>Developers</p>
          <p>Advertising</p>
          <p>Investers</p>
          <p>Vendors</p>
        </div>
        <div className="footerContent">
          <h3> USEFUL LINKS</h3>
          <p>Support</p>
          <p>Web Player</p>
          <p>Free Mobile App</p>
        </div>
        <div
          className="footerContent"
          style={{ marginTop: "1%", textAlign: "center" }}
        >
          <p style={{ display: "inline-block" }}>
            <i class="fa-brands fa-instagram"></i>
          </p>
          <p style={{ display: "inline-block" }}>
            <i class="fa-brands fa-twitter"></i>
          </p>
          <p style={{ display: "inline-block" }}>
            <i class="fa-brands fa-facebook-f"></i>
          </p>
        </div>
      </div>
      <div className="lowerFoot">
        <div
          className="lowerLeft"
          style={{
            width: "65%",
          }}
        >
          <p> Legal</p>
          <p> Privacy Center</p>
          <p> Privacy Policy</p>
          <p> Cookies</p>
          <p> About Ads</p>
        </div>
        <div className="lowerRight" style={{ textAlign: "right" }}>
          <p>
            <i class="fa-solid fa-earth-africa"></i> India (English)
          </p>
          <p>&copy; 2022 Spotify AB</p>
        </div>
      </div>
    </div>
  );
}
