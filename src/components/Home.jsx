import { useState, useEffect } from "react";
import Welcome from "./Welcome";
import Header from "./Header";
import Composer from "./Composer";
import Notes from "./Notes";
function Home() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Ideas for the week",
      content:
        "Make time for one thing I’ve been putting off. Keep the plan simple and leave room for a little spontaneity.",
    },
    {
      id: 2,
      title: "A good morning",
      content:
        "Drink a glass of water, open the curtains, and take a few minutes to ease into the day before checking my phone.",
    },
    {
      id: 3,
      title: "Books to read",
      content:
        "The Creative Act — Rick Rubin\nAtomic Habits — James Clear\nPiranesi — Susanna Clarke",
    },
    {
      id: 4,
      title: "Grocery list",
      content:
        "Avocados, lemons, fresh bread, coffee, oats, and something nice for dinner.",
    },
    {
      id: 5,
      title: "Weekend plans",
      content:
        "Visit the farmers market, get outside for a walk, and make time to catch up with a friend.",
    },
    {
      id: 6,
      title: "Remember",
      content:
        "Small steps still count. Focus on what’s in front of me and celebrate the progress.",
    },
  ]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState(null);

  function handleNote() {
    const trimmedTitle = title.trim();
    const trimmedContent = content.trim();

    if (!trimmedContent || !trimmedTitle) {
      alert("please enter both title and content first");
      return;
    }

    if (editingId !== null) {
      setNotes((prev) =>
        prev.map((note) =>
          note.id === editingId
            ? { ...note, title: trimmedTitle, content: trimmedContent }
            : note,
        ),
      );
      setEditingId(null);
    } else {
      setNotes((prev) => [
        ...prev,
        {
          id: Date.now(),
          title: trimmedTitle,
          content: trimmedContent,
        },
      ]);
    }

    setTitle("");
    setContent("");
  }
  function handleDelete(id) {
    setNotes((prev) => prev.filter((note) => note.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setTitle("");
      setContent("");
    }
  }

  function handleEdit(note) {
    setTitle(note.title);
    setContent(note.content);
    setEditingId(note.id);
  }

  function handleCancelEdit() {
    setEditingId(null);
    setTitle("");
    setContent("");
  }
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");

    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);
  return (
    <main className="notes-app">
      <Header />
      <Welcome />
      <Composer
        editingId={editingId}
        title={title}
        content={content}
        handleNote={handleNote}
      />
      <Notes notes={notes} />

      <footer className="app-footer">
        Made for the thoughts that matter.{" "}
      </footer>
    </main>
  );
}

export default Home;
