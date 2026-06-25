# AIC Mahindra — React recreation

A React (Vite) recreation of the **AIC Mahindra e-Hub Foundation** page
(Atal Incubation Centre, Mahindra University).

## Run

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Structure

```
src/
  data/
    content.js     # page sections (hero, about, pathways, offerings, journey, infra, footer...)
    team.js        # core team + mentors roster, with per-person link targets
    profiles.js    # in-app profile pages for AIC members who link to internal MU faculty pages
  components/       # Navbar, Hero, About, Pathways, Offerings, Journey, Infrastructure,
                    # Startups, Collaborations, Team, PersonCard, Gallery, CTA, Footer, Logo
  pages/
    Home.jsx        # assembles all sections
    Profile.jsx     # faculty-style profile page (route: /profile/:slug)
  styles/global.css # full theme + layout
```

## How "View Profile" works (matches the live site)

- **7 members** link to internal MU faculty pages → rendered as in-app profile pages
  at `/profile/:slug` with the same layout (photo, Quick facts, Biography, Qualifications).
- **18 members** link to external **LinkedIn** profiles → open in a new tab.

## Notes on assets / content

- Logos, photos and partner marks on the live site are copyrighted, so this build uses
  recreated SVG/CSS marks and initials-based avatars / labelled placeholders. Drop real
  images into `public/` and reference them to make it pixel-identical.
- Text content is the factual information from the public page; longer program descriptions
  are concise paraphrases. Source data is preserved in `../data/` (raw-page-data.md,
  raw-team-data.md) at the project root.
```
