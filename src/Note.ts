export interface Note {
  id: string;
  title: string;
  content: string;
}

export const notes: Note[] = [
  {
    id: "1",
    title: "First Note",
    content: "This is the first note.",
  },
  {
    id: "2",
    title: "Second Note",
    content: "This is the second note. ".repeat(10),
  },
  {
    id: "3",
    title: "Third Note",
    content: "This is the third note. ".repeat(30),
  },
];

export const all_notes = [
  ...notes,
  ...notes,
  ...notes,
  ...notes,
  ...notes,
  ...notes,
  ...notes,
  ...notes,
  ...notes,
  ...notes,
  ...notes,
  ...notes,
  ...notes,
  ...notes,
  ...notes,
  ...notes,
  ...notes,
  ...notes,
].map((note, index) => ({
  ...note,
  id: (index + 1).toString(),
}));
