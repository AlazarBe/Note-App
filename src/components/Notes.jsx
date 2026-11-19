function Notes({ notes }) {
  return (
    <section className="notes-section" aria-labelledby="notes-title">
      <div className="notes-heading">
        <div>
          <p className="eyebrow">YOUR COLLECTION</p>
          <h2 id="notes-title">
            All notes <span className="note-count">{notes.length}</span>
          </h2>
        </div>
      </div>
      {notes.length === 0 ? (
        <div className="empty-state">
          <span className="empty-icon" aria-hidden="true">
            ✧
          </span>
          <h3>Your page is still blank</h3>
          <p>Add a note above and it’ll show up here.</p>
        </div>
      ) : (
        <div className="notes-grid">
          {notes.map((note, index) => (
            <article className="note-card" key={note.id}>
              <span className="note-card-accent" aria-hidden="true" />
              <h3>{note.title}</h3>
              <p className="note-card-content">{note.content}</p>
              <div className="note-card-footer">
                <span className="note-number">
                  NOTE {String(index + 1).padStart(2, "0")}
                </span>
                <div className="note-actions">
                  <button
                    className="text-button"
                    onClick={() => handleEdit(note)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-button delete-button"
                    onClick={() => handleDelete(note.id)}
                    aria-label={`Delete ${note.title}`}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
export default Notes;
