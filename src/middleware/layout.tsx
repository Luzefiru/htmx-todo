import { jsxRenderer } from 'hono/jsx-renderer';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const layout = jsxRenderer(
  ({ children, title }) => {
    return (
      <html lang="en">
        <head>
          <link href="/_tailwind.css" rel="stylesheet" />
          <title>{title || 'Hyper Task'}</title>
          <script
            src="https://unpkg.com/htmx.org@1.9.10"
            integrity="sha384-D1Kt99CQMDuVetoL1lrYwg5t+9QdHe7NLX/SoJYkXDFfX37iInKRy5xLSi8nO7UC"
            crossorigin="anonymous"
          ></script>
        </head>
        <body class="flex flex-col h-screen">
          <Header />
          <main class="py-8 sm:py-12">{children}</main>
          <Footer />
        </body>
      </html>
    );
  },
  {
    docType: true,
  }
);