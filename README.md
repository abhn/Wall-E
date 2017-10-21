# Wall-E

Wall-E is a modern Jekyll template with a magazine-like grid layout on the frontpage, beautiful typography and uncomplicated content. 

<img src="https://github.com/abhn/Wall-E/blob/master/tmp/desktop.png?raw=true">

## Demo
[wall-e-jekyll.github.io/](https://wall-e-jekyll.github.io/)

## Contents

- [Features](#features)
- [Usage](#usage)
- [Customization](#customization)
- [Screenshots](#screenshots-desktop)
    - [Desktop](#screenshots-desktop)
    - [Mobile](#screenshots-mobile)
- [Credits](#credits)
- [License](#license)

## Features

- Mobile responsive, built with Semantic UI, customization is easy
- Disqus is integrated by default
- One column layout suitable for personal blogs with focus on content
- Beautiful typography (uses League Gothic and Open Sans)
- Feature image can be added to homescreen post cards
- Search box links to Google search by default

## Usage

Wall-E is fully furnished right out of the box. To use this template on your blog
- If this is your first Jekyll blog, follow this <a href="https://jekyllrb.com/docs/installation/">helpful guide</a> to set up Jekyll.
- Fork this repository, rename the fork as `your-username.github.io`. Your blog should immediately be live on `https://your-username.github.io`
- Clone your fork
- Delete everything in `_posts` directory. Delete the `tmp` directory.
- Open `_config.yml` and set the variables
- Open `_includes/disqus.html` and `_includes/disqus-count.html` and replace the value of `disqus_shortname` variable to your Disqus username
- Run `jekyll serve` and your blog should be live on `http://localhost:4000`. Make changes, test them locally, commit your changes and push to your fork. Your changes should be live in a couple of seconds

## Customization
- `_includes/author.html`: Add your name, link to a profile picture and a short author description that appears on the bottom of each post. See <a href="https://semantic-ui.com/views/item.html">Semantic Link</a> docs.
- `_includes/card.html`: Cards can be customized to show the essential info about a post (feature image, catagory, tags, comment count etc). See <a href="https://semantic-ui.com/views/card.html">Semantic Card</a> docs.
- `_includes/header.html`: Replace the site logo here. Add/replace frequently visited pages and/or social links here.
- `_includes/footer.html`: Add your copyrights, if any, here. Also link to the less frequently visited pages and/or social links here.
- `assets/css/main.css` and `assets/css/mobile.css`: Global and mobile specific CSS files respectively
- `assets/js/main.js`: Any common javascript goes here. If you wish to customize the search behaviour (for example, use a different search engine), that can be done here.

## Screenshots (Desktop)

### Homepage
<img src="https://github.com/abhn/Wall-E/blob/master/tmp/desktop.png?raw=true">

### Sample post
<img src="https://github.com/abhn/Wall-E/blob/master/tmp/desktop-post.png?raw=true">

## Screenshots (Mobile)

### Homepage (Portrait)
<img width="50%" src="https://github.com/abhn/Wall-E/blob/master/tmp/mobile.png?raw=true">

### Homepage (Landscape)
<img src="https://github.com/abhn/Wall-E/blob/master/tmp/mobile-landscape.png?raw=true">

### Sample post (Portrait)
<img width="50%" src="https://github.com/abhn/Wall-E/blob/master/tmp/mobile-post.png?raw=true">

### Footer (Landscape)
<img src="https://github.com/abhn/Wall-E/blob/master/tmp/mobile-landscape-footer.png?raw=true">


## Credits
- <a href="https://demo.ghost.io">Ghost</a> blogging platform's demo page for inspiration (and the header background image).
- <a href="http://www.jeanchristophebonis.com/">For the Wall-E image used everywhere</a>
- <a href="https://semantic-ui.com">Semantic UI</a>

## License

Open sourced under the [MIT license](LICENSE.md) <3
