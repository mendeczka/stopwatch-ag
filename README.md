
# Time and Laps Tracker

Time and Laps Tracker is a simple application for tracking time and laps. It uses React for component management and CSS for styling, and is built with Vite for fast development.


## Table of Contents

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project structure](#project-structure)
- [Components](#components)
- [Styling](#styling)
- [Sources](#Sources)


##  Technologies Used

- **React 18.2.66**: A JavaScript library for building user interfaces.
- **TypeScript 5.2.2**: A typed superset of JavaScript that helps in building robust and maintainable code.
- **Vite 5.2.0**: A build tool that aims to provide a faster and leaner development experience for modern web projects.
- **CSS**: Cascading Style Sheets for styling the application.
- **npm** / **Yarn**: Package managers to handle dependencies.


## Installation

To run the project locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-repo.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd time-and-laps-tracker
    ```

3. **Install dependencies using npm:**
    ```bash
    npm install
    ```
   or using Yarn:
    ```bash
    yarn install
    ```

## Running the Project
To run the application in development mode, use the following command:

Using npm:
```bash
npm run dev
```
or using yarn:
```bash
yarn dev
```

## Project structure

````
stopwatch-ag/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── App/
│   │   │   ├── App.css
│   │   │   └── App.tsx
│   │   ├── Button/
│   │   │   ├── Button.css
│   │   │   └── Button.tsx
│   │   ├── LapsTable/
│   │   │   ├── LapEntry.css
│   │   │   ├── LapTable.css
│   │   │   └── LapTable.tsx
│   │   ├── Stopwatch/
│   │   │   └── Stopwatch.tsx
│   │   ├── Summary/
│   │   │   └── Summary.tsx
│   │   ├── TimeDisplay/
│   │   │   ├── TimeDisplay.css
│   │   │   └── TimeDisplay.tsx
│   ├── types/
│   │   ├── btn.ts
│   │   ├── summary.ts
│   │   ├── tabley.ts
│   │   └── time.ts
│   ├── utils/
│   │   └── formatTime.ts
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── README.md
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
````


## Components

`TimeDisplay.tsx`
A component that displays time and a label.

Props:
`time: number` - Time in milliseconds.
`label: string` - Label to display (e.g., "Time", "Lap Time").

`LapsTable.tsx`
A table that displays a list of laps.

Props:
`laps: number[]` - Array of lap times in milliseconds.

`LapEntry.tsx`
A component representing a single lap entry in the table.

Props:
`lapNumber: number` - The lap number.
`lapTime: number` - The lap time in milliseconds.

## Styling

CSS file used for styling components:

    `Classes`:
        `.button` - General button styling.
        `.button-primary, .button-secondary, .button-danger` - Styling for different types of buttons.
        `table, th, td` - Styling for the table and its elements.
        `.time-display` - Styling for the time display.
        `.time-display-time` - Styling for the main time counter.
        `.time-display-lap` - Styling for the lap counter.


## Sources

This app was inspired by the MG from Frontowcy

