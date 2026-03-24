export const landingPage = {
  id: "landing-page",

  title: "Your Landing Page",

  starterCode: {
    html: `<div class="hero">
  <h1>My Page</h1>
</div>`,

    css: `.hero {
  height: 300px;
}`
  },

  // rules change based on progress
  requirements: [
    {
      concept: "html-headings",
      rules: {
        requiredHTML: ["h1"]
      }
    },
    {
      concept: "flexbox-center",
      rules: {
        requiredCSS: [
          { property: "display", value: "flex" },
          { property: "justify-content", value: "center" }
        ]
      }
    }
  ]
}