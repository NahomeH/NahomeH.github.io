---
layout: post
title: "Getting Started with GitHub Pages"
date: 2024-03-15
categories: [Web Development, GitHub]
tags: [github, web development, static sites]
excerpt: "Learn how to create and host your own website using GitHub Pages for free."
featured_image: /assets/images/blog/github-pages.jpg
---

GitHub Pages is a fantastic free hosting service that allows you to publish a website directly from your GitHub repository. In this guide, I'll walk you through the process of setting up your own site using GitHub Pages.

## What is GitHub Pages?

GitHub Pages is a static site hosting service that takes HTML, CSS, and JavaScript files directly from a repository on GitHub, optionally runs the files through a build process, and publishes a website. You can host your site on GitHub's `github.io` domain or your own custom domain.

## Why Use GitHub Pages?

There are several compelling reasons to use GitHub Pages for your website:

1. **It's completely free** - No hosting fees or hidden charges
2. **Simple deployment** - Push to your repository and your changes are live
3. **Version control** - Your website is in a Git repository, so you have full history
4. **Custom domains** - You can use your own domain name
5. **HTTPS support** - Free SSL certificates through Let's Encrypt

## Getting Started

### Step 1: Create a GitHub Repository

First, create a new repository on GitHub. To create a user site (which will be available at `username.github.io`), name your repository `username.github.io`, replacing "username" with your actual GitHub username.

### Step 2: Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/username/username.github.io.git
cd username.github.io
```

### Step 3: Create Your Website

You can now start building your website. At a minimum, you need an `index.html` file:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My GitHub Pages Site</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>Hello World!</h1>
    <p>Welcome to my GitHub Pages site.</p>
</body>
</html>
```

### Step 4: Commit and Push

Add, commit, and push your changes to GitHub:

```bash
git add .
git commit -m "Initial commit"
git push -u origin main
```

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section
4. Select the branch you want to publish (usually "main")
5. Click "Save"

After a few minutes, your site will be available at `https://username.github.io`.

## Using Jekyll with GitHub Pages

GitHub Pages has built-in support for Jekyll, a popular static site generator. Jekyll makes it easy to create a blog or more complex site structure.

### Step 1: Create a Jekyll Site

If you want to use Jekyll, you can either:

- Create a new Jekyll site locally and push it to your repository
- Add a `_config.yml` file to your existing repository

For a new Jekyll site:

```bash
gem install jekyll bundler
jekyll new my-site
cd my-site
```

### Step 2: Add Blog Posts

With Jekyll, blog posts are Markdown files in the `_posts` directory. Create a file named `YYYY-MM-DD-title.md` with front matter at the top:

```markdown
---
layout: post
title: "My First Blog Post"
date: 2025-03-14
---

This is my first blog post using Jekyll and GitHub Pages!
```

### Step 3: Customize Your Site

You can customize your Jekyll site by editing the `_config.yml` file and creating your own layouts in the `_layouts` directory.

## Conclusion

GitHub Pages is a powerful, free solution for hosting static websites. Whether you're creating a personal blog, project documentation, or a portfolio site, GitHub Pages makes the process simple and straightforward.

Have you set up a site using GitHub Pages? What challenges did you face, and what tips would you share with others? Let me know in the comments!

## Further Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)