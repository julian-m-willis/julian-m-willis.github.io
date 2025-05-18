# julian-m-willis.github.io

This is the personal website of Julian M. Willis, hosted on GitHub Pages using Jekyll.

## Project Structure

- **_config.yml**: Configuration settings for the Jekyll site.
- **_includes/**: Contains reusable HTML snippets.
  - **header.html**: The header section of the website.
- **_layouts/**: Layout templates for the site.
  - **default.html**: Default layout for pages.
  - **post.html**: Layout for blog posts.
- **_posts/**: Directory for blog posts.
  - **2023-01-01-welcome-to-jekyll.md**: A welcome post to introduce the site.
- **_sass/**: Custom Sass styles.
  - **custom.scss**: Styles to be compiled into CSS.
- **assets/**: Contains static assets.
  - **css/**: Directory for CSS files.
    - **style.css**: Main CSS styles.
  - **js/**: Directory for JavaScript files.
    - **script.js**: JavaScript for interactivity.
- **index.html**: The homepage of the website.

## Setup Instructions

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install Jekyll and Bundler if you haven't already:
   ```
   gem install jekyll bundler
   ```
4. Build and serve the site locally:
   ```
   bundle exec jekyll serve
   ```
5. Open your browser and go to `http://localhost:4000` to see your site in action.

## Contributing

Feel free to fork the repository and submit pull requests for any improvements or bug fixes.