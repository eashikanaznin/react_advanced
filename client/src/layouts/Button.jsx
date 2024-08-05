export function Button({ type, to, title, isActive, onToggle, children }) {
  return (
    <>
      {type === "mode-icon" && (
        <div className={`icon-button ${isActive ? "active" : ""}`}>
          <button className="dropdown-button" onClick={onToggle}>
            🌓
          </button>
          {isActive && children}
        </div>
      )}

      {type === "link" && (
        <a
          href={to}
          className={`link-button ${isActive ? "active" : ""}`}
          onClick={onToggle}
        >
          {title}
        </a>
      )}

      {type === "dropdown" && (
        <div className={`dropdown ${isActive ? "active" : ""}`}>
          <button className="dropdown-button" onClick={onToggle}>
            {title}
          </button>
          {isActive && children}
        </div>
      )}

      {type === "login" && (
        <button
          className={`login-button ${isActive ? "active" : ""}`}
          onClick={onToggle}
        >
          <a href={to}>{title}</a>
        </button>
      )}

      {type === "logged-in" && (
        <div className={`logged-in-menu ${isActive ? "active" : ""}`}>
          <span onClick={onToggle}>{title}</span>
          {isActive && children}
        </div>
      )}
    </>
  );
}
