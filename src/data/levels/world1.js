export const world1 = [
  {
    id: "w1-l1",
    title: "Heading and Paragraphs",
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
    concept: "html-lists",
    unlocked: false,

    instructions: `
        <h2>Adding Lists</h2>
        <p>Lists in HTML present information in a more visually appealing way than listing the same items in paragraphs.
        They are used to display related items separately, allowing the reader to more easily parse the information.
        There are three types of lists: ordered lists <code><ol> </ol></code>, unordered lists <code><ul> </ul></code>, and
        description lists <code><dl> </dl></code>, though description lists are rarely ever used.</p>

        <h2>Ordered Lists</h2>
        <p>Ordered lists are numbered; these can be used for instructions or events that occur in a sequence.</p>

        <ol>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
        </ol>

        <h2>Unordered Lists</h2>
        <p>Unordered lists have bullet points rather than numbers, and while they show the list items in the order they were written,
        the reader knows that the order of the items does not matter.</p>

        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>

        <h2>List Items</h2>
        <p>Within ordered and unordered lists, the individual list items are enclosed in list item tags <code><li> </li>.
        Lists can have any number of list items, and the numbers in ordered lists will automatically count up with each item.</p>

        <h2>Task</h2>
        <p>The comment in the starter code contains a complete sentence. Under the paragraph, create an <strong>unordered list</strong>
        of the chores. Remember to capitalize the first word of each list item.
    `,
    hint: "Each item in a list must be placed within a list item tag.",

    starterCode: {
      html: `<!--Today, I need to mow the lawn, wash the dishes, and walk the dog.-->
      <p>Today's chores:</p>


`,
      css: ``
    },

    completion: {
      requiredHTML: [],

      requiredCSS: []
    }
  },

  {
    id: "w1-l3",
    title: "Formatting",
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