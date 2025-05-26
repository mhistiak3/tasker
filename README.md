# Tasker

Tasker is a simple and modern task management web application built with React. It allows users to add, edit, delete, and organize tasks with tags, priorities, and favorites.

## Features

- **Add, Edit, and Delete Tasks:** Easily manage your to-do list.
- **Tagging:** Assign multiple tags to tasks for better organization.
- **Priority Levels:** Set task priority as Low, Medium, or High.
- **Favorite Tasks:** Mark important tasks as favorites.
- **Responsive Design:** Works well on desktop and mobile devices.
- **Random Tag Colors:** Tags are displayed with random background colors for visual distinction.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/tasker.git
   cd tasker
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  components/
    Task/
      AddTask.jsx
      TaskList.jsx
      TaskNotFound.jsx
  App.jsx
  index.js
```

## Usage

- **Add Task:** Fill in the form and click "Create new Task".
- **Edit Task:** Click "Edit" on a task, modify details, and save.
- **Delete Task:** Click "Delete" to remove a task.
- **Favorite:** Click the star icon to mark/unmark as favorite.
- **Tags:** Enter comma-separated tags when adding/editing a task.

## Customization

- You can modify styles in the component files or add your own CSS/Tailwind classes.
- The random color generator for tags can be customized in `TaskList.jsx`.

---

Made with ❤️ using React.