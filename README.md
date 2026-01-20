# Experiment–1: Simple Counter SPA

## Aim
To create a basic Single Page Application (SPA) using a modern frontend framework (React) that dynamically updates the UI without page reload.

## Software Requirements
- Node.js
- React (with Vite)
- Web Browser

## Theory
A Single Page Application loads a single HTML page and updates content dynamically using JavaScript. React is a modern frontend framework that follows a component-based architecture and uses state to manage dynamic data.

## Project Structure
```
counter-spa/
├── src/
│   ├── App.jsx          # Main counter component
│   ├── App.css          # Component styles
│   ├── index.css        # Global styles
│   └── main.jsx         # Application entry point
├── package.json         # Dependencies and scripts
└── index.html          # HTML template
```

## Features
- ✅ Increment counter
- ✅ Decrement counter
- ✅ Reset counter to zero
- ✅ No page reload (SPA behavior)
- ✅ Responsive design
- ✅ Modern UI with gradient effects

## How to Run

### Installation
```bash
cd counter-spa
npm install
```

### Development Server
```bash
npm run dev
```
The application will be available at `http://localhost:5173/`

### Build for Production
```bash
npm run build
```

## Key Concepts Demonstrated

### 1. React State Management
```jsx
const [count, setCount] = useState(0)
```
Using the `useState` hook to manage the counter value.

### 2. Event Handlers
```jsx
const increment = () => {
  setCount(count + 1)
}
```
Functions that update state in response to user interactions.

### 3. Component-Based Architecture
The entire application is built as a single React component that can be easily reused or extended.

### 4. No Page Reload
All interactions happen through JavaScript state updates, demonstrating the core principle of SPAs - the page never reloads, only the content changes dynamically.

## Technologies Used
- **React 18** - Frontend framework
- **Vite** - Build tool and dev server
- **CSS3** - Styling with gradients and animations
- **JavaScript (ES6+)** - Modern JavaScript features

## Conclusion
This project successfully demonstrates a Single Page Application where the UI updates dynamically without page reloads, showcasing React's state management and component-based architecture.

