import { html2json } from './html2json.js';

function convertHtml2JsonAndSet() {
  const htmlTextAreaValue = document.getElementById('html').value;
  const jsonObj = html2json(htmlTextAreaValue);
  const jsonArea = document.getElementById('json');
  jsonArea.textContent = JSON.stringify(jsonObj, null, 2);
}

function showExample1() {
  const htmlExample = `
        <section id="home">
            <h2>Home Section</h2>
            <p>This is the home section of the webpage.</p>
        </section>
        <section id="about">
            <h2>About Section</h2>
            <p>This is the about section of the webpage.</p>
        </section>
`;

  document.getElementById('html').value = htmlExample;
  convertHtml2JsonAndSet();
}

function showExample2() {
  const htmlExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="A sample article page with a complex HTML structure">
  <title>Complex HTML Page Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Navigation Bar -->
  <header>
    <nav class="navbar">
      <div class="logo">
        <a href="index.html">MyWebsite</a>
      </div>
      <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>

  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-content">
      <h1>Welcome to MyWebsite</h1>
      <p>Your one-stop solution for all things web development.</p>
      <a href="#about-us" class="btn btn-primary">Learn More</a>
    </div>
  </section>

  <!-- Main Content -->
  <main>
    <!-- Article Section -->
    <section class="article">
      <article>
        <h2>The Importance of Web Standards</h2>
        <p><strong>Author:</strong> John Doe | <strong>Published:</strong> March 20, 2024</p>
        <p>In today’s world, creating accessible, standards-compliant websites is more important than ever. HTML standards help ensure that websites work seamlessly across different browsers and devices. In this article, we will explore the significance of following web standards and best practices.</p>

        <h3>Why Follow Web Standards?</h3>
        <ul>
          <li>Better compatibility across browsers.</li>
          <li>Improved accessibility for users with disabilities.</li>
          <li>Easier maintenance and scalability.</li>
        </ul>

        <h3>Code Example</h3>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Sample Page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello World&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;
        </code></pre>

        <p>Following these guidelines helps developers create websites that perform well in diverse environments.</p>
      </article>
    </section>

    <!-- Sidebar Section -->
    <aside class="sidebar">
      <h3>Related Articles</h3>
      <ul>
        <li><a href="#">Introduction to HTML5</a></li>
        <li><a href="#">CSS: Best Practices for Beginners</a></li>
        <li><a href="#">Understanding JavaScript Basics</a></li>
      </ul>
    </aside>
  </main>

  <!-- Contact Form Section -->
  <section class="contact-form">
    <h2>Contact Us</h2>
    <form action="/submit" method="POST">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>
      </div>
      <button type="submit" class="btn btn-secondary">Send Message</button>
    </form>
  </section>

  <!-- Footer Section -->
  <footer>
    <div class="footer-content">
      <p>&copy; 2024 MyWebsite. All rights reserved.</p>
      <ul class="social-links">
        <li><a href="#"><img src="icons/facebook.svg" alt="Facebook"></a></li>
        <li><a href="#"><img src="icons/twitter.svg" alt="Twitter"></a></li>
        <li><a href="#"><img src="icons/linkedin.svg" alt="LinkedIn"></a></li>
      </ul>
    </div>
  </footer>

  <!-- JavaScript -->
  <script src="script.js"></script>
</body>
</html>
`;

  document.getElementById('html').value = htmlExample;
  convertHtml2JsonAndSet();
}

window.showExample1 = showExample1;
window.showExample2 = showExample2;
