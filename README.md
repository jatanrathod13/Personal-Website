Below is an updated version of your README that adapts the Fuwari template to highlight your personal website. You can copy and paste this into your repository’s README file:

---

# Personal Website

Welcome to my personal website repository! This site is built with [Astro](https://astro.build) using the Fuwari template and is customized to showcase my projects, blog posts, and portfolio.

[**🖥️ Live Site**](https://personal-website-5vf5ukb0c-jatanrathod13s-projects.vercel.app/)

> README version: `2024-09-10`

---

## ✨ Features

- Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com)
- Smooth animations and page transitions
- Light / dark mode
- Customizable theme and layout
- Responsive design
- Blog support *(if applicable)*
- Easy deployment to platforms like Vercel, Netlify, GitHub Pages, etc.

---

## 🚀 Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/jatanrathod13/Personal-Website.git
   cd Personal-Website
   ```

2. **Install Dependencies**

   Make sure you have [pnpm](https://pnpm.io) installed:
   ```bash
   npm install -g pnpm
   ```
   Then run:
   ```bash
   pnpm install && pnpm add sharp
   ```

3. **Customize Your Site**

   Edit the configuration file (`src/config.ts`) to update your site details such as title, theme, and social links.

4. **Run the Development Server**

   ```bash
   pnpm dev
   ```
   Open [http://localhost:4321](http://localhost:4321) in your browser to view your site.

5. **Build and Deploy**

   ```bash
   pnpm build
   pnpm preview
   ```
   Deploy your site to your preferred hosting service. For guidance, check out [Astro's deployment documentation](https://docs.astro.build/en/guides/deploy/).

---

## 🧞 Available Commands

| Command                             | Action                                            |
|-------------------------------------|---------------------------------------------------|
| `pnpm install` AND `pnpm add sharp` | Installs dependencies                             |
| `pnpm dev`                          | Starts the local dev server at `localhost:4321`   |
| `pnpm build`                        | Builds the production site to `./dist/`           |
| `pnpm preview`                      | Previews your build locally before deployment     |
| `pnpm new-post <filename>`          | *(If using blog features)* Creates a new post     |
| `pnpm astro ...`                    | Runs CLI commands (e.g., `astro add`, `astro check`)|
| `pnpm astro --help`                 | Displays help using the Astro CLI                 |

---

## 📝 Customization

- Update site metadata and settings in `src/config.ts`.
- Customize pages, posts, and styles in the `src` directory to suit your personal style and content.

---

## 💡 Note

This repository is based on the [Fuwari](https://github.com/saicaca/fuwari) template. If you’re interested in exploring the original project, visit its GitHub page.

Feel free to contribute, open issues, or provide suggestions for improvements!
