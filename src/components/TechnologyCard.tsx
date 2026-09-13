


import "../css/technology-card.css";
import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  onAddToStack: (technology: Technology) => void;
  onRemoveFromStack: (id: string) => void;
  isAdded: boolean;
}
function TechnologyCard({
  technology,
  onAddToStack,
  isAdded,
}: TechnologyCardProps) {
  return (
    <div className="technology-card">
  <div className="card-top">
    <img
      src={technology.icon}
      alt={technology.name}
      className="technology-icon"
    />

    <span className="technology-badge">
      {technology.badge}
    </span>
  </div>

  <h3>{technology.name}</h3>

  <p>{technology.description}</p>

  <div className="card-meta">
    <span>{technology.category}</span>
    <span>{technology.difficulty}</span>
    <span className="rating">
      ⭐ {technology.rating}
    </span>
  </div>

  <div className="card-bottom">
    <center>
      <button
  onClick={() => onAddToStack(technology)}
  disabled={isAdded}
>
  {isAdded ? "✓ Added to Stack" : "Add to Stack"}
</button>
    </center>
  </div>
</div>
  );
}

export default TechnologyCard;