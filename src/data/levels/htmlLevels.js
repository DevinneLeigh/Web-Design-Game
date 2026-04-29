export const htmlLevels = [
  {
    id: "html-01",
    defaultUnlocked: true,
    title: "Heading and Paragraphs",
    description: "Learn how to structure text content using HTML headings and paragraphs. Headings <h1> through <h6> define the hierarchy of your page, making it easier for users and search engines to understand your content. Paragraphs <p> are used to group blocks of text into readable sections. In this level, you’ll practice organizing content clearly and building the foundation of a well-structured webpage.",
    concept: "html-headings",

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
      requiredHTML: [
        {
          nickName: "heading tag",
          validTags:["h1","h2","h3","h4","h5","h6"],
          uniqueCount: 2
        },
        {
          nickName: "paragraph tag",
          validTags: ["p"]
        }],

      requiredCSS: []
    }
  },

  {
    id: "html-02",
    defaultUnlocked: false,
    title: "Formatting",
    description: "Learn how to emphasize and style text using HTML formatting tags. Elements like <strong>, <em>, <b>, and <i> help convey importance and meaning, while others like <mark>, <small>, <sub>, and <sup> provide visual variations. This level introduces both semantic and visual formatting so you can better communicate intent and improve readability.",
    concept: "html-formatting",

    instructions: `
        <h2>Formatting Text</h2>
        <p>Use HTML formatting tags to style the text below</p>
        <ul>
        <li>Make one word <b>bold</b></li>
        <li>Make one word <em>italic</em></li>
        <li>Make one word <u>underlined</u></li>
        <li>Add a <mark>highlighted</mark> word</li>
        <li>Add either <sub>subscript</sub> or <sup>superscript</sup></li>
        </ul>
        <p>Below is some formatted text already so you can see what it looks like. When you're done, try to explore the other ones!</p>
    `,
    hint: "Try using tags like <code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code>, <code>&lt;u&gt;</code>, <code>&lt;mark&gt;</code>, <code>&lt;sub&gt;</code>, and <code>&lt;sup&gt;</code> to format the text.",

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
      requiredHTML: [{validTags: ["b", "em", "u", "mark", "sub", "sup"]}],
      requiredCSS: []
    }
  },

  {
    id: "html-03",
    defaultUnlocked: false,
    title: "Lists",
    description: "Learn how to organize information using ordered <ol> and unordered <ul> lists. Lists are essential for grouping related items, such as steps, tasks, or collections of data. You will also use list items <li> to define each entry. By the end of this level, you should understand when to use numbered lists versus bullet points and how to structure them properly.",
    concept: "html-lists",

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
      requiredHTML: [{
        validTags: ["ul"],
        nickName: "unordered list",

        childElements: [
          {
            nickName: "list item",

            validTags: ["li"],
            content:"^Mow the lawn",
            contentNickName:"Mow the lawn",
          },
          {
            nickName: "list item",
           
            validTags: ["li"],
            content:"^Wash the dishes",
            contentNickName:"Wash the dishes",
          },
          {
            nickName: "list item",
           
            validTags: ["li"],
            content:"^Walk the dog",
            contentNickName:"Walk the dog",
          },
        ]
      }],
      requiredCSS: []
    }
  },
  {
    id: "html-04",
    defaultUnlocked: false,
    title: "Divs, Spans, and Sections",
    description: "Learn how to group and organize content using container elements like <div>, <span>, and <section>. These elements help structure your webpage into logical parts. <div> is used for block-level grouping, <span> for inline content, and <section> for meaningful page sections. Understanding these elements is critical for layout and styling later with CSS.",
    concept: "html-div",

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
      requiredHTML: [
        {
          validTags: ["div"],
          childElements: [
            {  
              validTags: ["section"],
              count: 2,

              childElements: [
                {
                  validTags : ["h1"],
                  order: 1
                },
                {
                  validTags: ["p"],
                  order: 2,

                  contentIncludesHTML: true,
                  content: "^((<[^<]*?>)|\\s)*?<span.*>\\w+<\\/span.*>",
                  contentNickName: "First word in span",

                  childElements: [
                    {
                      validTags: ["span"]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],

      requiredCSS: []
    }
  },

        {
    id: "html-05",
    defaultUnlocked: false,
    title: "Classes and IDs",
    description: "Learn how to use classes and IDs to target specific elements in your HTML for styling and interactivity. Classes can be reused across multiple elements, while IDs are unique identifiers. This level will teach you how to assign and use these attributes effectively in your HTML structure.",
    concept: "html-classes-ids",

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
    id: "html-06",
    defaultUnlocked: false,
    title: "Parent and Child",
    description: "Learn about the parent-child relationships in HTML elements. Understanding how elements are nested within each other is crucial for structuring your webpage and applying styles effectively. This level will help you grasp the concept of element hierarchy and how it impacts the layout and styling of your content.",
    concept: "html-parent-child",

    instructions: `
        <h2>Parent and Child</h2>
        <p>Create a parent element with a child element inside it.</p>
        <ul>
        <li>Add a <b>div</b> element</li>
        <li>Inside the div, add a <b>p</b> element</li>
        <li>Write some text inside the <b>p</b> element</li>
        </ul>
    `,
    hint: "Place one element inside another, like a div containing a paragraph.",

    starterCode: {
      html: `<!--Add your parent/child elements here -->`,
      css: ``
    },

    completion: {
      requiredHTML: [{
        validTags: ["div"],
        nickName: "parent div",

        childElements: [
          {
            validTags: ["p"],
            content: ".+",
            contentNickName: "some text"
          }
        ]
      }],

      requiredCSS: []
    }
  },
  {
    id: "html-07",
    defaultUnlocked: false,
    title: "Tables",
    description: "Learn how to organize data into rows and columns using HTML tables. You’ll use elements like <table>, <tr>, <th>, and <td> to structure tabular data. This level focuses on presenting structured information clearly and understanding when tables are appropriate.",
    concept: "html-tables",

    instructions: `
        <h2>Adding Tables</h2>
        <p>This activity will help you learn how to build a simple table using HTML and style it with basic CSS.</p>

        <p>Tables are used to organize information into rows and columns, like a spreadsheet. You will create a table with a header row and some data.</p>

        <p>To start, use the &lt;table&gt; tag to create the table. Inside the table, use &lt;tr&gt; to create a row.</p>

        <p>Inside each row, use &lt;th&gt; for header cells (these are usually bold) and &lt;td&gt; for regular data cells.</p>

        <p>For example, a header row might include columns like Name, Age, and Favorite Language.</p>

        <p>After creating your table structure, you can use CSS to make it look better. You can add borders, spacing, and background colors.</p>

        <p>Use the "border" property to add lines around your table, and "padding" to create space inside each cell.</p>

        <p>Try editing the example code by adding more rows or changing the text inside the table.</p>
    `,
    hint: "",

    starterCode: {
      html: `<h1>My First Table</h1>

  <table>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Favorite Language</th>
    </tr>
    <tr>
      <td>Example Name</td>
      <td>00</td>
      <td>Example Language</td>
    </tr>
  </table>
`,
      css: `table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  border: 1px solid black;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}`
    },

    completion: {
      requiredHTML: [],

      requiredCSS: []
    }
  },
  {
    id: "html-08",
    defaultUnlocked: false,
    title: "Forms",
    description: "Learn how to create interactive forms using HTML. Forms allow users to input and submit data, making them essential for user registration, contact pages, and more. In this level, you’ll explore form elements like <input>, <textarea>, <select>, and <button>, as well as how to structure a form properly.",
    concept: "html-forms",

    instructions: `
        <h2>Forms</h2>
        <p>Goal: Create a simple contact form</p>

        <p>For this we will be making a simple contact form, one of the most common uses for the tag. </p>
        <p>First we make a &lt;form&gt; tag, &lt;form action="" method="post"&gt; &lt;/form&gt; and put everything inside of it</p>
        <p>You can label your form items, &lt;label for="fname"&gt;First Name: &lt;/label&gt;</p>
        <p>next add the input, &lt;input type="text" id="fname" name="fname" value=""&gt;&lt;br&gt; adding the &lt;br&gt; will create a line break for the next item</p>
        <p>add a few more labels and inputs, </p>
        <p>&lt;label for="lname"&gt;Last Name: &lt;/label&gt;</p>
        <p>&lt;input type="text" id="lname" name="lname" value=""&gt;&lt;br&gt;</p>
        
        <p>Using the number type only allows numbers in the input box</p>
        <p>&lt;label for="phonenumber"&gt;Phone Number: &lt;/label&gt;</p>
        <p>&lt;input type="number" id="phonenumber" name="phonenumber" value=""&gt;&lt;br&gt;</p>
        
        <p>Using radials allows for selecting from a set of options</p>
        <p>&lt;label for="country"&gt;Country: &lt;/label&gt;&lt;br&gt;</p>
        <p>&lt;input type="radio" id="country1" name="country" value="USA"&gt;</p>
        <p>&lt;label for="country1"&gt;USA&lt;/label&gt;&lt;br&gt;</p>
        <p>&lt;input type="radio" id="country2" name="country" value="Canada"&gt;</p>
        <p>&lt;label for="country2"&gt;Canada&lt;/label&gt;&lt;br&gt;</p>
        <p>&lt;input type="radio" id="country3" name="country" value="Mexico"&gt;</p>
        <p>&lt;label for="country3"&gt;Mexico&lt;/label&gt;&lt;br&gt;</p>
        <p>&lt;input type="radio" id="country4" name="country" value="Other"&gt;</p>
        <p>&lt;label for="country4"&gt;Other&lt;/label&gt;&lt;br&gt;</p>

        <p>Another tag that allows for a selection of options is the &lt;selection&gt; tag</p>
        <p>&lt;label for="reason"&gt;Select how you found us: &lt;/label&gt;</p>
        <p>&lt;select id="reason" name="reason"&gt;</p>
          <p>&Tab;&lt;option value="referral"&gt;From a friend&lt;/option&gt;</p>
          <p>&Tab;&lt;option value="youtube"&gt;Youtube&lt;/option&gt;</p>
          <p>&Tab;&lt;option value="internet"&gt;The internet&lt;/option&gt;</p>
          <p>&Tab;&lt;option value="work"&gt;From work&lt;/option&gt;</p>
          <p>&Tab;&lt;option value="other"&gt;Other&lt;/option&gt;</p>
        <p>&lt;/select&gt;</p>


        <p>And finally you add a submit button</p>
        <p>&lt;input type="submit" value="submit"&gt;</p>
        
        <p>you have successfully created a basic contact form</p>
        <p>Currently the form will clear itself when submitted as there is no action for the form to take</p>
    `,
    hint: "You should have 9 labels, 8 inputs, 5 options within a select, and a submit button as an input tag",

    starterCode: {
      html: ``,
      css: ``
    },

    completion: {
      requiredHTML: [{
        validTags: ["form"],
        childElements: [
          {
            nickName: "label",
            validTags: ["label"],
            count: 9
          },
                    {
            nickName: "input",
            validTags: ["input"],
            count: 9
          },
          {
            nickName: "select",
            validTags: ["select"],
            childElements: [
              {
                nickName: "option",
                validTags: ["option"],
                count: 5
              }
            ]
          },
                    
        ]
      }],

      requiredCSS: []
    }
  },
  {
    id: "html-09",
    defaultUnlocked: false,
    title: "Buttons",
    description: "Learn how to create interactive buttons using the <button> tag in HTML. In this level, you’ll explore different types of buttons, including submit, reset, and regular buttons, and learn how to customize their appearance and behavior.",
    concept: "html-buttons",

    instructions: `
        <h2>Adding Buttons</h2>
        <p>Goal: Create a simple styled button</p>

        <p>HTML Tasks:</p>
        <p>1. Add a &lt;button&gt; element</p>
        <p>2. Give it the class "btn"</p>
        <p>3. Set the text to: Click Me</p>

        <p>CSS Tasks:</p>

        <p>4. Create a .btn class</p>

        <p>5. Add these styles:</p>
        <p>background-color: blue;</p>
        <p>color: white;</p>
        <p>padding: 10px;</p>
        <p>border: none;</p>
    `,
    hint: "You should see a blue button with white text that says (Click Me)",

    starterCode: {
      html: `<head>
      <h1>Adding Buttons</h1>
      </head>
      <body>

      <!-- Add your button Here -->

      </body>`,
      css: `/* Add your .btn class below */`
    },

    completion: {
      requiredHTML: [
        {
          validTags: ["button"],
          class: "btn",
          content: "Click Me"
        }
      ],

      requiredCSS: []
    }
  },
  
  {
    id: "html-10",
    defaultUnlocked: false,
    title: "Images",
    description: "Learn how to add images to your webpage using the <img> tag in HTML. In this level, you’ll explore how to include images from different sources, set alternative text for accessibility, and understand basic attributes like src and alt.",
    concept: "html-images",

    instructions: `
        <h2>Adding Images</h2>
        <p>
          The <code>&lt;img&gt;</code> tag is used to embed images on your webpage.
        </p>
        <p>
          The <code>src</code> attribute is what tells the HTML where your image is located in the form of a URL. This can be an absolute or relative URL.
        </p>
        <p>
          An absolute URL links to an image hosted on an external site:
        </p>
        <code>
          &lt;img src="https://example.com/images/example-image.jpg"&gt;
        </code>
        <p>
          A relative URL links to an image hosted on your site. Unlike an absolute URL, it doesn't include the domain name:
        </p>
        <code>
          &lt;img src="images/my-image.jpg"&gt;
        </code>
        <p>
          Any image you add should include alt text, using the <code>alt</code> attribute. Alt text is used by screen readers to describe images to visually impaired users. It's also what's displayed if for some reason your image doesn't load. Try to keep your alt text descriptive but brief.
        </p>
        <code>
          &lt;img src="images/my-image.jpg" alt="Example Alt Text"&gt;
        </code>

        <h2>Challenge</h2>
        <p>
          Add the src and alt attributes to the img tag provided.
        </p>
        <p>For the src, use the url: <code>https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg</code></p>
        
        <p>For the alt text use the following, without quotes: "A red apple on its side in front of a white background"</p>
    `,
    hint: "",

    starterCode: {
      html: `<img>`,
      css: `img {
      width: 300px;
    }`
    },

    completion: {
      requiredHTML: [],

      requiredCSS: []
    }
  },
]