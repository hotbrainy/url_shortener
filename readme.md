# URL Shortener

A simple URL shortener service implemented with Node.js and Express, accompanied by a basic front-end for user interaction.

## Features

- Create short URLs for specified long URLs
- Redirect to original URLs using short URLs
- Basic front-end to interact with the API

## Prerequisites

- Node.js installed on your machine

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/url-shortener.git
   cd url-shortener
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## Usage

Start the server:

```sh
node server.js
```

Open browser with `http://localhost:3000`

## API Endpoints

### Create Short URL

- URL: `/shorten`

- Method: `POST`

- Request Body:

  ```json
  {
    "url": "https://example.com"
  }
  ```

- Success Response:

  ```json
  {
    "shortUrl": "http://localhost:3000/a1b2c3d"
  }
  ```

- Error Response:

  ```json
  {
    "error": "URL is required"
  }
  ```

### Redirect to Original URL

- URL: `/:shortId`

- Method: `GET`

- Success Response: Redirects to the original URL

- Error Response:
  ```json
  {
    "error": "URL not found"
  }
  ```

## Project Structure

```json
url-shortener/
├── index.html
├── package.json
├── server.js
└── README.md
```

## Dependencies

- Express: Fast, unopinionated, minimalist web framework for Node.js
- body-parser: Node.js body parsing middleware
- generate-unique-id: A tiny, secure URL-friendly unique string ID generator
- Bootstrap: for beautiful UI and responsive

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing

1. Fork the repository
2. Create your feature branch (git checkout -b feature/my-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin feature/my-feature)
5. Create a new Pull Request
