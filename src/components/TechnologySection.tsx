import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";
import Stack from "./Stack";
import "../css/technology-section.css";

interface TechnologySectionProps {
  technologies: Technology[];
}

function TechnologySection({
  technologies,
}: TechnologySectionProps) {
  return (
    <section className="technology-section" id="technologies">
      <div className="technology-container">

        <div className="technology-main">
          <div className="section-heading">
            <p className="section-label">Explore Our Collection</p>

            <h2>
              Choose Your
              <span className="gradient-text"> Technologies</span>
            </h2>

            <p>
              Explore popular technologies and build the perfect
              development stack for your next project.
            </p>
          </div>

          <div className="technology-grid">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
              />
            ))}
          </div>
        </div>

        <Stack />

      </div>
    </section>
  );
}

export default TechnologySection;