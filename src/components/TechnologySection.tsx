import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";
import Stack from "./Stack";
import "../css/technology-section.css";

interface TechnologySectionProps {
  technologies: Technology[];
  stack: Technology[];
  onAddToStack: (technology: Technology) => void;
  onRemoveFromStack: (id: string) => void;
  onRemoveAll: () => void;
}

function TechnologySection({
  technologies,
  stack,
  onAddToStack,
  onRemoveFromStack,
  onRemoveAll
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
    onAddToStack={onAddToStack}
    onRemoveFromStack={onRemoveFromStack}

    isAdded={stack.some(
      (item) => item.id === technology.id
    )}
  />
))}
          </div>
        </div>

        <Stack stack={stack} onRemoveFromStack={onRemoveFromStack} onRemoveAll={onRemoveAll} />

      </div>
    </section>
  );
}

export default TechnologySection;