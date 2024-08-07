---
title: "Step-by-Step Guide: Making API Calls with Axios"
date: "7 Apr, 2023"
excerpt: "Learn how to make API calls with Axios in this step-by-step guide. This tutorial covers everything from installation to handling responses, helping you streamline your API interactions."
---

In this comprehensive tutorial, we'll explore how to make API calls using Axios, a popular JavaScript library for handling HTTP requests. We'll cover the fundamentals of sending requests, processing responses, and addressing common issues.

## Prerequisites

Before we begin, ensure you have the following:

- Basic understanding of JavaScript
- Node.js installed on your machine
- A code editor like Visual Studio Code or Sublime Text

## Getting Started with Axios

To start using Axios, first install it via npm. Open your terminal and execute the following command:

```bash
npm install axios

```

This command will install Axios and its dependencies.

You can then include Axios in your project either directly in your HTML or via a JavaScript module bundler:

```html
<!-- Using a CDN -->
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

```javascript
<!-- Using a CDN -->
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

## Making Basic API Requests

Axios simplifies making various types of HTTP requests. Here’s how to use Axios for GET, POST, PUT, and DELETE requests:

### GET Request

Fetch data from a server using a GET request:

```javascript
const fetchData = async () => {
  try {
    const response = await axios.get("https://example.com/data");
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
```

### POST Request

Send data to a server using a POST request:

```javascript
const sendData = async () => {
  try {
    const response = await axios.post("https://example.com/login", {
      email: "test@example.com",
      password: "password",
    });
    console.log(response.data);
  } catch (error) {
    console.error("Error sending data:", error);
  }
};
```

### PUT Request

Update existing data on the server with a PUT request:

```javascript
const updateData = async () => {
  try {
    const response = await axios.put("https://example.com/user/420", {
      name: "John Smith",
      email: "jsmith@example.com",
    });
    console.log(response.data);
  } catch (error) {
    console.error("Error updating data:", error);
  }
};
```

### DELETE Request

Remove data from the server using a DELETE request:

```javascript
const deleteData = async () => {
  try {
    const response = await axios.delete("https://example.com/user/420");
    console.log(response.data);
  } catch (error) {
    console.error("Error deleting data:", error);
  }
};
```

### Handling Errors

Proper error handling is crucial for robust applications. Here’s how to handle errors from Axios requests:

```javascript
const fetchData = async () => {
  try {
    const response = await axios.get("http://example.com/data");
    console.log(response.data);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.error("Data not found");
    } else {
      console.error("Error:", error.message);
    }
  }
};
```

In this example, we check the response status code to log custom error messages.

## Conclusion

In this tutorial, we've covered how to perform API calls using Axios. We explored sending GET, POST, PUT, and DELETE requests, handling responses, and managing errors. With Axios, you can efficiently handle HTTP communications in your web applications.
