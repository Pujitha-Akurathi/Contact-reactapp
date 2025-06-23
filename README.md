Contact Manager App - README

📇 Contact Manager App

A simple full-stack contact manager built with React (frontend) and JSON Server (backend API). It supports adding, editing, deleting, and viewing contact details with local persistence and live editing.

🗂️ Project Structure

reactprojects/
├── contact-app/      # React frontend
├── server-api/       # JSON Server backend with db.json

🚀 Features

✅ View contact list
✅ Add new contacts
✅ Edit existing contacts
✅ Delete contacts
✅ View contact details
✅ Search contacts
✅ Local API simulation using JSON Server

📦 Technologies Used

- React (with React Router v6)
- JSON Server (for REST API)
- Semantic UI (for styling)

🛠️ Getting Started

1. Clone the repository

git clone https://github.com/Pujitha-Akurathi/contact-manager-app.git
cd contact-manager-app

2. Start JSON Server (in a separate terminal)

cd server-api
npx json-server --watch db.json --port 3006

➡️ Runs at: http://localhost:3006/contacts

3. Start React App (in a second terminal)

cd contact-app
npm install
npm start

➡️ Runs at: http://localhost:3000/

📁 API Example

GET /contacts returns:

[
  {
    "id": "1",
    "name": "Ramu",
    "email": "Ramu@example.com"
  }
]


📄 License

MIT License. Feel free to use, modify, and share.

🙌 Acknowledgements

- React Docs: https://reactjs.org/
- JSON Server: https://github.com/typicode/json-server
- Semantic UI: https://semantic-ui.com/

💬 Feedback / Contributions

Have feedback or want to contribute? Open an issue or pull request on GitHub.
