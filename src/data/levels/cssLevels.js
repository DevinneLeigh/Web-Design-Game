export const cssLevels = [
  {
    id: "css-01",
    defaultUnlocked: false,
    title: "Fonts and Formatting",
    description: "Learn how to change the font family, size, and style of text using CSS. This level introduces you to font properties like font-family, font-size, font-weight, and font-style. You’ll learn how to apply different fonts to your webpage and understand the impact of typography on design and readability.",
    concept: "css-fonts-formatting",

    instructions: `
        <h2>Fonts & Formatting</h2>
        

        <p>This activity will help you learn how to style text using CSS.</p>

        <p>In this level, you will change the font, size, color, and alignment of text on your webpage.</p>

        <p>Start by creating one &lt;h1&gt; heading and one &lt;p&gt; paragraph in your HTML file.</p>

        <p>Next, open your CSS file. You will write your styling code in the CSS file.</p>

        <p>1).<p>
        <p>First, use the "font-family" property to change the font of your heading or paragraph.</p>

        <p>2).<p>
        <p>Use the "font-size" property to make your heading larger than your paragraph text.</p>
        <p>The size adjustment for fonts will use a set of integers followed by :px <p>

        <p>3).<p>
        <p>Next, use the "color" property to change the color of your heading text.</p>

        <p>4).<p>
        <p>Use the "text-align" property to center your heading on the page.</p>
        
        <p>5).<p>
        <p>Finally, use the "font-weight" property to make your heading bold.</p>
    `,
    hint: "Your goal: Is to style your webpage text using CSS. Add a heading and paragraph, then change the font, text size, color, alignment, and font weight to complete the level.",

    starterCode: {
      html: `<h1>My Heading</h1>

  <p>
    This is a paragraph for practicing fonts and text formatting with CSS.
  </p>`,
      css: `
/* Style your heading below */
h1 {

}

/* Style your paragraph below */
p {

}`
    },

    completion: {
      requiredHTML: [
    "<h1>",
    "<p>"],

      requiredCSS: [
    "font-family",
    "font-size",
    "color",
    "text-align",
    "font-weight"]
    }
  },
  {
    id: "css-02",
    defaultUnlocked: false,
    title: "Colors",
    description: "Learn how to apply colors to text and elements using CSS. You’ll explore named colors, hexadecimal values, and how color affects visual design. This level builds your understanding of styling basics and how to make content more engaging and visually cohesive.",
    concept: "css-colors",

    instructions: `
        <h2>Colors in CSS</h2>

        <p> Add 3 new CSS classes to match the style text colors. <p>

        <p>Requirements:<p>

        <p>1. Create a class named ".gray" and set its color to gray<p>
        <p>2. Create a class named ".slateblue" and set its color to slateblue<p>
        <p>3. Create a class named ".violet" and set its color to violet<p>

        <p>Each class should use the "color" property.<p>

        <p>Example format:<p>
        <p>.classname {<p>
        <p>color: value;<p>
        <p>}<p>
    `,
    hint: "Your goal: make the class name match the color of the text name.",

    starterCode: {
      html: `<div class="flex">
    <div>
        <h2>Predefined Colors</h2>
        <h3 class="tomato">Tomato</h3>
        <h3 class="orange">Orange</h3>
        <h3 class="dodgerblue">DodgerBlue</h3>
        <h3 class="mediumseagreen">MediumSeaGreen</h3>
        <h3 class="gray">Gray</h3>
        <h3 class="slateblue">SlateBlue</h3>
        <h3 class="violet">Violet</h3>
    </div>
    <div>
        <h2>Hex Vale Colors</h2>
        <h3 class="hex-red">#FF0000</h3>
        <h3 class="hex-green">#00FF00</h3>
        <h3 class="hex-blue">#0000FF</h3>
        <h3 class="hex-yellow">#FFFF00</h3>
        <h3 class="hex-cyan">#00FFFF</h3>
        <h3 class="hex-magenta">#FF00FF</h3>
        <h3 class="hex-black">#000000</h3>
        <h3 class="hex-white">#FFFFFF</h3>
    <div>
</div>`,
      css: `.flex {
  display: flex;
  justify-content: space-around;
}
.tomato {
  color: tomato;
}
.orange {
  color: orange;
}
.dodgerblue {
  color: dodgerblue;
}
.mediumseagreen {
  color: mediumseagreen;
}
.hex-red {
  color: #ff0000;
}
.hex-green {
  color: #00ff00;
}
.hex-blue {
  color: #0000ff;
}
.hex-yellow {
  color: #ffff00;
}
.hex-cyan {
  color: #00ffff;
}
.hex-magenta {
  color: #ff00ff;
} 
.hex-black {
  color: #000000;
}
.hex-white {
  color: #ffffff;
}
  `
    },
    completion: {
      requiredHTML: [
        {
          validTags: ["*"],
          nickName: "gray element",
          class: "gray"
        },
        {
          validTags: ["*"],
          nickName: "slateblue element",
          class: "slateblue"
        },
        {
          validTags: ["*"],
          nickName: "violet element",
          class: "violet"
        }
      ],

      requiredCSS: [
        {
          selector:".gray",

          properties: [
            { property:"color",
              value: [[{value:"gray"}]]
            }
          ]
        },
        {
          selector:".slateblue",
          
          properties: [
            { property:"color",
              value: [[{value:"slateblue"}]]
            }
          ]
        },
        {
          selector:".violet",
          
          properties: [
            { property:"color",
              value: [[{value:"violet"}]]
            }
          ]
        }
      ]
    }
  },
  {
    id: "css-03",
    defaultUnlocked: false,
    title: "Padding and Margin",
    description: "Learn how to control spacing and add white space around elements on your webpage using CSS. This level teaches you the difference between padding (space inside an element) and margin (space outside an element), and how to use these properties to improve the layout and readability of your content.",
    concept: "css-padding-margin",

    instructions: `
        <h2>Padding and Margin</h2>
        <p>Now, let's try adding some padding and margin around the box to create space. Try using 20px for both properties to see the difference.</p>
    `,
    hint: "Padding creates space inside the element, while margin creates space outside the element.",

    starterCode: {
      html: `<div class ="box">Hello World!</div>`,
      css: `.box {background-color: Lightblue; font-size: 32px;}`
    },

    completion: {
      requiredHTML: ["box"],

      requiredCSS: ["padding", "margin"]
    }
  },
  {
    id: "css-04",
    title: "Backgrounds",
    description: "Learn how to add background colors, images, and gradients to elements on your webpage using CSS. This level covers properties like background-color, background-image, background-size, and background-position. You’ll explore how to create visually appealing backgrounds that enhance the overall design of your site.",
    concept: "css-backgrounds",

    instructions: `
        <h2>Backgrounds</h2>
        <p>See if you can add a background color to the textbox! Remember to target the correct element.</p>
    `,
    hint: "Use background-color.",

    starterCode: {
      html: `<div class ="box">Hello World!</div>`,
      css: `.box {font-size: 32px}`
    },

    completion: {
      requiredHTML: ["box"],

      requiredCSS: ["background-color"]
    }
  },
  {
    id: "css-05",
    defaultUnlocked: false,
    title: "Flexbox Layout",
    description: "Learn how to create flexible and responsive layouts using CSS Flexbox. You’ll control alignment, spacing, and distribution of elements within a container. Flexbox makes it easier to design complex layouts that adapt to different screen sizes.",
    concept: "css-flexbox",
  
    instructions: `
      <h2>Flexbox Layout</h2>
  
      <p>Flexbox is a CSS layout system that helps you align and organize elements inside a container.</p>
  
      <h3>Key Property</h3>
      <p><b>display: flex</b> turns an element into a flex container.</p>
  
      <h3>Alignment Properties</h3>
  
      <p><b>flex-direction</b> → controls layout direction (row or column)</p>
      <p><b>justify-content</b> → controls horizontal alignment</p>
      <p><b>align-items</b> → controls vertical alignment</p>
  
      <h3>Task</h3>
      <p>1. Turn the container into a flex container</p>
      <p>2. Keep items in a row</p>
      <p>3. Center items horizontally</p>
      <p>4. Center items vertically</p>
    `,
  
    hint: `
  Use display: flex on the container.
  
  Then:
  - justify-content: center (horizontal alignment)
  - align-items: center (vertical alignment)
  
  Make sure you're styling the .container class.
    `,
  
    starterCode: {
      html: `
  <div class="container">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
  </div>
      `,
      css: `
  .container {
    height: 300px;
    border: 2px solid #ccc;
  }
  
  .box {
    width: 60px;
    height: 60px;
    background: #333;
    color: white;
  }
      `
    },
  
    completion: {
      requiredHTML: [
        {
          validTags: ["div"],
          class: "container",
          nickName: "container div"
        }
      ],
  
      requiredCSS: [
        {
          selector: ".container",
          properties: [
            { property: "display", value: [[{ value: "flex" }]] },
            { property: "flex-direction", value: [[{ value: "row" }]] },
            { property: "justify-content", value: [[{ value: "center" }]] },
            { property: "align-items", value: [[{ value: "center" }]] }
          ]
        }
      ]
    }
  },

 {
    id: "css-06",
    defaultUnlocked: false,
    title: "Grid Layout",
    description: "Learn how to create complex and responsive grid-based layouts using CSS Grid. This level introduces you to the grid container and grid item properties, allowing you to define rows, columns, and areas for precise control over your webpage's structure. CSS Grid is a powerful tool for building modern web designs that adapt seamlessly to different screen sizes.",
    concept: "css-grid",

    instructions: `
        <h2>Grid Layout</h2>
        <p>Css grid is a layout system tool, to help create a complex and responsive webpage. You build a grid container and can define rows, columns, and specific areas for your page. Then, you can place your elements in the grid and control their size and position.</p>
        <br>
        <p>This is a simple example of a grid layout:</p> 
           <div class="example-grid">
             <p>top left</p>
             <p>top right</p>
             <p>middle left</p>
             <p>middle right</p>
             <p>bottom left</p>
             <p>bottom right</p>
           </div>
           <br>
          <p>.example-grid{<br>
          display: grid;                     <span class="whisper">turns the div into a grid container</span><br>
          grid-template-columns: 1fr 1fr;   <span class="whisper">2 columns</span><br>
          grid-template-rows: 1fr 1fr 1fr;  <span class="whisper">3 rows</span><br>
          border: solid blue;               <span class="whisper">edges of the grid</span><br>
          text-align: center;}              <span class="whisper">centers the text</span></p>
          <br>
          <p>.example-grid p{<br>
          border: solid blue;               <span class="whisper">edges of the cells</span><br>
          box-sizing: border-box;           <span class="whisper">border is included in the size of the cell</span><br>
          margin: 0;                 <span class="whisper">helps with spacing between cells</span><br>     
          width: 100%;               <br>
          height: 100%;              <br>
          }</p>
          <p>This is a super simplified version, but you can create various grids in complex ways!</p>
          <h2>Task</h2>
          <p>Use the given code to create a grid layout!</p>
          <p>1. Create a grid container with 3 rows and 3 columns.</p>
          <p>2. Add a solid red border around each cell in the grid.</p>
          <p>3. Center the text in each cell!</p>
    `,
    hint: "Study the example code very carefully. Don't forget that extra row! Make sure to add the border and text-align properties to make it look like the example.",

    starterCode: {
      html: `<div class="grid">
  <p>top left</p>
  <p>top middle</p>
  <p>top right</p>
  <p>middle left</p>
  <p>middle middle</p>
  <p>middle right</p>
  <p>bottom left</p>
  <p>bottom middle</p>
  <p>bottom right</p>
</div>`,
      css: `.grid{
  display: grid;
  grid-template-columns: ;
  grid-template-rows: ;
  border: ;
  height: 300px;
  width: 600px;
  text-align: ;
}
  
.grid p{
  border: ;
  box-sizing: border-box;
  margin: 0;
  width: 100%;
  height: 100%;
}`
    },

    completion: {
      requiredHTML: [
        {
          validTags: ["div"],
          class: "grid",
          nickName: "grid container"
        }
      ],

      requiredCSS: [
        {
          selector: ".grid",
          properties: [
            { property: "grid-template-columns",
              value: [[
                {value:1, unit:"fr"},
                {value:1, unit:"fr"},
                {value:1, unit:"fr"}
              ]]
            },
            { property: "grid-template-rows", 
              value: [[
                {value:1, unit:"fr"},
                {value:1, unit:"fr"},
                {value:1, unit:"fr"}
              ]]
            },
            { property: "border", value: [[{value:"solid"}, {value: "red"}]] },
            { property: "height", value: [[{value:300, unit: "px"}]] },
            { property: "width", value: [[{value:600, unit: "px"}]] },
            { property: "text-align", value: [[{value:"center"}]] }
          ]
        },
        {
          selector: ".grid p",
          properties: [
            { property: "border", value: [[{value:"solid"}, {value: "red"}]] },
            { property: "box-sizing", value: [[{value:"border-box"}]] },
            { property: "margin", value: [[{value:0}]] },
            { property: "width", value: [[{value:100, unit: "%"}]] },
            { property: "height", value: [[{value:100, unit: "%"}]] }
          ]
        }
      ]
    }
  },
  {
    id: "css-07",
    defaultUnlocked: false,
    title: "Borders and Rounded Corners",
    description: "Learn how to add borders and rounded corners to elements on your webpage using CSS. This level covers properties like border-width, border-style, border-color, and border-radius. You’ll explore how to create visually appealing borders and soften the edges of elements with rounded corners to enhance the overall design of your site.",
    concept: "css-borders-rounded-corners",

    instructions: `
        <h2>Borders</h2>
        <p>Try adding a border to the box.</p>
        <h2>Rounded Corners</h2>
        <p>Now, make the corners rounded.</p>
    `,
    hint: "Use border and border-radius.",

    starterCode: {
      html: `<div class="box">Hello World!</div>`,
      css: `.box {
  background-color: lightblue;
  padding: 20px;`
    },

    completion: {
      requiredHTML: ["box"],

      requiredCSS: ["border", "border-radius"]
    }
  },
  {
    id: "css-08",
    defaultUnlocked: false,
    title: "Text and Box Shadow",
    description: "Learn how to add depth and dimension to your webpage using CSS shadows. This level covers text-shadow for adding shadows to text, and box-shadow for creating shadows around elements. You’ll explore how to customize the color, size, and position of shadows to enhance the visual appeal of your design.",
    concept: "css-shadows",

    instructions: `
        <h2>Text Shadow</h2>
        <p>Through CSS you can add shadows to text using the <b>text-shadow</b> property. There are a few different values you can adjust to change up the look of the effect. </p>
        <br>
        <p>The first two values are the horizontal and vertical offsets, which determine how far the shadow is from the text. The third value is the blur radius, which determines how blurry the shadow is. The last value is the color of the shadow.</p>
        <p id="text-shadow"><b>Double Text</b></p>
        <p>   #text {<br>
	                text-shadow: 2px 2px 0 blue;<br>
              }</p>
        <p id="glow-text"><b>Glowing Text</b></p>
        <p>   #text {<br>
	                text-shadow: 0 0 7px white;<br>
              }</p>
        <p id="shadow-text"><b>Shadow Text</b></p>
        <p>   #text {<br>
	                text-shadow: 2px 2px 7px black;<br>
              }</p>
        
        <h2>Box Shadow</h2>
        <p>Box shadows are added using the <b>box-shadow</b> property. The values are the same as text-shadow, but they apply to the whole box element instead of just the text.</p>
        <p id="box-shadow"><b>Double Box</b></p>
        <p>   #box {<br>
	                box-shadow: 2px 2px 0 blue;<br>
              }</p>
        <p id="glow-box"><b>Glowing Box</b></p>
        <p>   #box {<br>
	                box-shadow: 0 0 7px white;<br>
              }</p>
        <p id="shadow-box"><b>Shadow Box</b></p>
        <p>   #box {<br>
	                box-shadow: 2px 2px 7px black;<br>
              }</p>
        <h2>Task</h2>
        <p>Use the given code to create some shadows!</p>
        <p>1. Create a text shadow that has no horizontal or vertical offset, a blur radius of 10px, and a red color.</p>
        <p>2. Create a box shadow that has a horizontal and vertical offset of 2px, a blur radius of 10px, and a black color.</p>
    `,
    hint: "Add code after the <b>shadow:</b> property. Look at the examples above as a guide. Make sure there are no spelling errors!",

    starterCode: {
      html: `<p id="text-glow">Add a glow to this text!</p>

<p id="box-shadow">Add a shadow to this box!</p>`
      ,
      css: `#text-glow {
  font-size: 32px;
  text-shadow: ;
}
  #box-shadow {
  font-size: 32px;
  height: 3em;
  width: 12em;
  background-color: lightblue;
  box-shadow: ;
}`
    },

    completion: {
      requiredHTML: [],

      requiredCSS: ["text-shadow", "box-shadow"]
    }
  },
  {
    id: "css-09",
    defaultUnlocked: false,
    title: "Gradients",
    description: "Learn how to create smooth transitions between colors using CSS gradients. This level introduces you to linear and radial gradients, and how to customize them with different color stops and angles. Gradients can add depth and visual interest to your designs, making them a powerful tool for enhancing the aesthetics of your webpage.",
    concept: "css-Gradients",

    instructions: `
        <h2>Gradients</h2>
        <p>Gradients are used in visual design as a way to seamlessly transition into two or more colors.</p>
        <p><b>Linear gradients</b> show a color change that can go up, down, left, or right depending on the angle you choose.</p>
        <p><b>Top to Bottom Linear Gradient</b></p>
        <p>   #gradient {<br>
	                background: linear-gradient(to bottom, white, black)<br>
              }</p>
        <div id="linear-top"></div>
        <p><b>Left to Right Linear Gradient</b></p>
        <p>   #gradient {<br>
	                background: linear-gradient(to right, white, black)<br>
              }</p>
        <div id="linear-left"></div>
        <p><b>Radial gradients</b> show a color change in a circular progression, starting with a central point.</p>
        <p>   #gradient {<br>
	                background: radial-gradient( white, black)<br>
              }</p>
        <div id="radial"></div>
        <h2>Task</h2>
        <p>Use the given code to create some gradients!</p>
        <p>1. Create a linear gradient that transitions from red at the top to yellow at the bottom.</p>
        <p>2. Create a linear gradient that transitions from blue on the left to green on the right.</p>
        <p>3. Create a radial gradient that transitions from white in the center to purple at the edges.</p>
    `,
    hint: "Add code after the <b>background:</b> property. Look at the examples above as a guide. Make sure there are no spelling errors!",

    starterCode: {
      html: `<p><b>Linear Gradient top to bottom</b></p>
  <div id="gradient1"></div>

<p><b>Linear Gradient left to right</b></p>
  <div id="gradient2"></div>

<p><b>Radial Gradient</b></p>
  <div id="gradient3"></div>`,
      css: `#gradient1 {
  height: 5em;
  width: 18em;
  border: solid #000000;
  background: ;
}
#gradient2 {
  height: 5em;
  width: 18em;
  border: solid #000000;
  background: ;
}
#gradient3 {
  height: 5em;
  width: 18em;
  border: solid #000000;
  background: ;
}`
    },

    completion: {
      requiredHTML: [],

      requiredCSS: [
        {
          selector: "#gradient1",

          properties:
          [{
              property: "background-image",
              useFinalValue: true,
            
              value: [[{
              functionName: "linear-gradient",
              value: [
                [{value: "red"}],
                [{value:  "yellow"}],],
              }]]
            
          },]
        },{
          selector: "#gradient2",

          properties:
          [{
              property: "background-image",
              useFinalValue: true,
            
              value: [[{
              functionName: "linear-gradient",
              value: [
                [{value: "to"}, {value: "right"}],
                [{value: "blue"}],
                [{value:  "green"}],],
              }]]
            
          },]
        },{
          selector: "#gradient3",

          properties:
          [{
              property: "background-image",
              useFinalValue: true,
            
              value: [[{
              functionName: "radial-gradient",
              value: [
                [{value: "white"}],
                [{value:  "purple"}],],
              }]]
          },]
        }
      ]
    }
  },
  {
    id: "css-10",
    defaultUnlocked: false,
    title: "Animation",
    description: "Learn how to create animations using CSS. This level covers keyframe animations, allowing you to define the stages of an animation and control its timing and behavior. You’ll explore how to animate properties like position, color, and size to bring your designs to life and create engaging user experiences.",
    concept: "css-animation",

    instructions: `
        <h2>Animation</h2>
        <p>In ye olden days, JavaScript was used to animate HTML objects, transforming static pages into something more visually interesting. Now, most animation work can be done in CSS; an object's styles can transition between several different states over a specified amount of time, allowing it to move, change colors, and change in size.</p>
        <p>In order to animate an element, you must first create an animation using the keyword <code>@keyframes</code>, followed by a name. Then comes the CSS block, which contains either a <code>from</code> block and <code>to</code> block...</p>
        <pre><code>@keyframes growing-text {
          from {font-size: 8px;}
          to {font-size: 16px;}
        }</code></pre>
        <p>...or a series of percentage blocks, which change the styles at certain points in the animation's runtime.</p>
        <pre><code>@keyframes growing-and-shrinking-text {
          0%   {font-size: 8px;}
          50%  {font-size: 16px;}
          100% {font-size: 8px;}
        }</code></pre>
        <p>In those examples, the keyframes (the <code>from...to</code> and percentages) only changed one style, but any number of styles can be changed by each keyframe. Once you have created an animation, you can give it to an element using <code>animation-name</code> and <code>animation-duration</code>. The animation duration is in seconds. Elements with these styles will only play their animation once when the page loads, so to make them play a certain number of times, use <code>animation-iteration-count</code>.</p>
        <pre><code>.animated-text {
          font-family: Arial, sans-serif;
          font-size: 8px;
          animation-name: growing-and-shrinking-text;
          animation-duration: 3s;
          animation-iteration-count: infinite
        }</code></pre>
        <h2>Task</h2>
        <p>Animate the divs so that they go from blue 20-pixel squares to red 40-pixel wide rectangles and back again. Add keyframes to the empty animation block named <code>crazy-box</code>. Then, give the <code>.slow-box</code> class the animation, and make it run for 5 seconds infinitely. Do the same for the <code>.fast-box</code> class, but make the duration 2 seconds.</p>
    `,
    hint: "The keyframes should only change the width and background color. The 0% and 100% keyframes should make the blue square, and the 50% keyframe should make the red rectangle. Make sure both of the classes have the animation name, the correct durations, and an infinite iteration count.",

    starterCode: {
      html: `<div class="box slow-box"></div>
      <div class="box fast-box"></div>`,
      css: `.box {
        height: 20px;
        width: 20px;
        margin: 5px;
        background-color: blue;
      }
      
      @keyframes crazy-box {
        /*Add keyframes*/
      }
      
      .slow-box {
        /*Add crazy-box animation*/
      }
      
      .fast-box {
        /*Add crazy-box animation*/
      }`
    },

    completion: {
      requiredHTML: [
        {
          validTags: ["div"],
          class: "box slow-box",
          nickName: "slow-box div"
        },
        {
          validTags: ["div"],
          class: "box fast-box",
          nickName: "fast-box div"
        }
      ],

      requiredCSS: [
        {
          selector: ".box",
          properties: [
            {
              property: "width", 
              value: [[{value:20, unit:"px"}]]
            }
          ]
        },
        {
          selector: "@keyframes crazy-box",

           childRuleSets: [
            {
              selector: "50%",
              properties: [
                {
                  property: "background-color",
                  value: [[{value:"red"}]]
                },
                {
                  property: "width",
                  value: [[{value:40, unit: "px"}]],
                }
              ]
            }
          ],
        },
        {
          selector: ".slow-box",

          properties: [
            {
              property: "animation-name",
              value: [[{value:"crazy-box"}]],
              useFinalValue: true,
            },
            {
              property: "animation-iteration-count",
              value: [[{value:"infinite"}]],
              useFinalValue: true,
            },
            {
              property: "animation-duration",
              value: [[{value:5, unit:"s"}]],
              useFinalValue: true,
            }
          ]
        },
        {
          selector: ".fast-box",

          properties: [
            {
              property: "animation-name",
              useFinalValue: true,
              value: [[{value:"crazy-box"}]],

            },
            {
              property: "animation-iteration-count",
              useFinalValue: true,
              value: [[{value:"infinite"}]]
            },
            {
              property: "animation-duration",
              useFinalValue: true,
              value: [[{value:2, unit:"s"}]],
            }
          ]
        }
      ]
    }
  },
  
]