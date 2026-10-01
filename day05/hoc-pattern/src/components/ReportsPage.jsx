const ReportsPage = ({ hasPermission }) => {
  return (
    <article
      className={`result-card result-card--${hasPermission ? "success" : "denied"}`}
    >
      <div className="result-card__topline">
        <span className="value-badge">Required: report</span>
        <span
          className={`status-badge status-badge--${hasPermission ? "success" : "denied"}`}
        >
          <span className="status-icon" aria-hidden="true">
            {hasPermission ? "✓" : "×"}
          </span>
          {hasPermission ? "Access granted" : "Access denied"}
        </span>
      </div>

      <h3>{hasPermission ? "Reports available" : "Reports unavailable"}</h3>
      <p>
        {hasPermission
          ? "The current user has the required report permission."
          : "The current user does not have the required report permission."}
      </p>

      <dl className="value-comparison">
        <div>
          <dt>Required permission</dt>
          <dd>report</dd>
        </div>
        <div>
          <dt>Permission result</dt>
          <dd>{hasPermission ? "Present" : "Missing"}</dd>
        </div>
      </dl>
    </article>
  );
};

export default ReportsPage;
