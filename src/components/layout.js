import React from "react";

import Header from "./header.js";
import Footer from "./footer.js";

export default ({ children }) => (
  <div style={{ margin: `0 auto`, maxWidth: 650, padding: `1.25rem 1rem` }}>
    <Header />
    {children}
    <Footer />
  </div>
);
