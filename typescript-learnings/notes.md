# TypeScript Learnings — Cheat Sheet

> **Source:** [notes.txt](notes.txt) · **Mode:** AI Tutor · **Last sync:** 2026-09-17
> Add a new topic to [notes.txt](notes.txt), then re-run `/ts-cheatsheet` to regenerate this file.

---

## Topics

| # | Topic | One-liner | Status |
|---|-------|-----------|--------|
| 1 | [Type Inference](#1-type-inference) | Let TypeScript guess the type for you | Learning |
| 2 | [Type Annotation](#2-type-annotation) | Tell TypeScript the type explicitly | Learning |
| 3 | [Type Aliases](#3-type-aliases) | A second name for an existing type | Learning |
| 4 | [Class & the Four Pillars of OOP](#4-class--the-four-pillars-of-oop) | Blueprint for objects, plus the four OOP pillars | Learning |

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

## 3. Type Aliases

> **Definition:** A new name given to an existing type.

- It doesn't create a new type; it simply provides an alternative, often more readable name.

### Code Sample

```ts
// tutor-authored — the note had no sample
type ID = string;

const userId: ID = 'u_001'; // ID *is* string — the alias is only a friendlier label
```

### Key Points

| Alias of | Syntax |
|----------|--------|
| Primitive | `type ID = string;` |
| Object shape | `type User = { id: ID; name: string };` |
| Union | `type Status = 'idle' \| 'busy' \| 'done';` |
| Function | `type Formatter = (value: string) => string;` |
| Array | `type Scores = number[];` |

```ts
type ID = string;
type Status = 'idle' | 'busy' | 'done';
type User = { id: ID; name: string; status: Status };
type Formatter = (value: string) => string;

const user: User = { id: 'u_001', name: 'Jhoncel', status: 'idle' };
const shout: Formatter = (value) => value.toUpperCase(); // value inferred as string
```

### Gotchas

- An alias is **erased at compile time** — it has no runtime value, so you can't log or `new` it.
- Aliases are *structural*, not nominal: two aliases of `number` stay interchangeable, so they can't
  protect you from mixing up units.
- A `type` can't be re-opened the way an `interface` can — declaring the same alias twice is an error.

```ts
type Meters = number;
type Feet = number;

const distance: Meters = 100;
const height: Feet = distance; // ⚠️ compiles — both aliases are just `number`

console.log(Meters);           // ❌ 'Meters' only refers to a type, but is used as a value here
```

### Quiz

1. Does `type ID = string` create a brand-new type, or just another name for `string`?
2. Write an alias `Point` for an object with `x` and `y` numbers.
3. Given `type Status = 'idle' | 'busy';`, why does `console.log(Status)` fail?
4. With `type Meters = number; type Feet = number;`, will TypeScript stop you assigning a `Meters` to a
   `Feet`? Why?
5. Name one thing an `interface` can do that a `type` alias cannot.

<details>
<summary>Answer key</summary>

1. Just another name. No new type is created — `ID` and `string` are the same type.
2. `type Point = { x: number; y: number };`
3. Aliases exist only at compile time and are erased from the emitted JavaScript, so there is no runtime
   value named `Status`.
4. No. TypeScript is **structural** — both aliases resolve to `number`, so they are identical types.
5. Declaration merging: the same `interface` can be declared twice and the members combine. Repeating a
   `type` alias is a duplicate-identifier error.

</details>

### Practical Exam

> **Goal:** name your types without accidentally inventing new ones.

Create `exercises/03-aliases.ts`:

```ts
// TASK 1 — Create aliases `UserId` (string), `Score` (number), and `Tags` (string[]).

// TASK 2 — Create a `Profile` alias for { id: UserId; name: string; tags: Tags }
// and declare one value of that type.

// TASK 3 — Create a union alias `Role` accepting only 'admin' | 'editor' | 'viewer'.
// Then write a line that fails to compile and comment the exact error.

// TASK 4 — Create a function-type alias `Greeter` that takes a string and returns a
// string, then assign an arrow function to it WITHOUT annotating the parameter.

// TASK 5 — Explain in a comment why the code below compiles even though it's a bug.
type Meters = number;
type Feet = number;
const hikeLength: Meters = 1200;
const towerHeight: Feet = hikeLength;
```

**Pass criteria**

- [ ] All aliases use the `type` keyword, not `interface`.
- [ ] `Profile` reuses `UserId` and `Tags` instead of repeating `string` / `string[]`.
- [ ] Task 3 quotes a real union-type error message.
- [ ] `Greeter`'s parameter type is inferred, not annotated.
- [ ] Task 5 mentions structural typing.

---

## 4. Class & the Four Pillars of OOP

> **Definition:** A template for creating objects.

- A blueprint that builds an object with fields (properties) and methods to represent a thing.

### Code Sample

```ts
abstract class Shape {
    constructor (protected name: string,) {}
    abstract area(): number;
    printArea(): void {
      console.log(`${this.name} has an area of ${this.area().toFixed(2)}`) ;
    }
}

class Circle extends Shape {
    constructor(name:string, public radius: number){
        super(name)
    }
    area() : number {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(name:string, public width: number, public height: number){
        super(name)
    }
    area() : number {
        return this.width * this.height;
    }
}

const shapes: Shape[] = [new Circle('Circle',5),new Rectangle('Rectangle',4,2)];
shapes.forEach(shape => shape.printArea());

// logs:
// Circle has an area of 78.54
// Rectangle has an area of 8.00
// `shape` in the callback is inferred as: Shape
```

### Key Points

| Piece | What it does |
|-------|--------------|
| `class Circle { }` | Declares the blueprint; `new Circle(...)` builds an instance |
| `constructor(...)` | Runs once per `new`, sets the instance up |
| `protected name: string` **in the parameter list** | Parameter property — declares the field *and* assigns it in one line |
| `abstract area(): number;` | A contract with no body; subclasses must implement it |
| `extends` + `super(...)` | Inherit the parent, then hand it its constructor arguments |
| `public` / `protected` / `private` | Outside + subclasses / subclasses only / this class only |

```ts
class Account {
  private balance = 0;                  // inferred number, reachable only inside Account

  constructor(public owner: string) {}  // parameter property → this.owner

  deposit(amount: number): void {
    this.balance += amount;
  }

  printBalance(): void {
    console.log(`${this.owner}: ${this.balance}`);
  }
}

const acct = new Account('Jhoncel');
acct.deposit(100);
acct.printBalance();                    // Jhoncel: 100
// acct.balance = 999;                  // ❌ 'balance' is private and only accessible within 'Account'
```

### The Four Pillars of OOP in TypeScript

#### 4.1 Abstraction (Hiding Complexity)

**Concept:** Showing only the essential features of an object while hiding unnecessary implementation
details.

```ts
abstract class Shape {
    constructor (protected name: string) {}
    abstract area(): number;
    printArea(): void {
       console.log(`${this.name} has an area of ${this.area().toFixed(2)}`);
    }
}
```

`Shape` is a blueprint: every shape *must* have an `area()`, but a generic shape has no formula, so the
body is left out. Subclasses are forced to supply the logic, and calling code uses `area()` without
caring how the number is produced.

#### 4.2 Encapsulation (Bundling & Data Protection)

**Concept:** Grouping properties and methods inside a single class while controlling access to internal
data.

```ts
// excerpt
// Inside Shape:
constructor (protected name: string) {}

// Inside Circle:
constructor(name: string, public radius: number) { super(name); }
```

`protected name` blocks outside code from touching the field — only `Shape` and its subclasses can.
The area maths and the output formatting live inside the classes, so data and the behaviour that uses it
stay bundled together.

#### 4.3 Inheritance (Reusing Code)

**Concept:** Letting child classes inherit properties and methods from a parent class to avoid repeating
code.

```ts
// excerpt
class Circle extends Shape { ... }
class Rectangle extends Shape { ... }
```

Both subclasses use `extends`, so they inherit `name` and the whole `printArea()` method for free.
Neither class re-implements the logging logic.

#### 4.4 Polymorphism (Many Forms)

**Concept:** Letting different classes answer the same method call in their own way.

```ts
const shapes: Shape[] = [new Circle('Circle', 5), new Rectangle('Rectangle', 4, 2)];
shapes.forEach(shape => shape.printArea());
```

The array is typed `Shape[]`, so the compiler only guarantees a `printArea()` exists. At runtime each
object dispatches to its own `area()` — `πr²` for the circle, `width × height` for the rectangle — so one
call site produces two different behaviours.

### Gotchas

- A derived constructor **must** call `super(...)` before touching `this`.
- You cannot `new` an abstract class — it only exists to be extended.
- `private` also blocks subclasses; use `protected` when children need the field.
- Under `strict`, a field with no initializer and no constructor assignment errors with
  "has no initializer and is not definitely assigned in the constructor".

```ts
abstract class Shape {
  abstract area(): number;
}

const s = new Shape();   // ❌ Cannot create an instance of an abstract class

class Square extends Shape {
  side: number;
  constructor(side: number) {
    this.side = side;    // ❌ 'super' must be called before accessing 'this'
  }
  area(): number {
    return this.side ** 2;
  }
}
```

### Quiz

1. What's the difference between a class and an instance?
2. What does `constructor(protected name: string)` do that `constructor(name: string)` does not?
3. Why does `new Shape('Circle')` fail for the `abstract class Shape`?
4. What does `super(name)` do inside `Circle`'s constructor, and what breaks if you omit it?
5. Which modifier lets a subclass read a field while blocking outside code — `private` or `protected`?
6. *(Abstraction)* Why does `Shape` declare `abstract area(): number` instead of implementing it?
7. *(Encapsulation)* Which keyword in the sample keeps `name` away from outside code?
8. *(Inheritance)* Name the two members `Rectangle` gets for free from `Shape`.
9. *(Polymorphism)* The array is typed `Shape[]` — so how does `printArea()` print a different formula per
   item?

<details>
<summary>Answer key</summary>

1. The class is the blueprint; the instance is one concrete object built from it by `new`.
2. It's a **parameter property**: it declares the field, applies the access modifier, and assigns
   `this.name = name` automatically — all in one line.
3. Abstract classes have unimplemented members, so they can't be instantiated: *Cannot create an instance
   of an abstract class.*
4. It runs the parent constructor so `name` gets assigned. Omit it and the compiler errors — derived
   constructors must call `super()` before using `this`.
5. `protected`. `private` hides the field from subclasses too.
6. Because a generic shape has no area formula. Declaring it abstract forces every subclass to provide
   one while callers still get a guaranteed `area()`.
7. `protected` on the `name` parameter property.
8. The `name` field and the `printArea()` method.
9. Each instance keeps its own `area()` implementation, and the call is dispatched at runtime on the
   actual object, not on the declared `Shape` type.

</details>

### Practical Exam

> **Goal:** hit all four pillars in one file.

Create `exercises/04-class.ts`:

```ts
// TASK 1 (Abstraction) — Write `abstract class Animal` with a `protected name: string`
// parameter property, an `abstract sound(): string`, and a concrete `speak(): void`
// that logs `${this.name} says ${this.sound()}`.

// TASK 2 (Inheritance) — Create `Dog` and `Cat` extending `Animal`, each calling super(name).

// TASK 3 (Encapsulation) — Give `Dog` a `private tricks: string[] = []`, a
// `learn(trick: string): void`, and a `showTricks(): void`. Add a commented-out line
// that reads `tricks` from outside and write the exact error it produces.

// TASK 4 (Polymorphism) — Build `const animals: Animal[] = [new Dog('Rex'), new Cat('Mimi')]`
// and loop it with `forEach` so each prints its own sound.

// TASK 5 — In a comment, write the exact error for `new Animal('Generic')`.
```

**Pass criteria**

- [ ] `Animal` is `abstract` and `sound()` has no body.
- [ ] `Dog` and `Cat` both call `super(name)` as the first statement.
- [ ] `tricks` is `private` and Task 3 quotes the real error text.
- [ ] The `forEach` callback has no type annotation and still prints two different sounds.
- [ ] Task 5 names "Cannot create an instance of an abstract class".
- [ ] The whole file compiles with `strict: true`.

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

// ── ALIASES ──────────────────────────
type ID = string;               // a second name, not a new type
type Status = 'idle' | 'busy';
type User = { id: ID; status: Status };

// ── CLASS / OOP ─────────────────────
abstract class Shape {                            // abstraction
  constructor(protected name: string) {}          // encapsulation + param property
  abstract area(): number;
  printArea(): void {
    console.log(`${this.name}: ${this.area().toFixed(2)}`);
  }
}

class Circle extends Shape {                      // inheritance
  constructor(name: string, public radius: number) {
    super(name);
  }
  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

const allShapes: Shape[] = [new Circle('Circle', 5)];
allShapes.forEach(s => s.printArea());            // polymorphism
```

---

## Progress Tracker

| Topic | Read | Quiz passed | Exam passed |
|-------|:----:|:-----------:|:-----------:|
| Type Inference | ☐ | ☐ | ☐ |
| Type Annotation | ☐ | ☐ | ☐ |
| Type Aliases | ☐ | ☐ | ☐ |
| Class & the Four Pillars of OOP | ☐ | ☐ | ☐ |
