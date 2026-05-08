export const playerProject = [
    {
        id: "project1",
        defaultUnlocked: false,
        title: "1st Boss",

        instructions: `
    <h2>Instructions</h2>

    <p>
        Create an example web page that covers the following concepts:
        <ul>
            <li>HTML Heading and Paragraphs</li>
            <li>HTML Formatting</li>
            <li>HTML Lists</li>
            <li>CSS Fonts and Formatting</li>
            <li>CSS Colors</li>
        </ul>
    </p>

    <p><strong>Follow these steps:</strong></p>

    <ol>
      <li> 
        Add a <code>h1</code> heading with the text <strong>"Welcome to My Website"</strong>, put it in between the <code>body</code> tags. 
      </li><br>

      <li>
        Add CSS to the heading. Make sure the heading is centered. Add colors and formatting to the heading using CSS. You can choose any colors and formatting you like. 
      </li><br>

      <li>
        Below the heading, add a <code>h2</code> with the text
        <strong>"Learning web design by completing challenges."</strong> Underline and center this text.  
      </li><br>

      <li>
        Add a list of things you have already learned or want to learn about web design. Use either an ordered list <code>(ol)</code> or unordered list <code>(ul)</code>.
      </li><br>

      <li>
        Add a <code>p</code> element, and write something about why you are interested in learning web design. Center the text and add color!</li>
    </ol>

    <p>
      When finished, the page should display a heading, text, and a list, all styled with CSS. Be creative and have fun designing your web page!
    </p>

    `,
        hint: "Feel stuck? Refer to the previous <em><b>HTML-1, HTML-2, HTML-3, CSS-1, CSS-2</b></em> levels for help!",

        starterCode: {
            html: `<div>
<body>
</body>
</div>`,
            css: ``,
        },

        completion: {
            requiredHTML: [
                {
                    validTags: ["h1"],
                    nickName: "main heading",
                    content: "Welcome to My Website",
                    contentNickName: "Header text",
                },
                {
                    validTags: ["h2"],
                    nickName: "subheading",
                    content: "Learning web design by completing challenges\\.",
                    contentNickName: "Subheading text",
                },
                {
                    validTags: ["u"],
                    nickName: "underlined text",
                    content: "Learning web design by completing challenges\\.",
                    contentNickName: "Underlined text",
                },
                {
                    validTags: ["ol", "ul"],
                    nickName: "ordered or unordered list",
                    childElements: [
                        {
                            validTags: ["li"],
                            nickName: "list item",
                            count: 2,
                        },
                    ],
                },
                {
                    validTags: ["p"],
                    nickName: "paragraph",
                    content: ".+",
                    contentNickName: "a paragraph about why you are interested in web design",
                },
            ],

            requiredCSS: [
                {
                    selector: "h1",
                    properties: [
                        {
                            property: "text-align",
                            value: [[{ value: "center" }]],
                        },
                        {
                            property: "color",
                        },
                        {
                            property: "font-size",
                        },
                    ],

                    selector: "h2",
                    properties: [
                        {
                            property: "text-align",
                            value: [[{ value: "center" }]],
                            property:"text-decoration",
                            value: [[{ value: "underline" }]],
                        },
                    ],

                    selector: "p",
                    properties: [
                        {
                            property: "text-align",
                            value: [[{ value: "center" }]],
                        },
                        {
                            property: "color",
                        },
                    ]
                },
            ],
        },
        
    },
    {
        id: "project2",
        defaultUnlocked: false,
        title: "2nd Boss",

        instructions: ``,
        hint: "",

        starterCode: {
            html: `<div></div>`,
            css: ``,
        },

        completion: {
            requiredHTML: [
                {
                    validTags: ["div"],
                    class: "",
                    nickName: "",

                    childElements: [
                        {
                            validTags: ["h1"],
                            order: 1,

                            content: "",
                        },
                        {
                            validTags: ["p"],
                            order: 2,

                            content: "",
                            contentNickName: "",
                        },
                    ],
                },
            ],

            requiredCSS: [],
        },
        
    },
    {
        id: "project3",
        defaultUnlocked: false,
        title: "3rd Boss",

        instructions: ``,
        hint: "",

        starterCode: {
            html: `<div></div>`,
            css: ``,
        },

        completion: {
            requiredHTML: [
                {
                    validTags: ["div"],
                    class: "",
                    nickName: "",

                    childElements: [
                        {
                            validTags: ["h1"],
                            order: 1,

                            content: "",
                        },
                        {
                            validTags: ["p"],
                            order: 2,

                            content: "",
                            contentNickName: "",
                        },
                    ],
                },
            ],

            requiredCSS: [],
        },
        
    },
    {
        id: "project4",
        defaultUnlocked: false,
        title: "4th Boss",

        instructions: ``,
        hint: "",

        starterCode: {
            html: `<div></div>`,
            css: ``,
        },

        completion: {
            requiredHTML: [
                {
                    validTags: ["div"],
                    class: "",
                    nickName: "",

                    childElements: [
                        {
                            validTags: ["h1"],
                            order: 1,

                            content: "",
                        },
                        {
                            validTags: ["p"],
                            order: 2,

                            content: "",
                            contentNickName: "",
                        },
                    ],
                },
            ],

            requiredCSS: [],
        },
        
    },

];
