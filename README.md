# 📇 Contact Manager App – React Frontend

A simple contact management application built using **React** and styled with **Semantic UI**. This frontend interacts with a REST API to perform CRUD operations: Create, Read, Update, and Delete contacts.

---

## 🚀 Features

- View list of contacts  
- Add new contacts  
- Edit existing contacts  
- Delete contacts  
- View contact details  
- Search contacts by name  
- Responsive and user-friendly UI

---

## 📁 Project Structure

contact-app/
├── public/
├── src/
│ ├── components/
│ ├── App.js
│ ├── index.js
│ └── ...
├── package.json
└── README.md
## Technologies Used

- React

- Semantic UI

- React Router v6

- Axios

---

## ⚠️ Note on GitHub Pages Deployment

The app is deployed using **GitHub Pages**, but it currently fetches data from a **local JSON Server** running at:

http://localhost:3006/contacts


As a result, contact data will **not be visible** on the deployed site, because GitHub Pages cannot connect to `localhost`.

---

## 🔜 Planned Improvement

The backend will soon be hosted on **Render**, so the frontend can fetch contact data from a live API. Once deployed, the GitHub Pages version will display all contact details correctly.

---

## 🧪 Local Development

To test the full functionality locally:

1. Install dependencies:
   ```bash
   npm install
2. Start the JSON Server:
   npx json-server --watch db.json --port 3006
4. Run the frontend:
   npm start








