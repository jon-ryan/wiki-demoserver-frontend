# Wikidocs - Frontend
This is the frontend to the [Wikidocs demoserver](https://github.com/jon-ryan/wiki-demoserver). It is implemented with [Angular](https://angular.io/). This repo is for demonstration and learning. Functionality is limited without the backend server.

# Clone and build
Clone the repo with:
```bash
git clone https://github.com/jon-ryan/wiki-demoserver-frontend.git
```

Make sure you have npm installed. Then install dependencies:
```bash
npm install
```

Run dev build with backend server running on port 8080:
```bash
ng serve --open --proxy-config proxy.config.json
```

Build prod, serve files from backend server:
```bash
ng build
```
The build files will be stored in the *dist* folder.

To run the complete server please also follow the steps described in the README of the [Wikidocs backend](https://github.com/jon-ryan/wiki-demoserver).
