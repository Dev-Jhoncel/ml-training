# TypeScript Learnings — Cheat Sheet

> **Source:** [notes.txt](notes.txt) · **Mode:** AI Tutor · **Last sync:** 2026-09-15
> Add a new topic to [notes.txt](notes.txt), then re-run `/ts-cheatsheet` to regenerate this file.

---

## Topics

| # | Topic | One-liner | Status |
|---|-------|-----------|--------|
| 1 | [Type Inference](#1-type-inference) | Let TypeScript guess the type for you | Learning |
| 2 | [Type Annotation](#2-type-annotation) | Tell TypeScript the type explicitly | Learning |

---

## 1. Type Inference

> **Definition:** Letting TypeScript guess the data type for you.

### Code Sample

```ts
const name = 'Jhoncel';
// inferred as: const name: "Jhoncel"  (literal type, because of `const`)
```

### Key Points

| Concept | What happens |
|---------|--------------|
| `const name = 'Jhoncel'` | Inferred as the **literal type** `"Jhoncel"` — it can never change |
| `let name = 'Jhoncel'` | Inferred as the **widened type** `string` |
| No type written | TypeScript reads the value on the right side and assigns the type |
| Function return | Inferred from the `return` statement |

```ts
const pi = 3.14;            // 3.14   (literal)
let counter = 0;            // number (widened)
const tags = ['a', 'b'];    // string[]
const user = { id: 1 };     // { id: number }

function add(a: number, b: number) {
  return a + b;             // return type inferred as number
}
```

### Gotchas

- Inference does **not** work on function parameters — those always need annotation.
- `const x = []` infers `never[]`, which blocks every `push`. Annotate it: `const x: string[] = []`.
- An un-initialized `let x;` infers `any` — the type safety is gone.

```ts
let value;          // any  ❌ no safety
value = 5;
value.toUpperCase(); // compiles, crashes at runtime
```

### Quiz

1. What exact type does TypeScript infer for `const city = 'Manila';`?
2. What is the inferred type of `let city = 'Manila';` — and why is it different from #1?
3. Does inference work for function **parameters**? Explain why or why not.
4. What type is inferred for `const scores = [90, 85, 100];`?
5. Why is `const items = [];` considered dangerous?

<details>
<summary>Answer key</summary>

1. The literal type `"Manila"` — `const` bindings can't be reassigned, so TypeScript keeps the narrowest type.
2. `string` — `let` can be reassigned, so TypeScript *widens* the literal to its base type.
3. No. TypeScript has no value to read at the call site when checking the body, so an un-annotated parameter becomes an implicit `any` (an error under `noImplicitAny`).
4. `number[]`.
5. It infers `never[]`, so pushing any value fails to compile.

</details>

### Practical Exam

> **Goal:** prove you can predict what the compiler infers.

Create `exercises/01-inference.ts` and complete these tasks:

```ts
// TASK 1 — Write the inferred type of each in a comment, then verify by hovering.
const firstName = 'Jhoncel';      // type: ???
let age = 25;                     // type: ???
const isActive = true;            // type: ???
const hobbies = ['coding', 'gym']; // type: ???

// TASK 2 — Write a function `multiply` with annotated params but NO return
// annotation. Confirm the return type is inferred as `number`.

// TASK 3 — Fix this so `push` compiles, using inference-friendly code.
const emails = [];
emails.push('jhoncel@example.com'); // ❌ currently fails

// TASK 4 — Explain in a comment why the line below is unsafe.
let mystery;
mystery = 'hello';
mystery = 42;
```

**Pass criteria**

- [ ] All four types in Task 1 are correct.
- [ ] `multiply` compiles with zero annotations on the return.
- [ ] Task 3 compiles with `strict: true`.
- [ ] Task 4 mentions implicit `any`.

---

## 2. Type Annotation

> **Definition:** Declaring the data type explicitly.

### Code Sample

```ts
const name: string = 'Jhoncel';
```

### Key Points

| Where | Syntax |
|-------|--------|
| Variable | `const name: string = 'Jhoncel';` |
| Function parameter | `function greet(name: string) {}` |
| Function return | `function greet(name: string): string {}` |
| Array | `const tags: string[] = [];` |
| Object | `const user: { id: number; name: string } = { id: 1, name: 'Jhoncel' };` |
| Union | `let status: 'idle' \| 'busy' = 'idle';` |

```ts
const name: string = 'Jhoncel';
const age: number = 25;
const isAdmin: boolean = false;
const scores: number[] = [90, 85];

function greet(user: string): string {
  return `Hi ${user}`;
}
```

### Inference vs Annotation — when to use which

| Situation | Use |
|-----------|-----|
| Simple value with an obvious type | **Inference** — `const name = 'Jhoncel'` |
| Function parameters | **Annotation** — always required |
| Empty array / empty object | **Annotation** — `const list: string[] = []` |
| Public API / exported function return | **Annotation** — locks the contract |
| Variable assigned later | **Annotation** — `let total: number;` |

> Rule of thumb: **annotate the boundaries, infer the insides.**

### Gotchas

- Redundant annotation is noise: `const name: string = 'Jhoncel'` adds nothing over inference.
- `: any` is an annotation that *disables* checking — avoid it, prefer `unknown`.
- A wrong annotation is caught immediately: `const age: number = '25'` → compile error.

### Quiz

1. Write the annotated version of `const email = 'a@b.com';`.
2. Which part of a function **always** needs an annotation, and which part usually doesn't?
3. What error appears for `const age: number = '25';`?
4. Why is `const list: string[] = []` better than `const list = []`?
5. What's the difference between annotating `any` and `unknown`?

<details>
<summary>Answer key</summary>

1. `const email: string = 'a@b.com';`
2. Parameters always need it; the return type can usually be inferred.
3. `Type 'string' is not assignable to type 'number'.`
4. The annotated version is `string[]`; the un-annotated one infers `never[]` and rejects every `push`.
5. `any` turns off type checking entirely; `unknown` keeps it on and forces you to narrow before use.

</details>

### Practical Exam

> **Goal:** annotate only where it earns its keep.

Create `exercises/02-annotation.ts`:

```ts
// TASK 1 — Annotate every declaration below.
const username = 'Jhoncel';
const level = 5;
const isVerified = true;
const skills = ['ts', 'react'];

// TASK 2 — Write `createUser` that takes `name: string` and `age: number`
// and returns an object annotated as { name: string; age: number }.

// TASK 3 — Fix the compile error.
const total: number = '100';

// TASK 4 — Declare `status` that only accepts 'active' | 'inactive',
// then show a line that fails to compile and comment why.

// TASK 5 — Rewrite this without `any`, keeping it type-safe.
function logIt(value: any) {
  console.log(value.toUpperCase());
}
```

**Pass criteria**

- [ ] Task 1 compiles and the annotations match the values.
- [ ] `createUser` has annotated params **and** an annotated return.
- [ ] Task 3 compiles after the fix.
- [ ] Task 4 shows a real union-type error.
- [ ] Task 5 uses `unknown` + a `typeof` narrow, not `any`.

---

## Quick Reference Card

```ts
// ── INFERENCE ───────────────────────────────
const name = 'Jhoncel';      // "Jhoncel"  literal
let name2 = 'Jhoncel';       // string     widened
const nums = [1, 2, 3];      // number[]
const empty = [];            // never[]    ⚠️

// ── ANNOTATION ──────────────────────────────
const name3: string = 'Jhoncel';
const nums2: number[] = [];
let status: 'on' | 'off' = 'on';

function greet(user: string): string {
  return `Hi ${user}`;
}

// ── RULE ────────────────────────────────────
// Annotate the boundaries, infer the insides.
```

---

## Progress Tracker

| Topic | Read | Quiz passed | Exam passed |
|-------|:----:|:-----------:|:-----------:|
| Type Inference | ☐ | ☐ | ☐ |
| Type Annotation | ☐ | ☐ | ☐ |
