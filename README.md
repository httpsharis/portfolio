# haris.dev – Personal Portfolio

A modern, responsive developer portfolio built with **React** and **Vite**.  
Showcasing my skills, projects, and experience as a passionate web developer.

---

## ✨ Features

- **Responsive Design:** Looks great on all devices.
- **Animated Sections:** Smooth reveal-on-scroll animations.
- **Project Showcase:** Easily add and manage featured projects.
- **Contact Form:** Send messages directly via EmailJS.
- **Modern Stack:** Built with React, Vite, and Tailwind CSS.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root or `src` directory and add:
   ```
   VITE_SERVICE_ID=your_emailjs_service_id
   VITE_TEMPLATE_ID=your_emailjs_template_id
   VITE_PUBLIC_KEY=your_emailjs_public_key
   ```

4. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

---

## 🛠️ Customization

- **Projects:**  
  Add or edit projects in `src/components/sections/projects.jsx` using the `ProjectCard` component.

- **Contact Form:**  
  Configure your EmailJS credentials in the `.env` file and [EmailJS dashboard](https://dashboard.emailjs.com/).

- **Branding:**  
  Update the favicon and site title in `index.html`.  
  Place your logo in the `public` folder and reference it in the `<link rel="icon" ...>` tag.

---

## 📦 Deployment

This project is ready for deployment on [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/).

- **Environment Variables:**  
  Set your EmailJS keys in the deployment platform’s environment variable settings.

- **Build:**
  ```sh
  npm run build
  # or
  yarn build
  ```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

**Haris**  
[haris.dev](https://haris.dev)  
[GitHub](https://github.com/httpsharis)

---

*Feel free to fork, use, and contribute!*