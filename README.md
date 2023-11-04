# Website: [nah-red.net](https://www.nah-red.net/)

# Tech Stack Used:
- npm (deprecated near the end of this project)
- [Bun](https://bun.sh/) (replaced npm for this project)
- NextJS/React
- HTML & CSS
- TypeScript
- [Material UI](https://mui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer: Motion](https://www.framer.com/motion/)
- [react-code-blocks](https://www.npmjs.com/package/react-code-blocks)

# Shout-outs
- [gregrickaby](https://github.com/gregrickaby/) - Credit to this person for writing up a [great explainer on how to deploy NextJS projects to GitHub pages.](https://github.com/gregrickaby/nextjs-github-pages) Without it I wouldn't have learned! You can do some incredibly powerful stuff inside of a github action and their writeup and demo action is perfect to learn from.


# nah-red.net v2
Having a desire to learn new material over the Summer in 2023, I set out to recreate my website, but using some incredibly powerful tools this time. NextJS, TypeScript, Material UI, Tailwind CSS, Framer Motion and react-code-snippets made it possible to design something I could be proud of, and learn an incredible amount of information from.

With custom components, to CSS overriding AND customization/extending, and out of the box ready components, this stack allowed me to learn far more than I had expected to. I went into this personal project expecting it to be a lot of placing components and customizing them the way I wanted them to be, but that turned into recreating and building my own components to behave exactly how I wanted them to.


# Why NextJS?
In my pursuit for deciding what framework I wanted to go with, I had in fact setup both a NextJS app (with JavaScript) and React app (TypeScript). I started building out with NextJS in JavaScript but was getting frustrated with small concerns - specifically how the routing works, client side rendering and server side render as well as which one happens per page, and that TypeScript just had superior features. I also wanted to create a single page that would transition when being navigated around, and thought that React would be best for that.

I quickly found myself stuck in a corner with React though! I could not find a clean and easy way to do some things - such as adding custom fonts - in a nice manner. NextJS however, made it super easy to do that! Then, I was running into issues where certain packages I was trying to use were, strangely enough, having issues being compatible. I had thought to myself how strange that was and that it should not matter.

![nrnV2TernaryStyle](https://www.nah-red.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FnrnV2TernaryStyle.7faf9d90.png&w=640&q=75)


Issue after issue kept coming up, and I found myself disappointed that I was not able to resolve the issues I was getting into. I did a bit more research, more reading, and found that NextJS supports TypeScript! And that the router and CSR vs SSR actually was not going to be a problem for my little site since I had nothing that requested information from a database.


# What is Bun?
[Bun](https://bun.sh/) is a JavaScript runtime that is compatible with npm, and was something I had actually discovered towards the end of the project. I had only found it because of some searches I was doing on YouTube recommended the [Bun 1.0 launch video](https://www.youtube.com/watch?v=BsnCpESUEqM) which convinced me to give it a shot. I moved my dev environment over to Windows Subsystem for Linux, installed Bun, and the experience was a night and day difference.

Everything promised in the Bun launch video was true! My package install times (when starting completely fresh - no `node_modules` folder) went from ~30 seconds, to less than 3. Downloading packages were significantly faster too. `bun run dev` nearly instantly launches the NextJS dev environment, which was a significant difference from what I had experienced before.

# On Tailwind CSS
Now I am quite new to web development, but Tailwind CSS is a dream framework. It made 99% of the work I had to do with CSS incredibly simple. From adding my own extended grid options to use with it, to being able to do something like `max-h-[280px]` where I am setting my own pixel width instead of being constrained to their built in options was amazing! This extends to almost any CSS property too. Here is another pretty cool example:


`text-[var(--toastedalmond)] underline decoration-[var(--honey)]`

This is the className on the header for this section! I was able to tell the CSS to use my own personally selected global color variables, and it just works. No fancy extra steps, and I had actually discovered this by chance after learning you could do the pixel example I showed earlier on.


# Where Was Material UI Used?
Every page actually. At the top of this page are customized Tabs from the base offering Material UI provides. The navigation bar is a heavily modified set of Material UI buttons (called NavButton), this goes for my name too. On the "Experience" page, the accordion is heavily modified. The Skills container uses Material UI's "List Item" component, again heavily modified.

# Where Is This Deployed?
Using a modified build script, the website is built and deployed from AWS Amplify. AWS Amplify can automatically rebuild a website if it detects any changes to the source, much like GitHub actions can too. I also used GitHub pages + GitHub actions to do test
deployments just to ensure it looked fine periodically.

# How Long Did This Take?
Taking breaks over the summer, I would say that if I had been working on it every single day and had to estimate days/weeks I spent on this, I would say maybe 4 weeks in total. Mind you, this is discovering many mistakes, making corrections, and have to study and learn many new tools and how they work. I'm very proud of what I have accomplished.
