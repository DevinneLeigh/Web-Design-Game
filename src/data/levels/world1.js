export const world1 = [
  {
    id: "w1-l1",
    title: "Heading and Paragraphs",
    description: "Learn how to structure text content using HTML headings and paragraphs. Headings <h1> through <h6> define the hierarchy of your page, making it easier for users and search engines to understand your content. Paragraphs <p> are used to group blocks of text into readable sections. In this level, you’ll practice organizing content clearly and building the foundation of a well-structured webpage.",
    concept: "html-headings",
    unlocked: true,

    instructions: `
    <h2>Adding Headings and text</h2>

    <p>Headings and text are used to structure and organize content on a webpage.
    They are the foundation of almost any webpage you come across. As such, they are the first thing this tutorial is going to cover.</p>

    <dl>
      <dt>Headings</dt>
      <dd>Headings are used to define the structure and hierarchy of content on a webpage. There are six levels of headings in HTML:
      h1, h2, h3, h4, h5, h6. h1 is the most important heading; it's where the headline of the page usually goes, and there should only
      be one h1 per page. From h1 to h6, the importance decreases, along with how large the font is.</dd>

      <dt>Paragraphs</dt>
      <dd>Paragraphs are used to define blocks of text on a webpage. Within the angle brackets, the tag for paragraphs is quite simple: p.
      Even though it says it's a paragraph tag, it's typically used for almost all text content on a webpage. When you use a p tag, there 
      is automatically line space added before and after the text, making it easier to read.</dd>
    </dl>

    <p>For this exercise, just examine the different headings and paragraph, noting the differences and similarities, then try to make your own! 
    Please try to include at least two different heading tags and one paragraph tag of your own, though you can do more if you would like.</p>

    `,
    hint: "The smaller the number for headings, the larger and more important it usually is.",

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
    description: "Learn how to organize information using ordered <ol> and unordered <ul> lists. Lists are essential for grouping related items, such as steps, tasks, or collections of data. You will also use list items <li> to define each entry. By the end of this level, you should understand when to use numbered lists versus bullet points and how to structure them properly.",
    concept: "html-lists",
    unlocked: false,

    instructions: `
        <h2>Adding Lists</h2>
<p>Lists in HTML present information in a more visually appealing way than listing the same items in paragraphs.
        They are used to display related items separately, allowing the reader to more easily parse the information.
        There are three types of lists:
        ordered lists <code>&lt;ol&gt; &lt;/ol&gt;</code>,
        unordered lists <code>&lt;ul&gt; &lt;/ul&gt;</code>,
        and description lists <code>&lt;dl&gt; &lt;/dl&gt;</code>, though description lists are rarely ever used.</p>
        <h2>Ordered Lists</h2>
        <p>Ordered lists are numbered; these can be used for instructions or events that occur in a sequence.</p>

        <ol>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
        </ol>

        <h2>Unordered Lists</h2>
        <p>Unordered lists have bullet points rather than numbers, and while they show the list items in the order they were written, the reader knows that the order of the items does not matter.</p>

        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>

        <h2>List Items</h2>
        <p>Within ordered and unordered lists, the individual list items are enclosed in list item tags <code>&lt;li&gt; &lt;/li&gt;</code>. Lists can have any number of list items, and the numbers in ordered lists will automatically count up with each item.</p>

        <h2>Task</h2>
        <p>The comment in the starter code contains a complete sentence. Under the paragraph, create an <strong>unordered list</strong> of the chores. Remember to capitalize the first word of each list item.</p>
    `,
    hint: "Each item in a list must be placed within a list item tag.",

    starterCode: {
      html: `<!--Today, I need to mow the lawn, wash the dishes, and walk the dog.-->
      <p>Today's chores:</p>

      `,
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