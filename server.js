const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", async (req, res) => {
  try {
    // Dynamically import node-fetch
    const fetch = await import("node-fetch");

    // Make a request to the Swiggy API
    const response = await fetch.default(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    // Check if the request was successful (status code 200)
    if (response.ok) {
      // Parse the JSON response
      const data = await response.json();
      // Return the data to your Vercel app
      res.json(data);
    } else {
      // If the request was not successful, return an error response
      res
        .status(response.status)
        .json({ error: "Failed to fetch data from Swiggy API" });
    }
  } catch (error) {
    // If an error occurs during the request, return an error response
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
