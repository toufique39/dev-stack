import "../css/stack.css";

function Stack() {
  return (
    <aside className="stack-panel">

      <div className="stack-header">
        <div>
          <p className="stack-label">YOUR COLLECTION</p>
          <h3>Your Stack</h3>
        </div>

        <span className="stack-count">
          0
        </span>
      </div>

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

      <button className="remove-all-btn">
        Remove All
      </button>

    </aside>
  );
}

export default Stack;