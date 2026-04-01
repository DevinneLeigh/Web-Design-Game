export const world1 = [
  {
    id: "w1-l1",
    title: "Heading and Paragraphs",
    description: "Learn how to add headings and paragraphs to your webpage.",
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
    description: "Learn how to add ordered and unordered lists to your webpage.",
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
    description: "Learn how to format text using HTML tags.",
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
    description: "Learn how to use divs, spans, and sections to structure your webpage.",
    concept: "html-div",
    unlocked: false,

    instructions: `
        <h2>Adding a Div Container</h2>
        <p>The <code>&lt;div&gt;</code> tag is a block level element used for grouping other elements together. By applying CSS styles to your divs, you can easily control the layout of your webpage.</p>

        <h2>Adding a Span Tag</h2>
        <p>The <code>&lt;span&gt;</code> tag is an inline element used to modify part of a webpage. It doesn't do anything on its own, but can be modified easily  with CSS or JavaScript.</p>
        <p>For example, if you wanted to change the color of one word, you could put it in a span tag and then style it:</p>
        <code>
          &lt;p&gt;My favorite color is &lt;span style="color:green"&gt;green&lt;/span&gt;.&lt;/p&gt;
        </code>
        <p>My favorite color is <span style="color: green;">Green</span>.</p>

        <h2>Adding a Section Tag</h2>
        <p>The <code>&lt;section&gt;</code> tag is used to group together related content within a larger webpage. Sections should include a heading tag.</p>

        <h2>Challenge</h2>
        <p>Create a div. Within your div, add two sections containing a h2 and a p tag. Using the span tag, make the first word in each p tag 30px large.</p>
    `,
    hint: "To style all spans at once, apply your styling to the span tag itself in your CSS.",

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
    description: "Learn how to use classes and IDs to style specific elements on your webpage.",
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
    description: "Learn how to add images to your webpage using the img tag.",
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
    description: "Learn how to add tables to your webpage using the table tag.",
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
    description: "Learn about parent and child elements in HTML and how they relate to each other.",
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
    description: "Learn how to create forms in HTML to collect user input.",
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