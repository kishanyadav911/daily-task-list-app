# Zenith - Daily Task Manager



Zenith is a beautifully designed, production-ready daily task management application. It provides a seamless and delightful user experience for managing your daily to-do list, with a focus on simplicity, elegance, and performance.

Built with a modern tech stack, Zenith features a sleek, responsive interface with smooth animations and persists your tasks directly in your browser's local storage.

---

## ✨ Features

- **Add Tasks**: Quickly add new tasks through an intuitive input form.
- **Complete Tasks**: Mark tasks as complete with a single click, visually distinguishing them from pending tasks.
- **Delete Tasks**: Easily remove tasks you no longer need.
- **Persistent Storage**: Your tasks are automatically saved to your browser's local storage, so they'll be there when you return.
- **Stunning UI**: A custom, non-generic design with a beautiful color palette, subtle gradients, and thoughtful micro-interactions.
- **Responsive Design**: Flawless performance and aesthetics across all screen sizes, from mobile to desktop.
- **Empty State**: A helpful and elegant message appears when all tasks are completed.

---

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linting**: [ESLint](https://eslint.org/)

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (version 18 or later) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation &amp; Setup

1.  **Clone the repository** (or download the project files):
    ```sh
    git clone https://github.com/kishanyadav911/daily-task-list-app
    ```

2.  **Navigate to the project directory**:
    ```sh
    cd daily-task-list-app
    ```

3.  **Install dependencies**:
    This command will install all the necessary packages defined in `package.json`.
    ```sh
    npm install
    ```

### Running the Application

Once the dependencies are installed, you can start the development server:

```sh
npm run dev
```

This will start the Vite development server. Open your browser and navigate to `http://localhost:5173` (or the URL shown in your terminal) to see the application in action.

---

## 📜 Available Scripts

In the project directory, you can run the following commands:

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run lint`: Lints the source code using ESLint to find and fix problems.
- `npm run preview`: Serves the production build locally to preview it before deployment.

---

## 📂 Project Structure

The project follows a standard Vite + React structure, with components and logic organized for clarity and maintainability.

```
/
├── public/
│   └── # Static assets
├── src/
│   ├── components/
│   │   ├── AddTaskForm.tsx
│   │   ├── EmptyState.tsx
│   │   ├── Header.tsx
│   │   ├── TaskItem.tsx
│   │   └── TaskList.tsx
│   ├── hooks/
│   │   └── useLocalStorage.ts  # Custom hook for local storage persistence
│   ├── types/
│   │   └── index.ts            # TypeScript type definitions
│   ├── App.tsx                 # Main application component
│   ├── index.css               # Global styles and Tailwind directives
│   └── main.tsx                # Application entry point
├── .eslintrc.cjs
├── package.json
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

---

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.
