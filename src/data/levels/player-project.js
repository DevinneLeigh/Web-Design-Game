export const playerProject = [
    {
        id: "project1",
        title: "1st Boss",

        instructions: `
    <h2>Instructions</h2>

    <p>
      Create a <strong>jumbotron hero section</strong> that highlights a main message on the page.
    </p>

    <p><strong>Follow these steps:</strong></p>

    <ol>
      <li>
        In the HTML editor, create a container element with the class
        <code>jumbotron</code>.
      </li>

      <li>
        Inside this container, add an <code>h1</code> heading with the text
        <strong>"Welcome to My Website"</strong>.
      </li>

      <li>
        Below the heading, add a paragraph <code>(p)</code> with the text
        <strong>"Learn web design by completing challenges."</strong>.
      </li>
    </ol>

    <p><strong>Now style the section using CSS:</strong></p>

    <ul>
      <li>Select the <code>.jumbotron</code> class.</li>
      <li>Add <code>padding</code> so there is space inside the container.</li>
      <li>Give the section a <code>background-color</code> so it stands out.</li>
      <li>Use <code>text-align</code> to center the content.</li>
      <li>Increase the font size of the heading.</li>
    </ul>

    <p>
      When finished, the page should display a large centered hero section with
      a heading and supporting text.
    </p>

    `,
        hint: "Use <h1>...</h1> inside the body.",

        starterCode: {
            html: `<div></div>`,
            css: ``,
        },

        completion: {
            requiredHTML: [
                {
                    validTags: ["div"],
                    class: "jumbotron",
                    nickName: "jumbotron container",

                    childElements: [
                        {
                            validTags: ["h1"],
                            order: 1,

                            content: "Welcome to My Website",
                        },
                        {
                            validTags: ["p"],
                            order: 2,

                            content: "Learn web design by completing challenges\\.",
                            contentNickName: "Learn web design by completing challenges.",
                        },
                    ],
                },
            ],

            requiredCSS: [{
                    selector: ".jumbotron",

                    properties: [{
                        property: "padding",
                        value: "10",
                        unit: "px",
                        operator: ">=",
                            
                    },{
                        property: "background-color"
                    },{
                        property: "text-align",
                        value: "center",
                    }]
                }],
        },
        
    },
    {

        id: "project2",

        title: "2nd Boss",

        instructions: `

<h2>Structure Your Homepage Layout</h2>

<p>Organize your homepage using layout and structure techniques.</p>

<ul>

  <li>Divs, spans, sections</li>

  <li>Classes and IDs</li>

  <li>Parent and child structure</li>

  <li>Padding and margin</li>

  <li>Background styling</li>

</ul>

<ol>

  <li>Create a container</li>

  <li>Add child elements</li>

  <li>Apply spacing and background</li>

</ol>

`,

        hint: "Use a container, then space it with padding and margin.",

        starterCode: {

            html: `<div></div>`,

            css: ``,

        },

        completion: {

            requiredHTML: [

                {

                    validTags: ["div", "section"],

                    nickName: "structured layout",

                    childElements: [

                        { validTags: ["h1"], order: 1 },

                        { validTags: ["p"], order: 2 },

                    ],

                },

            ],

            requiredCSS: [

                {

                    selector: ".container",

                    properties: [

                        { property: "padding" },

                        { property: "margin" },

                        { property: "background-color" },

                    ],

                },

            ],

        },

    },

    {

        id: "project3",

        title: "3rd Boss",

        instructions: `

<h2>Build Your Interactive Homepage</h2>

<p>Add interactive components to your layout.</p>

<ul>

  <li>Buttons</li>

  <li>Tables</li>

  <li>Forms</li>

  <li>Flexbox or Grid</li>

</ul>

<ol>

  <li>Create layout (flex or grid)</li>

  <li>Add form</li>

  <li>Add table</li>

  <li>Add button</li>

</ol>

`,

        hint: "Use flex or grid, then add form, table, and button.",

        starterCode: {

            html: `<div></div>`,

            css: ``,

        },

        completion: {

            requiredHTML: [

                {

                    validTags: ["div", "section"],

                    nickName: "interactive layout",

                    childElements: [

                        { validTags: ["form"], order: 1 },

                        { validTags: ["table"], order: 2 },

                        { validTags: ["button"], order: 3 },

                    ],

                },

            ],

            requiredCSS: [

                {

                    selector: ".container",

                    properties: [

                        {

                            property: "display",

                            value: ["flex", "grid"],

                        },

                    ],

                },

            ],

        },

    },

    {

        id: "project4",

        title: "4th Boss",

        instructions: `

<h2>Homepage Enhancement Challenge</h2>

<p>Enhance your homepage with visuals and motion.</p>

<ul>

  <li>Images</li>

  <li>Rounded corners</li>

  <li>Shadows</li>

  <li>Gradients</li>

  <li>Animation</li>

</ul>

<ol>

  <li>Add an image</li>

  <li>Add border-radius</li>

  <li>Add shadow</li>

  <li>Add gradient</li>

  <li>Add animation</li>

</ol>

`,

        hint: "Add image → style → then animate.",

        starterCode: {

            html: `<div></div>`,

            css: ``,

        },

        completion: {

            requiredHTML: [

                {

                    validTags: ["img", "div", "section"],

                    nickName: "visual layout",

                },

            ],

            requiredCSS: [

                {

                    selector: "div",

                    properties: [

                        { property: "border-radius" },

                        { property: "box-shadow" },

                    ],

                },

                {

                    selector: "*",

                    properties: [{ property: "animation" }],

                },

            ],

        },

    },

];