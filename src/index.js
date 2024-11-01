// Import necessary libraries from React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Import the main App component
import App from "./App";

// Get the root element from the HTML file where React will render the app
const rootElement = document.getElementById("root");

// Ensure the root element exists before creating a root
if (rootElement) {
  // Create a root for rendering using React 18 API
  const root = createRoot(rootElement);

  // Render the App component inside the StrictMode wrapper
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  // If the root element is not found, log an error message for troubleshooting
  console.error(
    "Could not find the root element. Ensure index.html has a div with id 'root'."
  );
}
