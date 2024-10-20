import React from "react";
import { Link } from "react-router-dom";
import resourceImage1 from "../assets/resource1.jpg";
import resourceImage2 from "../assets/resource2.jpg";
import resourceImage3 from "../assets/resource3.jpg";
import { ShootingStars } from "../../i3m-engine/components/ui/shooting-stars";
import { StarsBackground } from "../../i3m-engine/components/ui/stars-background";
import { CardSpotlight } from "../../i3m-engine/components/ui/card-spotlight";

const ResourcesPage = () => {
  return (
    <div className="resources-page relative overflow-hidden bg-i3m-dark text-white">
      {/* Shooting Stars */}
      <ShootingStars className="z-10" />

      {/* Starry Background */}
      <StarsBackground className="z-0" />

      {/* Hero Section */}
      <section className="hero-section text-center py-20 relative z-20">
        <h1 className="text-5xl font-bold">I3M Resources</h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          Explore the latest resources from I3M to help you stay ahead in the 3D
          and blockchain technology space. Whether you're looking for technical
          documentation, tutorials, or case studies, we've got you covered.
        </p>
      </section>

      {/* Featured Resources */}
      <section className="featured-resources my-20 relative z-20">
        <h2 className="text-4xl font-bold text-center mb-10">
          Featured Resources
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="resource-card p-4 i3m-dark rounded-lg shadow-lg">
            <img
              src={resourceImage1}
              alt="Resource 1"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-bold">
              Getting Started with I3M Engine
            </h3>
            <p className="text-lg my-4">
              A comprehensive guide to help you start building immersive 3D
              environments using the I3M Engine.
            </p>
            <a
              href="https://5szzp-oiaaa-aaaak-ao36a-cai.icp0.io/beginning/getting_started.html"
              target="_blank"
              rel="noopener noreferrer"
              className="  text-i3m-pink font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Getting Started →
            </a>
          </div>

          <div className="resource-card p-4 i3m-dark rounded-lg shadow-lg">
            <img
              src={resourceImage2}
              alt="Resource 2"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-bold">Integrating I3M Chain Bridge</h3>
            <p className="text-lg my-4">
              Learn how to integrate I3M's blockchain solutions into your
              existing applications.
            </p>
            <Link
              to="/resources/integrating-chain-bridge"
              className="text-i3m-pink hover:underline"
            >
              Uploading Soon →
            </Link>
          </div>

          <div className="resource-card p-4 i3m-dark rounded-lg shadow-lg">
            <img
              src={resourceImage3}
              alt="Resource 3"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-bold">
              Best Practices for Multiplayer Development
            </h3>
            <p className="text-lg my-4">
              Explore the best practices for creating robust multiplayer
              experiences using I3M tools.
            </p>
            <Link
              to="/resources/multiplayer-best-practices"
              className="text-i3m-pink hover:underline"
            >
              Uploading Soon →
            </Link>
          </div>
        </div>
      </section>

      {/* Documentation & Tutorials */}
      <section className="docs-tutorials my-20 relative z-20">
        <h2 className="text-4xl font-bold text-center mb-10">
          Documentation & Tutorials
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <CardSpotlight className="p-4 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">I3M Engine Documentation</h3>
            <p className="text-lg my-4">
              Comprehensive documentation covering all aspects of the I3M
              Engine.
            </p>
            <a
              href="https://5szzp-oiaaa-aaaak-ao36a-cai.icp0.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              About the Documentation →
            </a>
          </CardSpotlight>

          <CardSpotlight className="p-4 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">
              I3M Chain Bridge Documentation
            </h3>
            <p className="text-lg my-4">
              Detailed documentation on integrating and using I3M's Chain
              Bridge.
            </p>
            <Link
              to="/resources/chain-bridge-docs"
              className="text-i3m-pink hover:underline"
            >
              Upload the Docs Soon →
            </Link>
          </CardSpotlight>

          <CardSpotlight className="p-4 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">I3M Forge Tutorials</h3>
            <p className="text-lg my-4">
              Step-by-step tutorials to help you make the most of I3M Forge
              tools.
            </p>
            <Link
              to="/resources/forge-tutorials"
              className="text-i3m-pink hover:underline"
            >
              Upload the Docs Soon →
            </Link>
          </CardSpotlight>
        </div>
      </section>

      {/* Case Studies */}
      <section className="case-studies my-20 relative z-20">
        <h2 className="text-4xl font-bold text-center mb-10">Case Studies</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <CardSpotlight className="p-4 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">Case Study: Project X</h3>
            <p className="text-lg my-4">
              Discover how Project X leveraged I3M technology to achieve
              groundbreaking results.
            </p>
            <Link
              to="/resources/case-study-project-x"
              className="text-i3m-pink hover:underline"
            >
              Upload the Docs Soon →
            </Link>
          </CardSpotlight>

          <CardSpotlight className="p-4 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">
              Case Study: Virtual Reality Training
            </h3>
            <p className="text-lg my-4">
              Learn how a major corporation used I3M's VR training solutions to
              enhance employee performance.
            </p>
            <Link
              to="/resources/case-study-vr-training"
              className="text-i3m-pink hover:underline"
            >
              Upload the Docs Soon →
            </Link>
          </CardSpotlight>

          <CardSpotlight className="p-4 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">
              Case Study: Blockchain Integration
            </h3>
            <p className="text-lg my-4">
              See how I3M Chain Bridge was integrated into a financial
              application for enhanced security.
            </p>
            <Link
              to="/resources/case-study-blockchain"
              className="text-i3m-pink hover:underline"
            >
              Upload the Docs Soon →
            </Link>
          </CardSpotlight>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
