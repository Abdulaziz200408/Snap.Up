import React from "react";

function Footer() {
  return (
    <div>
      <footer class="footer bg-red-500">
        <div class="container py-4 text-center">
          <div class="flex align-center justify-center text-white fw-3 fs-14">
            <a class="text-uppercase" href="/">
              privacy policy
            </a>
            <div class="vert-line"></div>
            <a class="text-uppercase" href="/">
              term of service
            </a>
            <div class="vert-line"></div>
            <a class="text-uppercase" href="/">
              About SnapUp.
            </a>
          </div>
          <span class="text-white copyright-text text-manrope fs-14 fw-3">
            © 2022 SnapUp. All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
