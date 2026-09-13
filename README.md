# 🚀 Dev Stack Builder

## 📌 About The Project

Dev Stack Builder is a responsive web application built with React and TypeScript.

It allows developers to explore different technologies and create their own development stack by adding and removing technologies from a personal stack.

---

## 🛠️ Technologies Used

- React.js
- TypeScript
- Vite
- CSS3
- React Toastify
- JSON

---

## ✨ Features

### 1. 🔍 Explore Technologies
Users can explore different technologies with their name, category, description, difficulty level, rating, badge, and icon.

### 2. 🧰 Build Your Own Stack
Users can add their favorite technologies to the **Your Stack** section, remove individual items, or remove all selected technologies at once.

### 3. 🔔 Interactive Notifications
The project uses React Toastify to show notifications when technologies are added, removed, duplicated, or when the entire stack is cleared.

---

# 📚 React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript.

It makes React code easier to read and helps us create UI components.

---

## 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component.

**State** is data managed inside a component that can change over time.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to store and update data in a React component.

In this project, I used it for:

- Technology data
- Loading state
- Selected technologies in the stack

Example:

```tsx
const [stack, setStack] = useState<Technology[]>([]);
