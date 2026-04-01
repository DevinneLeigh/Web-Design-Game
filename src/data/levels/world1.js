export const world1 = [
  {
    id: "w1-l1",
    title: "Heading and Paragraphs",
    description: "Learn how to structure text content using HTML headings and paragraphs. Headings <h1> through <h6> define the hierarchy of your page, making it easier for users and search engines to understand your content. Paragraphs <p> are used to group blocks of text into readable sections. In this level, you’ll practice organizing content clearly and building the foundation of a well-structured webpage.",
    concept: "html-headings",
    unlocked: true,

    instructions: `
    <h2>Adding Headings and text</h2>

    <p></p>

    <ol>
      <li></li>
      <li></li>
      <li></li>
    </ol>

    <p></p>

    `,
    hint: "",

    starterCode: {
      html: `<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
<p>This is a paragraph of text.</p>`,
      css: ``
    },

    completion: {
      requiredHTML: ["h1"],

      requiredCSS: []
    }

  },

    {
    id: "w1-l2",
    title: "Lists",
    description: "Learn how to organize information using ordered <ol> and unordered <ul> lists. Lists are essential for grouping related items, such as steps, tasks, or collections of data. You’ll also use list items <li> to define each entry. By the end of this level, you should understand when to use numbered lists versus bullet points and how to structure them properly.",
    concept: "html-lists",
    unlocked: false,

    instructions: `
        <h2>Adding Lists</h2>
    `,
    hint: "",

    starterCode: {
      html: `<h2>An Unordered HTML List</h2>

<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>  

<h2>An Ordered HTML List</h2>

<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol> `,
      css: ``
    },

    completion: {
      requiredHTML: [`<!--Today, I need to mow the lawn, wash the dishes, and walk the dog.-->
      <p>Today's chores:</p>
      
      <ul>
        <li>Mow the lawn</li>
        <li>Wash the dishes</li>
        <li>Walk the dog</li>
      </ul>`],
      requiredCSS: []
    }
  },

  {
    id: "w1-l3",
    title: "Formatting",
    description: "Learn how to emphasize and style text using HTML formatting tags. Elements like <strong>, <em>, <b>, and <i> help convey importance and meaning, while others like <mark>, <small>, <sub>, and <sup> provide visual variations. This level introduces both semantic and visual formatting so you can better communicate intent and improve readability.",
    concept: "html-formatting",
    unlocked: false,

    instructions: `
        <h2>Formatting Text</h2>
    `,
    hint: "",

    starterCode: {
      html: `<p><b>This text is bold</b></p>
<p><i>This text is italic</i></p>
<p>This is<sub> subscript</sub></p>
<p>This is <sup>superscript</sup></p>
<p>This is <u>underlined</u></p>
<p>This is <del>deleted</del> text</p>
<p>This is <mark>highlighted</mark> text</p>
<p>This is <small>small</small> text</p>
<p>This is <strong>important</strong> text</p>
<p>This is <em>emphasized</em> text</p>`,
      css: ``
    },

    completion: {
      requiredHTML: [],

      requiredCSS: []
    }
  },
  {
    id: "w1-l4",
    title: "Buttons",
    description: "Learn how to create interactive buttons using the <button> tag in HTML. In this level, you’ll explore different types of buttons, including submit, reset, and regular buttons, and learn how to customize their appearance and behavior.",
    concept: "html-buttons",
    unlocked: false,

    instructions: `
        <h2>Adding Buttons</h2>
    `,
    hint: "",

    starterCode: {
      html: ``,
      css: ``
    },

    completion: {
      requiredHTML: [],

      requiredCSS: []
    }
  },
      {
    id: "w1-l5",
    title: "Divs, Spans, and Sections",
    description: "Learn how to group and organize content using container elements like <div>, <span>, and <section>. These elements help structure your webpage into logical parts. <div> is used for block-level grouping, <span> for inline content, and <section> for meaningful page sections. Understanding these elements is critical for layout and styling later with CSS.",
    concept: "html-div",
    unlocked: false,

    instructions: `
        <h2>Adding a Div Container</h2>
    `,
    hint: "",

    starterCode: {
      html: ``,
      css: ``
    },

    completion: {
      requiredHTML: [],

      requiredCSS: []
    }
  },

        {
    id: "w1-l6",
    title: "Classes and IDs",
    description: "Learn how to use classes and IDs to target specific elements in your HTML for styling and interactivity. Classes can be reused across multiple elements, while IDs are unique identifiers. This level will teach you how to assign and use these attributes effectively in your HTML structure.",
    concept: "html-classes-ids",
    unlocked: false,

    instructions: `
        <h2>Adding Classes and IDs</h2>
    `,
    hint: "",

    starterCode: {
      html: ``,
      css: ``
    },

    completion: {
      requiredHTML: [],

      requiredCSS: []
    }
  },
  
      {
    id: "w1-l7",
    title: "Images",
    description: "Learn how to add images to your webpage using the <img> tag in HTML. In this level, you’ll explore how to include images from different sources, set alternative text for accessibility, and understand basic attributes like src and alt.",
    concept: "html-images",
    unlocked: false,

    instructions: `
        <h2>Adding Images</h2>
    `,
    hint: "",

    starterCode: {
      html: ``,
      css: ``
    },

    completion: {
      requiredHTML: [],

      requiredCSS: []
    }
  },
      {
    id: "w1-l8",
    title: "Tables",
    description: "Learn how to organize data into rows and columns using HTML tables. You’ll use elements like <table>, <tr>, <th>, and <td> to structure tabular data. This level focuses on presenting structured information clearly and understanding when tables are appropriate.",
    concept: "html-tables",
    unlocked: false,

    instructions: `
        <h2>Adding Tables</h2>
    `,
    hint: "",

    starterCode: {
      html: ``,
      css: ``
    },

    completion: {
      requiredHTML: [],

      requiredCSS: []
    }
  },
      {
    id: "w1-l9",
    title: "Parent and Child",
    description: "Learn about the parent-child relationships in HTML elements. Understanding how elements are nested within each other is crucial for structuring your webpage and applying styles effectively. This level will help you grasp the concept of element hierarchy and how it impacts the layout and styling of your content.",
    concept: "html-parent-child",
    unlocked: false,

    instructions: `
        <h2>Parent and Child</h2>
    `,
    hint: "",

    starterCode: {
      html: ``,
      css: ``
    },

    completion: {
      requiredHTML: [],

      requiredCSS: []
    }
  },
  {
    id: "w1-l10",
    title: "Forms",
    description: "Learn how to create interactive forms using HTML. Forms allow users to input and submit data, making them essential for user registration, contact pages, and more. In this level, you’ll explore form elements like <input>, <textarea>, <select>, and <button>, as well as how to structure a form properly.",
    concept: "html-forms",
    unlocked: false,

    instructions: `
        <h2>Forms</h2>
    `,
    hint: "",

    starterCode: {
      html: ``,
      css: ``
    },

    completion: {
      requiredHTML: [],

      requiredCSS: []
    }
  },
]