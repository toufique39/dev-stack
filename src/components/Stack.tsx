import "../css/stack.css";
import type { Technology } from "../types/technology";

interface StackProps {
  stack: Technology[];

}

function Stack({ stack, onRemoveFromStack, onRemoveAll }: StackProps & { onRemoveFromStack: (id: string) => void; onRemoveAll: () => void }) {
  return (
    <aside className="stack-panel">

      <div className="stack-header">
        <div>
          <p className="stack-label">YOUR COLLECTION</p>
          <h3>Your Stack</h3>
        </div>

        <span className="stack-count">
          {  stack.length}
        </span>
      </div>

      <div className="stack-empty">
        {stack.length === 0 ? (
  <div className="stack-empty">
    <div className="stack-empty-icon">
      +
    </div>

    <h4>Your stack is empty</h4>

    <p>
      Add technologies from the collection to build your
      custom development stack.
    </p>
  </div>
) : (
  <div className="stack-items">
    {stack.map((technology) => (
      <div
        className="stack-item"
        key={technology.id}
      >
        <img
          src={technology.icon}
          alt={technology.name}
        />

        <div>
          <h4>{technology.name}</h4>
          <p>{technology.category}</p>
        </div>

        <button onClick={() => onRemoveFromStack(technology.id)}>
          ✕
        </button>
      </div>
    ))}
  </div>
)}
      </div>

      <button className="remove-all-btn" onClick={onRemoveAll}>
        Remove All
      </button>

    </aside>
  );
}

export default Stack;