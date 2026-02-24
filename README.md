## Link to live site
`https://devinneleigh.github.io/Web-Design-Game/dist`

## Access

You'll first need access to the repo. Send me your GitHub username and I'll add you as a collaborator. 

You'll get an email from `DevinneLeigh <noreply@github.com>` with the subject `DevinneLeigh invited you to DevinneLeigh/Web-Design-Game`. You need to accept that invitation to make commits directly to the repo.

## Prerequisites

Before running the project locally, make sure you have:

### 1) Node.js (LTS recommended)

Download from:  
https://nodejs.org

Verify installation:

```bash
node -v
npm -v
```

If those return version numbers, you're good to go.

## Cloning the code

To get the code on your local environment so you can code with your IDE of choice, you need to clone the repo. 

Click on the `Code` dropdown button. Copy the repo URL. 


Next you have a couple different ways to clone it. 

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

Start the development server:
```bash
npm run dev
```

The project will run at:

```
http://localhost:5173
```


## How Styling Works (SCSS + Bootstrap)

Vite handles SCSS compilation automatically.

Only edit files inside:

```
src/assets/styles/
```

The main stylesheet is:

```
src/assets/styles/main.scss
```

Bootstrap is imported inside `main.scss`, which allows us to override variables before it compiles.

Any changes you make to SCSS will automatically update in the browser while `npm run dev` is running.



## Pulling other peoples changes

Keeping the code up to date with other peoples changes will help prevent merge conflicts from happening.

After you push, and before you start something new, pull down changes with

```bash
git pull
```


## Building for Production

Your changes won't be added to the live site unless you build it first.

Enter in the terminal:
```bash
npm run build
```
The built files will be generated inside the `dist/` folder.

## Pushing Changes

Add all changes
```bash
git add .
```
Write a commit message
```bash
git commit -m "Description of my changes."
```

Push the commit
```bash
git push
```


## Notes

- This project uses Vue 3 with Vite.
- Bootstrap is compiled via SCSS.
- CodeMirror is configured inside the `components` folder.
- All dependencies are managed through npm — no global installs are required.






