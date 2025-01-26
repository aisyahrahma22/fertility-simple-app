import React from "react";
import "../support/footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer inverse">
      {/* Section 1 */}
      <div className="section-1">
        <a href="/courses" className="underline font-semibold">
          <img src="/footer-logo-1.svg" alt="logo-1" className="logo-1" />
        </a>
      </div>

      {/* Section 2 */}
      <div className="section-2">
        <img src="/footer-logo-2.svg" alt="logo-2" className="logo-2" />
        <img src="/deborah.jpg" alt="profile" className="pictures" />
      </div>

      {/* Section 3 */}
      <div className="section-3">
        <div className="section3-row">
          <a href="/courses" className="underline font-semibold">Courses</a>
          <a href="#" className="underline font-semibold">Find a Doctor</a>
          <a href="#" className="underline font-semibold">Share a Review</a>
          <a href="#" className="underline font-semibold">For Employers</a>
          <a href="#" className="underline font-semibold">For Doctors and Clinics</a>
          <a href="#" className="underline font-semibold">All US Providers</a>
        </div>
        <div className="section3-row">
          <a href="mailto:info@fertilityiq.com" className="underline font-semibold">info@fertilityiq.com</a>
          <a href="#" className="underline font-semibold">Terms of Use</a>
          <a href="#" className="underline font-semibold">Privacy Policy</a>
          <a href="#" className="underline font-semibold">FAQs</a>
        </div>
      </div>

      {/* Duplicate Section */}
      <div className="section-duplicate">
        <img src="/footer-logo-2.svg" alt="logo-2" className="logo-2" />
        <img src="/deborah.jpg" alt="profile" className="pictures" />
      </div>

      {/* Footer End Note */}
      <div className="section-end">
        Our content is for informational purposes only — it is not a substitute for medical advice, diagnosis, or treatment.
      </div>
    </footer>
  );
};

export default Footer;
