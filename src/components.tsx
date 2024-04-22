import { html } from 'hono/html';
import { jsxRenderer } from 'hono/jsx-renderer';

export const renderer = jsxRenderer(({ children }) => {
  return html`
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          src="https://unpkg.com/htmx.org@1.9.11"
          integrity="sha384-0gxUXCCR8yv9FM2b+U3FDbsKthCI66oH5IA9fHppQq9DDMHuMauqq1ZHBpJxQ0J0"
          crossorigin="anonymous"
        ></script>
        <title>Hono + htmx</title>
      </head>
      <body>
        <h1>Hello</h1>
        ${children}
      </body>
    </html>
  `;
});

export const ExampleComponent = () => <div hx-get="/example">Click me !</div>;

export const FormComponent = () => (
  <>
    <form hx-post="/contact" hx-target="#response">
      <div class="form-group">
        <label>Email Address</label>
        <input name="email" placeholder="test@gmail.com" value="test@gmail.com" />
      </div>
      <div class="form-group">
        <label>First Name</label>
        <input type="text" class="form-control" name="firstName" placeholder="john" value="john" />
      </div>
      <div class="form-group">
        <label>Last Name</label>
        <input type="text" class="form-control" name="lastName" placeholder="doe" value="doe" />
      </div>
      <button type="submit" class="btn btn-default">
        Submit
      </button>
    </form>
    <div id="response"></div>
  </>
);
