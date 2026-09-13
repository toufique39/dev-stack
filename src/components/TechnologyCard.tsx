import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
}

function TechnologyCard({
  technology,
}: TechnologyCardProps) {
  return (
    <div className="technology-card">
      <img  className="technology-icon"
        src={technology.icon}
        alt={technology.name}
      />

      <span>{technology.badge}</span>

      <h3>{technology.name}</h3>

      <p>{technology.description}</p>

      <span>{technology.category}</span>

      <span>{technology.difficulty}</span>

      <span>⭐ {technology.rating}</span>

      <button>Add to Stack</button>
    </div>
  );
}

export default TechnologyCard;