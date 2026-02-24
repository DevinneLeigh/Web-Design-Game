## Link to live site
`https://devinneleigh.github.io/Web-Design-Game/dist`

## Prerequisites

Before running the project locally, make sure you have:

### 1) Node.js

Download from:  
https://nodejs.org


## Cloning the code

Click on the `Code` dropdown button. Copy the repo URL. 


### A) Command Line

Open a terminal. `cd` to the directory you want to clone the repo to, and run

```bash
git clone https://github.com/DevinneLeigh/Web-Design-Game.git
```

Now open it in your code editor.

### B) VSCode

When you open VSCode, under "Start", you'll see the third option is to Clone a repo. Paste the Repo URL in and your good to go.

## Install dependencies:

```bash
npm install
```

Install CodeMirror:

```bash
npm install codemirror @codemirror/lang-javascript @codemirror/theme-one-dark
```

## Start the development server:

```bash
npm run dev
```

The project will run at:

```
http://localhost:5173
```

## How Styling Works (SCSS + Bootstrap)

Vite handles SCSS compilation automatically.

So you can edit css code directly at:

```
src/assets/styles/main.scss
```



## Pulling other peoples changes

```bash
git pull
```


## Building for Production
Run this command to build your changes to the live site
```bash
npm run build
```

## Pushing Changes
```bash
git add .
```
```bash
git commit -m "Description of my changes."
```
```bash
git push
```







