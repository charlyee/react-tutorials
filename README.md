# React + Redux Tutorials

*This is a living document and will be updated as changes are deemed necessary. This document is not to be considered final.

## 1: First Steps - Developer Environment

### Suggested IDE:
Visual Studio Code
https://code.visualstudio.com/

This is my personal recommendation for an IDE to use, and that I have used it extensively with React to great success. Similar to before, this is also my personal recommendation for an IDE to use with TypeScript; since we will be using TypeScript heavily in the React section this makes life significantly easier.

### Suggested Extensions (for Visual Studio Code):


### Auto Format

I STRONGLY advise students to use this and to use this very frequently. Autoformatting often will help your code be much much more easily readable and manageable. Especially now we have introduced you to more advanced syntax such as "fat arrow functions" and classes.

Where is it Located?

By default they should be: alt, shift, f.

- Preferences -> Keyboard Shortcuts 

- Then search for ‘format document’

- This will bring up your particular keybinds for autoformatting. 

By default they should be: alt, shift, f.




## 2: Installation of React. (Featuring a lot of Explaining to do...)

1: Node should already be installed on your computer. If you do not have it installed, please install it now. 
https://nodejs.org/en/

This will come with a host of tools

  a: `npm` Node. Package. Manager. This will be our default tool to retrieve new libraries and functionalities to expand our project. 

  b: `npx` npm is great for managing packages, but not executing them. npx is the executor of packages that we can obtain.
  
npx should come bundled with npm for the latest versions of these tools.

For further reading and understanding of npm and npx I'll refer you to the answer on stackoverflow here: https://stackoverflow.com/questions/50605219/difference-between-npx-and-npm

2: Creating files manually is unnecessary cognitive load and a waste of your time. It's very standard to create basic react applications using a command `create-react-app`. 

But be wary when googling this-- the default is usually JavaScript. In particular here I am more concerned with using TypeScript with all of the ES6 Syntax goodies that we've learned thus far. 

To emphasize that none of this is magic I'll direct you to the official documentation to get started: https://create-react-app.dev/docs/adding-typescript/

Since we have npx installed with the above command, enter `npx create-react-app my-app --template typescript` into your terminal.

In the future note that the "my-app" location in that command is going to be the name of the react project you create. For anything beyond basic tutorials I'd suggest you give your project a more personalized name!

This will create a new React Project with TypeScript defaults in it. Opposed to trying to create each file individually ranging from highly specific configuration files to much much more this massively simplifies the process. 


3: Since we created these files using the command, I feel that it's necessary to start grounding out where we are and give a quick lay of the land.

(! https://imgur.com/a/lvugBJ8 ) 

We have three primary folders:

a: node_modules
This is where your packages will be installed from node.

b: public
This is where you will want to store things that you want generally accessible to the outside world from your react project. Things like your index.html file, images, etc all belong in here. Of particular note is the index.html file is located in here. That will seem very strange to most students who primarily worked out of index.html in the past. 

With react? You want to minimize how much you touch index.html!

c: src
This is where you will primarily be working out of, this is where all of your "source" code will be located in. This will include things like your TypeScript files, CSS files and any other code.

At risk of being overbearing, I'd like to reiterate that index.html is NOT in the src folder. Modifications to index.html file should be minimal at best. 


Now let's get a bit more into the nitty-gritty of things.

`package.json`: This will be a configuration file for the entire project. This is where you can incorporate things into your project such as:
  What version of React are you using? 
  What version of TypeScript are you using?
  What sort of scripts do you have to help this project run? (Note default is start, build, test, eject).
  What sort of dependencies does your project have? 
  
Generally speaking, this is not a file you want to touch manually too much as a beginner. Bad changes made to this file can lead to tremendously difficult to find bugs if both unlucky and not careful.

`tsconfig.json`: In my TypeScript lectures and especially "GitHub Books" you probably noticed that I threw this file into some of the files-- right? In here is configuration that gives you fine control over exactly how you want this project to handle specifically the TypeScript language. 

There are some handy features like:
  "target" specifies which version of the language you want, by default it targets es5. We can update this later to higher versions.
  "jsx" and we specify that we want the react version of it.
  "strict" enables strict mode
  "include" specifies the folders to include under this tsconfig.json's domain of concerns.
  
Similar to `package.json` above, I am hesitant to suggest manually editing these files.

`.gitignore`: A file that you were briefly introduced to in the Git lectures. Any files specified in this file will not be included in version control.

For more details check out this resource: https://www.atlassian.com/git/tutorials/saving-changes/gitignore

`App.css`: For styling applications this is our baseline CSS file.

`App.tsx`: This is our "main" component. By default it is a "functional" component so the syntax may seem slightly different than what we talk about later. We are going to be using "class" components through this course. Both are valid and used extensively in industry, and I often use both, but we lack the time for me to teach both. 

`index.tsx`: This is our "entrypoint" into our react application. This acts as the binding between our index.html file in the public folder and our react application. (Specifically, look at the document.getElementById('root') ... :) ).

`index.css`: Similar to App.css, this index.css file will be focused on applying styles, colors, etc using css to the index file.

`App.test.txt`: We will talk more about unit testing later. By default the baseline application includes a testing framework I use called Jest.

In terms of the other files, we will get into the details of them when we need to. This is all you should really be concerned with at this point.

4: Let's run the default application we get from the `create-react-app` command we ran above. 

This is done by using the command `npm start`.

Horray!

Remember from my TypeScript lectures how I said we could specify a few special flags (eg: -w) on the command to run the typescript files? Well, this command follows the same similar idea.

-It will tie up the terminal.

-As you make changes to your files and save the changes it will automatically reload.

-If you need another terminal then it is strongly encouraged that you make a new one.

-If you really need to stop the server from running then hit the ctrl + c keys together to get it to stop.
