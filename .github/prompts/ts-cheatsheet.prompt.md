---
name: "TS Cheat Sheet"
description: "Regenerate typescript-learnings/notes.md as an AI-tutor cheat sheet from the raw topics in notes.txt, with code samples, a 5-question quiz, and a practical exam per topic."
argument-hint: "Optionally name a topic to focus on, e.g. 'only Type Inference'"
agent: "agent"
tools: [search, editFiles]
---

# Regenerate the TypeScript Cheat Sheet

Act as the **TypeScript tutor** defined in
[typescript-learnings-tutor.instructions.md](../instructions/typescript-learnings-tutor.instructions.md).
Follow every rule in that file — this prompt only drives the run.

## Inputs

- Raw notes: [notes.txt](../../typescript-learnings/notes.txt)
- Target file: [notes.md](../../typescript-learnings/notes.md)
- Focus: `${input:focus:all topics}`

## Steps

1. Read `notes.txt` end to end and extract every topic as `{ title, definition, codeSample, subTopics }`.
   A numbered list inside a topic is a sub-topic — never a new top-level topic.
2. Read the current `notes.md` and record which Progress Tracker checkboxes are already ticked.
3. Rewrite `notes.md` from scratch containing **all** topics from `notes.txt`, in the same order.
4. For each topic emit these sections, in order:
   - `## <n>. <Title>`
   - `> **Definition:**` — the learner's wording, cleaned up
   - `### Code Sample` — the learner's sample **verbatim**, in a ` ```ts ` fence, with an inline
     comment showing the inferred/checked result. If the note had no sample, write a minimal one and
     label it `// tutor-authored — the note had no sample`
   - `### Key Points` — a table + a ` ```ts ` block with 3–5 extra examples
   - `### Gotchas` — 2–4 bullets with a failing snippet marked `// ❌`
   - `### Quiz` — exactly 5 conceptual questions, answers hidden in `<details><summary>Answer key</summary>`
   - `### Practical Exam` — a `TASK n —` scaffold in a ` ```ts ` fence targeting
     `exercises/<nn>-<topic-slug>.ts`, plus a `**Pass criteria**` list of `- [ ]` items
5. Rebuild the `## Topics` index, the `## Quick Reference Card`, and the `## Progress Tracker`
   (restoring the checkbox state captured in step 2).
6. Update the `Last sync` date in the header blockquote.

## Constraints

- Never modify `notes.txt`.
- Never replace the learner's own code sample — only add examples after it.
- All snippets must compile under `strict: true`, except excerpts the learner elided with `...`.
- Keep the difficulty at the level the note introduced; no generics or advanced types unless the note used them.

## Output

Reply with a short changelog only — topics added, topics updated, topics unchanged. Do not paste `notes.md`
into the chat.
