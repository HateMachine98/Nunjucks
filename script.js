// Render template
const template = `
  <h1>Hello, {{ name }}!</h1>
`;
const data = { name: "John Doe" };
const renderedTemplate = nunjucks.renderString(template, data);

// Display rendered template
const contentElement = document.getElementById("content");
contentElement.innerHTML = renderedTemplate;
