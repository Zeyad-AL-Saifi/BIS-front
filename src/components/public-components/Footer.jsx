import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase"> At our special school</h5>

            <p>
              we are dedicated to providing a nurturing and inclusive learning
              environment for students with unique needs. With a team of
              experienced educators and specialized programs, we strive to
              unlock the potential of every student and empower them to thrive
              academically, socially, and emotionally. We believe in fostering a
              supportive community that celebrates diversity and promotes
              holistic development. Join us on this extraordinary educational
              journey
            </p>
          </div>

          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Welcome to Our Special School</h5>

            <p>
              We take pride in being a special school that caters to the diverse
              learning requirements of our students. With a commitment to
              individualized education and personalized support, we create
              tailored learning plans that address the specific needs of each
              student. Our passionate team of teachers and therapists work
              collaboratively to create a safe and engaging environment where
              students can explore their strengths, overcome challenges, and
              achieve their goals. Discover the transformative power of
              education at our special school
            </p>
          </div>
        </div>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright : Zeyad Al-Saifi
      </div>
    </footer>
  );
};

export default Footer;
