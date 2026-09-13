import enemyAiExcerpt from '../../combat_enemy.gd?raw';

export type ProjectImage = { src?: string; alt: string; caption: string };
export type Project = {
  slug: string; number: string; title: string; category: string;
  description: string; tags: string[]; role: string; timeline: string;
  hero: ProjectImage; detailHero: ProjectImage; sections: { title: string; body: string }[];
  gallery: ProjectImage[]; outcome: string; lessons: string;
  website?: string; websiteLabel?: string; permissionNote?: string;
  codeSnippet?: { title: string; filename: string; description: string; source: string };
};

// EDIT YOUR PROJECTS BELOW. Each project has its own content.
// Replace text inside quotes; keep the field names, commas, and brackets.
// description = short text on the homepage card.
// sections = longer content on the project's detail page.
// Images go in public/images/projects/. Set src to /images/projects/filename.jpg.
// Always start image URLs with /images/, not public/images/; this works on every page.
// Leave src empty to keep the visible image placeholder.

export const projects: Project[] = [
  // ── 01 / TRAILHEAD THERAPY ──
  {
    slug: "trailhead-therapy", // URL identifier
    number: "01",
    title: "Trailhead Therapy",
    category: "Web Development / Client Project",
    // Live site link and permission note shown at the top of this project page.
    website: "https://trailheadtherapyutah.com/",
    permissionNote: "Shared in this portfolio with the client’s permission.",

    // HOMEPAGE CARD
    description: "A website I designed and built for a local therapy practice to help clients learn about their services and get in touch.",
    tags: ["[HTML / CSS]", "[UI / UX Design]", "[Deployment / SEO]"],

    // PROJECT PAGE: basic details.
    role: "Designer & Developer",
    timeline: "[04-22 - 05-01 / ~21 hours]",

    // HOMEPAGE CARD IMAGE: only used in Selected Work.
    hero: {
      src: "/images/Trailhead.png",
      alt: "Trailhead Therapy Page screenshot",
      caption: "",
    },

    // PROJECT PAGE TOP IMAGE: choose a separate, wide image here.
    // Example src: "/images/projects/project-banner.jpg"
    // Leave empty to show a placeholder until your new image is ready.
    detailHero: {
      src: "/images/TrailheadOverview.png",
      alt: "Trailhead Therapy page banner",
      caption: "",
    },

    // PROJECT PAGE
    sections: [
        {
            title: "Overview",
            body: "Trailhead Therapy is a website I designed and built for a local therapy practice. I handled the project from the initial design through development and deployment."
        },
        {
            title: "Problem & Goals",
            body: "The practice needed a professional website where potential clients could learn about the therapist, understand the services offered, and easily get in touch (all in a single page). I wanted the site to feel welcoming, simple, and easy to navigate."
        },
        {
            title: "Design & Development",
            body: "I created a simple site structure and an outdoors-inspired visual style that fit the practice. I built the site with HTML, CSS, and JavaScript and made sure it worked well across desktop and mobile."
        },
        {
            title: "Deployment",
            body: "I connected the custom domain, deployed the site through Cloudflare, and handled basic SEO and search indexing."
        },
    ],
    outcome: "The result is a live website that gives the practice a professional online presence and makes it easy for potential clients to learn about its services and get in touch.",
    lessons: "I learned how different designing for a real client is from designing for myself. The site went through several iterations as I worked with the client to find a design that matched what they wanted while still being functional and easy to use.",

    // PROJECT PAGE: add screenshots here. Copy an entry to add more images.
    gallery: [
      {
        src: "/images/TrailheadSS1.png",
        alt: "Trailhead Therapy screenshot one",
        caption: "Get-In Touch Section of Page",
      },
      {
        src: "/images/TrailheadSS2.png",
        alt: "Trailhead Therapy screenshot two",
        caption: "Rate & Insurances Section of Page",
      },
    ],
  },

  // ── 02 / GAME PROJECT ──
  {
    slug: "game", // URL identifier
    // The displayed code comes directly from combat_enemy.gd at the project root.
    codeSnippet: {
      title: "Enemy AI / Decisions & Movement",
      filename: "combat_enemy.gd",
      description: "Selected functions for melee and ranged decisions, navigation, and strafing. This excerpt depends on the rest of the enemy controller and is not a standalone script.",
      source: enemyAiExcerpt,
    },
    number: "02",
    title: "Game Project",
    category: "Game Development / Software Engineering",

    // HOMEPAGE CARD
    description: "[Add a short description of the project and your contribution.]",
    tags: ["[GDScript]", "[Gameplay Systems]", "[Enemy AI]"],

    // PROJECT PAGE: basic details.
    role: "[Add your role]",
    timeline: "[Add dates / duration]",

    // HOMEPAGE CARD IMAGE: only used in Selected Work.
    hero: {
      src: "/images/Prophecy.png",
      alt: "Game Project project overview",
      caption: "[Add project hero screenshot]",
    },

    // PROJECT PAGE TOP IMAGE: choose a separate, wide image here.
    // Example src: "/images/projects/project-banner.jpg"
    // Leave empty to show a placeholder until your new image is ready.
    detailHero: {
      src: "/images/ProphecyBanner.png",
      alt: "Screenshot of godot code",
      caption: "",
    },

    // PROJECT PAGE

    sections: [
      {
        title: "Overview",
        body: "An original game built in Godot that combines exploration, puzzle solving, storytelling, and deck-based combat. I am designing and developing the game independently, including the gameplay systems, world, visual direction, and original soundtrack."
      },
      {
        title: "Problem",
        body: "I wanted to build a game where deckbuilding was part of a larger adventure rather than the entire experience. The challenge has been finding ways to connect exploration, story, puzzles, and combat so that building a deck feels like part of progressing through the world."
      },
      {
        title: "Goals",
        body: "Create a mysterious world that rewards exploration, make player decisions meaningful, and build a card system that grows naturally throughout the adventure. I also wanted the game to feel cohesive, with the gameplay, world, visuals, and music supporting the same atmosphere."
      },
      {
        title: "Process",
        body: "I started by prototyping the core movement and card mechanics in Godot, then gradually expanded the project into exploration, encounters, and a larger overworld. I have been developing individual systems in small pieces, testing how they feel together, and refactoring the underlying code as the scope of the game grows."
      },
      {
        title: "Game Concept",
        body: "The player explores a mysterious world that appeared without explanation overnight. As a crow traveling through the new landscape, the player uncovers its story through exploration, puzzles, characters, and decisions that shape the journey. The soundtrack is also original, composed primarily with guitar and layered synths to build the atmosphere of the world."
      },
      {
        title: "Gameplay Systems",
        body: "Exploration takes place across an overworld containing puzzles, story encounters, and opportunities to discover new cards. The player's deck develops over the course of the game and becomes the foundation for combat encounters. Cards use an interactive targeting system that connects the deck directly to characters and enemies in the game world."
      },
      {
        title: "Technical Challenges",
        body: "The card system has been one of the most technically involved parts of the project. Playing a card can involve hand interactions, target selection, validation, cancellation, and changes to player input. I separated responsibilities across the deck, card instances, UI, targeting, and controller systems so that new cards and behaviors can be added without rebuilding the core combat flow."
      },
      {
        title: "Key Decisions",
        body: "I chose to combine deckbuilding with a traditional explorable world instead of structuring the game entirely around combat encounters. This lets cards become part of the player's progression while leaving room for puzzles, story choices, and exploration. Creating the soundtrack myself also gives me another way to establish a consistent identity across the game."
      },
    ],
    outcome: "The game is currently in active development, with the core movement, card, combat, targeting, and exploration systems taking shape. The project has grown from a gameplay prototype into a larger original game that I plan to continue developing.",

    lessons: "This project has taught me to think beyond whether an individual feature works and consider how systems fit together. I have learned a lot about separating responsibilities in code, managing gameplay state, prototyping before committing to an idea, and keeping a growing creative project maintainable.",


    // PROJECT PAGE
    gallery: [
      {
        src: "/images/walkingCrow.gif",
        alt: "Character walking around map",
        caption: "Playable character walking around the map",
      },
      {
        src: "/images/fightingCrow.gif",
        alt: "Combat gif",
        caption: "[In Progress] Combat with prototype card system (more cards in development)",
      },
    ],
  },

  // ── 03 / MOUNTAIN PROJECT UX REDESIGN ──
  {
    slug: "mountain-project", // URL identifier
    number: "03",
    title: "Mountain Project UX Redesign",
    category: "UX Research / Product Design",
    // Prototype link shown at the top of the project page.
    website: "https://www.figma.com/proto/NVuSWlDUJzaqlxHzPvNL7U/Mountain-Project-UX-Case-Study?node-id=2-2&p=f&t=biJrpxayRNzw5cGU-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    websiteLabel: "View Prototype",

    // HOMEPAGE CARD
    description: "A redesign of Mountain Project focused on making it easier for climbers to find routes, navigate the app, and get the information they need.",
    tags: ["[Figma]", "[UX research]", "[Prototyping]"],

    // PROJECT PAGE
    role: "UX Designer & Researcher",
    timeline: "[09-01 – 09-11 / ~20 Hours]",

    // HOMEPAGE CARD IMAGE: only used in Selected Work.
    hero: {
      src: "/images/mtnProject.png",
      alt: "Mountain Project UX Redesign screenshot",
      caption: "",
    },

    // PROJECT PAGE TOP IMAGE: choose a separate, wide image here.
    // Example src: "/images/projects/project-banner.jpg"
    // Leave empty to show a placeholder until your new image is ready.
    detailHero: {
      src: "/images/mtnProjectOverview.png",
      alt: "Mtn Project redesign Figma board screenshot",
      caption: "",
    },

    // PROJECT PAGE
    sections: [
        {
            title: "Overview",
            body: "I redesigned parts of Mountain Project after researching common frustrations climbers have with the app. The goal was to make finding routes and using route information feel simpler and more intuitive."
        },
        {
            title: "Research & Problem",
            body: "I started by getting user feedback and looking through discussions from climbers to find recurring complaints with the current experience. I focused on the problems that came up most often and had the biggest impact on finding and using routes."
        },
        {
            title: "Design Goals",
            body: "My main goal was to make important route information easier to find without adding more clutter. I also wanted the redesign to feel familiar to existing Mountain Project users rather than turning it into a completely different app."
        },
        {
            title: "Wireframes & Iteration",
            body: "I started with rough layouts to work through navigation and information hierarchy before spending time on visual details. I went through several versions as I decided what information needed to be most prominent and what could be moved out of the way. Many of these decisions were made by getting user feedback from my wireframes."
        },
        {
            title: "Final Design",
            body: "The final design makes it easier to explore climbing areas, find routes, and quickly get the information you need at the crag. I reorganized the navigation and route information and made the experience more visual without losing what already works about Mountain Project."
        },
    ],
    outcome: "The finished prototype gave me a chance to take real user feedback and turn it into specific design decisions rather than redesigning an app based only on my own preferences.",

    lessons: "This project taught me how important research is before starting a redesign. Some of my initial ideas changed once I looked at what other climbers were actually struggling with, and that helped me focus the project on solving real problems instead of just making the interface look different.",

    // PROJECT PAGE
    gallery: [
      {
        src: "/images/mtnWireframes.png",
        alt: "Mountain Project UX Redesign Wireframes",
        caption: "Wireframe Designs",
      },
      {
        src: "/images/mtnFinal.png",
        alt: "Mountain Project UX Final Screen Designs",
        caption: "Final Screen Designs",
      },
    ],
  },

];
