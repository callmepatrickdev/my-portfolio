## 🌟 Comprehensive Portfolio Features

## Patrick's portfolio is live at: https://callmepatrickdev.github.io/my-portfolio/

This portfolio is an advanced, responsive, single-page application built using semantic HTML5, modern CSS3 (Custom Properties, Flexbox, CSS Grid), and vanilla JavaScript. Below is a breakdown of every active feature implemented within the architecture:

### 1. 🌓 Intelligent Theme Engine (Dark & Light Mode)
* **Dynamic Attribute Toggling:** Utilizes JavaScript to seamlessly toggle a `data-theme` attribute on the document root element when the navbar SVG icon button is clicked.
* **Persistent State Memory:** Integrated with browser `localStorage`. When a visitor selects their preferred theme, the configuration is stored locally so it automatically persists upon page refreshes or future visits.
* **Seamless Transitions:** CSS variable mapping (`--bg`, `--panel`, `--text`, etc.) provides smooth, global transition interpolation during switching to eliminate flashes of bright or harsh color.

### 2. 📱 Responsive Mobile Navigation Framework
* **Hamburger Menu System:** Uses a custom media-query interface logic that activates under `768px` screen sizes. The native navigation menu transforms into a slide-out drawer, triggered entirely by an animated mobile toggle icon button.
* **Contextual State Close:** JavaScript event loops actively listen for link hits inside the mobile menu drawer. Selecting any section destination automatically slides the mobile navigation out of view for clean user navigation.

### 3. ✍️ Typographic Typing Terminal Engine
* **Asynchronous Typing Automation:** Features a custom multi-phrase looping JavaScript array that dynamically types, pauses, and erases professional titles (*"WEB DEVELOPER."*, *"UI DESIGNER."*, etc.).
* **Blinking Terminal Cursor:** Paired with an independent CSS infinite animation frame loop (`blink`) mimicking a live engineering terminal prompt next to the highlighting spans.

### 4. 📄 In-View Mini Resume Display & CV Downloader
* **Embedded Portion Sheet:** Features a dedicated section embedded right inside the grid layout, showcasing a stylized snapshot of core competencies and professional highlights.
* **Native Download Triggers:** Built-in semantic actions link directly to physical resume document assets (`/assets/resume.pdf`), utilizing the browser's hidden download parameter to instantly save a formatted copy of your CV.

### 5. 🎓 Chronological Educational Timeline
* **Interactive Matrix Track:** Located neatly within the "About Me" segment, this feature maps out your complete academic matrix (Takoradi Technical University, Kikam Technical Institute, Word Alive Christian School) chronologically.
* **Modern CSS Nodes:** Implemented using vertical border anchoring and dynamic absolute element offsets to generate sleek circular nodes corresponding to date markers.

### 6. 💼 Interactive Media Lightbox System (Modal)
* **Event-Driven UI Overlays:** Clicking on any project card asset stops typical browser interactions to pop open a fully responsive modal window presenting a detailed, scaled picture projection of your work.
* **Complete Accessibility Controls:** Fully accessible configuration allowing close states via traditional graphical cross buttons (`✕`), background click overlays (`data-close`), or pressing the native keyboard Escape key (`Escape`).

### 7. 🔗 Universal Social Matrix Integration
* **Optimized Brand Mapping:** The layout features structured shortcut matrices to GitHub, LinkedIn, and Snapchat accounts.
* **Custom Color Hover Shifting:** Each anchor block contains custom micro-interaction classes (`.linkedin-btn:hover`, etc.) that smoothly shift colors to match corporate brand identity guidelines upon cursor hover.

### 8. ✉️ Automated Contact Capture Pipeline
* **Serverless Email Transmission:** Form inputs are connected straight to a live Formspree endpoint backend pipeline, allowing recruitment managers to send secure inquiries without loading external client tools.
* **Anti-Spam Shield Configuration:** Features a hidden `_gotcha` honeypot verification input element designed to catch and automatically discard automated form spam bots safely.
