                                                      Dev Stack Builder

Dev Stack Builder is a modern and responsive React + TypeScript web application that helps developers explore popular web development technologies and build their own custom technology stack.

Users can browse different technologies, check their category, difficulty level, rating, and description, and add their favorite technologies to a personal stack.

---

## 🌐 Live Website

🔗 **Live Site:** [Add your live site link here]

## 📦 GitHub Repository

🔗 **GitHub:** [Add your GitHub repository link here]

---

## ✨ Features

### 1. 🧩 Explore Technologies

Browse a collection of modern development technologies with useful information such as:

- Technology name
- Category
- Description
- Difficulty level
- Rating
- Badge
- Technology icon

### 2. 🛠️ Build Your Own Stack

Add technologies to your personal stack and see the selected technologies in the **Your Stack** sidebar.

- Add technologies
- Prevent duplicate selections
- Remove individual technologies
- Remove all selected technologies
- View the total selected technology count

### 3. 🔔 Interactive Notifications

The application uses **React Toastify** to provide user-friendly notifications for actions such as:

- Adding a technology
- Trying to add a duplicate technology
- Removing a technology
- Removing all technologies

---

## 🛠️ Technologies Used

- **React.js**
- **TypeScript**
- **Vite**
- **CSS3**
- **React Toastify**
- **JSON**
- **JavaScript ES6+**

---

## 📂 Project Structure

```text
src/
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── TechnologySection.tsx
│   ├── TechnologyCard.tsx
│   ├── Stack.tsx
│   └── Footer.tsx
│
├── css/
│   ├── navbar.css
│   ├── hero.css
│   ├── technology-section.css
│   ├── technology-card.css
│   └── footer.css
│
├── types/
│   └── technology.ts
│
├── App.tsx
├── App.css
├── index.css
└── main.tsx
