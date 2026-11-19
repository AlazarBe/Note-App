function Composer({ editingId, title, content, handleNote }) {
  return (
    <section className="composer" aria-labelledby="composer-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            {editingId !== null ? "MAKE A CHANGE" : "GET IT DOWN"}
          </p>
          <h2 id="composer-title">
            {editingId !== null ? "Edit your note" : "What’s on your mind?"}
          </h2>
        </div>
        <span className="composer-icon" aria-hidden="true">
          ✎
        </span>
      </div>
      <label className="sr-only" htmlFor="note-title">
        Note title
      </label>
      <input
        id="note-title"
        className="note-title-input"
        type="text"
        value={title}
        placeholder="Give your note a title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <label className="sr-only" htmlFor="note-content">
        Note content
      </label>
      <textarea
        id="note-content"
        className="note-content-input"
        value={content}
        placeholder="Start writing here..."
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="composer-footer">
        <span className="helper-text">
          A thought saved is a thought remembered.
        </span>
        <div className="form-actions">
          {editingId !== null && (
            <button
              className="button button-secondary"
              onClick={handleCancelEdit}
            >
              Cancel
            </button>
          )}
          <button className="button button-primary" onClick={handleNote}>
            <span aria-hidden="true">{editingId !== null ? "✓" : "+"}</span>
            {editingId !== null ? "Save changes" : "Add note"}
          </button>
        </div>
      </div>
    </section>
  );
}
export default Composer;
