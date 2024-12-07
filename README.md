# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
## Build with Vite, Docker and Nginx
[Source](https://tiangolo.medium.com/react-in-docker-with-nginx-built-with-multi-stage-docker-builds-including-testing-8cc49d6ec305)

### Commands
1. Build the image
```bash
docker build -t react-docker .
```
2. Run the container
```bash

## TODO
- [x] Keep logged in after browser refresh
- [x] Add useAuth hook 
- [x] Add ProtectedRoutes with allowed roles
- [x] Add Conditional rendering of top menu based on user role
- [ ] Add a loading spinner
- [x] Add a 404 page
- [ ] Add a 500 page
- [ ] Add error handling for API requests
- [ ] Add a toast notification
- [ ] Add a modal
- [ ] Add a form validation
- [ ] Add a form submission with a loading spinner

## Backend beskyttet
1. Alle kan se trips
2. Kun user kan se trip details
3. Kun admin kan se guides

