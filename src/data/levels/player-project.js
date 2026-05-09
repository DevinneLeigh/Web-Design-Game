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
    [
        {
            id: "project2",
            defaultUnlocked: false, 
            title: "2nd Boss",
        
            instructions: `
            <h2>Instructions</h2>
        
            <p>
              Continue building your homepage by organizing content into sections
              and styling the layout with CSS.
            </p>
        
            <p><strong>In this challenge, practice using:</strong></p>
        
            <ul>
              <li>Divs, spans, and sections</li>
              <li>Classes and IDs</li>
              <li>Parent and child elements</li>
              <li>Padding and margin</li>
              <li>Background styling</li>
            </ul>
        
            <p><strong>Follow these steps:</strong></p>
        
            <ol>
              <li>
                Create a container using a <code>div</code> or <code>section</code> and give it the class <code>container</code>.
              </li>
              <li>
                Inside that container, add a <strong>Heading (h1 or h2)</strong> and a <strong>Paragraph</strong>.
              </li>
              <li>
                Add a <code>span</code> element anywhere inside your paragraph or heading.
              </li>
              <li>
                In your CSS, give the <code>.container</code> some <code>padding</code> and a <code>background-color</code>.
              </li>
            </ol>
            `,
        
            hint: "Make sure your h1/h2 and p tags are nested INSIDE your .container div. Don't forget to add padding and a background-color in the CSS tab!",
        
            starterCode: {
                html: `<div class="container">\n  \n</div>`,
                css: `.container {\n  \n}`,
            },
        
            completion: {
                requiredHTML: [
                    {
                        validTags: ["div", "section"],
                        class: "container",
                        nickName: "layout container",
                    
                        childElements: [
                            {
                                validTags: ["h1", "h2"],
                            },
                            {
                                validTags: ["p"],
                            },
                            {
                                validTags: ["span"],
                            }
                        ],
                    },
                ],
                requiredCSS: [
                    {
                        selector: ".container",
                        properties: [
                            { property: "padding" },
                            { property: "background-color" },
                        ],
                    },
                ],
            },
        },
        {
            id: "project3",
            defaultUnlocked: false,
            title: "3rd Boss",
        
            instructions: `
            <h2>Instructions</h2>
        
            <p>Time to make your page interactive! You'll be adding a data table and a contact form.</p>
        
            <p><strong>Follow these steps:</strong></p>
        
            <ol>
              <li>Create a <code>div</code> with the class <code>container</code>.</li>
              <li>Set the container's <code>display</code> property to <code>flex</code> or <code>grid</code> in your CSS.</li>
              <li>Inside the container, add a <code>table</code>.</li>
              <li>Below the table, add a <code>form</code> that contains at least one <code>button</code>.</li>
            </ol>
            `,
        
            hint: "Ensure your form has a button inside it, and your .container is set to display: flex or display: grid.",
        
            starterCode: {
                html: `<div class="container">\n  \n</div>`,
                css: `.container {\n  display: \n}`,
            },
        
            completion: {
                requiredHTML: [
                    {
                        validTags: ["div", "section"],
                        class: "container",
                        nickName: "interactive layout",
                        childElements: [
                            { validTags: ["table"] },
                            { 
                                validTags: ["form"],
                                childElements: [{ validTags: ["button"] }] 
                            },
                        ]
                    }
                ],
        
                requiredCSS: [
                    {
                        selector: ".container",
                        properties: [
                            { property: "display" }
                        ],
                    },
                ],
            },
        },
        {
            id: "project4",
            defaultUnlocked: false,
            title: "4th Boss",
        
            instructions: `
            <h2>Homepage Enhancement Challenge</h2>
        
            <p>Make your page pop with images, gradients, and animations!</p>
        
            <p><strong>Follow these steps:</strong></p>
        
            <ol>
              <li>Inside your <code>.container</code>, add an <code>img</code> tag.</li>
              <li>Use CSS to give the <code>.container</code> a <code>border-radius</code> and a <code>box-shadow</code>.</li>
              <li>Apply a <code>background</code> (like a linear-gradient) to the container.</li>
              <li>Add an <code>animation</code> property to the container to give it some movement.</li>
            </ol>
            `,
        
            hint: "To pass, ensure your .container has border-radius, box-shadow, background, and animation properties defined.",
        
            starterCode: {
                html: `<div class="container">\n  <img src="https://via.placeholder.com/150" />\n</div>`,
                css: `.container {\n  \n}`,
            },
        
            completion: {
                requiredHTML: [
                    {
                        validTags: ["div", "section"],
                        class: "container",
                        childElements: [{ validTags: ["img"] }]
                    },
                ],
        
                requiredCSS: [
                    {
                        selector: ".container",
                        properties: [
                            { property: "border-radius" },
                            { property: "box-shadow" },
                            { property: "background" },
                            { property: "animation" },
                        ],
                    },
                ],
            },
        }
    ]
]