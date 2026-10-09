# Rhombus Area Calculator

An Angular app that calculates the area of a rhombus from the lengths of its two diagonals. The app has three sections: **Home**, **Rhombus calculator** and **About**.

**Author:** Your Name, Your Class

## Features

- **Home:** landing page with a short introduction to the app
- **Rhombus calculator:** reactive form with two inputs (diagonal `e` and diagonal `f`)
  - Validation: both fields are required and must be at least 1
  - The submit button stays disabled until the form is valid
  - The calculated area is shown after pressing the button
  - Illustration of a rhombus with its diagonals
- **About:** information about the project and its author
- Navigation between the sections

## Formula

The area of a rhombus is half the product of its diagonals:

```
T = (e * f) / 2
```

Example: e = 10, f = 6 gives T = 30.

## Tech Stack

- Angular (standalone components, `@if` control flow, requires Angular 17+)
- Angular Router for navigation between Home, Rhombus and About
- TypeScript
- Angular Reactive Forms (`ReactiveFormsModule`, `FormBuilder`, `Validators`)

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- Angular CLI: `npm install -g @angular/cli`

### Installation and run

```bash
npm install
ng serve
```

Then open http://localhost:4200 in your browser.

## Pages

| Route | Component | Description |
| --- | --- | --- |
| `/home` | Home | Landing page |
| `/rhombus` | Rhombus | Area calculator form |
| `/about` | About | About the project and author |

## Project Structure

```
src/app/
├── home/
│   └── home.component.*       # home page
├── rhombus/
│   ├── rhombus.component.ts   # form definition, validators, area calculation
│   ├── rhombus.component.html # template: form, result, image
│   └── rhombus.component.css  # component styles
├── about/
│   └── about.component.*      # about page
├── app.routes.ts              # route definitions
└── app.component.*            # root component with navigation
```

## How the Calculator Works

1. `FormBuilder` creates the `rhombusForm` group with the controls `diagonalE`, `diagonalF` and `area`.
2. On submit, `startCalc()` reads both diagonals, converts them to numbers and calls `calcArea()`.
3. `calcArea(diagonalE, diagonalF)` returns `(1/2) * diagonalE * diagonalF`.
4. The result is written to the `area` control and `showValue` is set to `true`, which displays the result in the template.

## Notes

- This project uses **reactive forms** (not template-driven), so the form logic and validators live in the TypeScript class.
