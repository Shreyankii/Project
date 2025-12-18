import React from 'react';
import "./Home.css";
import { Briefcase, Users, Star, ArrowRight } from 'lucide-react';

export function Home({ onLoginClick, onSignupClick }) {
  return (
    <div className="page-wrapper">

      
      <header className="header">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="logo">
            <Briefcase size={30} />
            <div>
                <h1>SKILLWAVE</h1>
            </div>
          </div>

          <div className="header-btns">
            <button className="btn btn-outline-primary" onClick={onLoginClick}>Login</button>
            <button className="btn btn-primary" onClick={onSignupClick}>Sign Up</button>
          </div>
        </div>
      </header>

     
      <div className="container main-content">

      
        <section className="hero">
          <h1>Find the Perfect Freelancer</h1>
          <p>Hire skilled freelancers or showcase your talents.</p>
          <button className="btn btn-light btn-large" onClick={onSignupClick}>
            Get Started <ArrowRight size={18} />
          </button>
        </section>

        {/* Features */}
        <section className="features">
          <div className="row g-3">

            <div className="col-4">
              <div className="feature-card">
                <Briefcase size={26} />
                <h3>Post Projects</h3>
                <p>Get proposals instantly.</p>
              </div>
            </div>

            <div className="col-4">
              <div className="feature-card">
                <Users size={26} />
                <h3>Hire Talent</h3>
                <p>Find top freelancers.</p>
              </div>
            </div>

            <div className="col-4">
              <div className="feature-card">
                <Star size={26} />
                <h3>Grow Career</h3>
                <p>Build your portfolio.</p>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
