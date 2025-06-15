# Redux-Like Counter App

A simple counter application demonstrating Redux-like state management patterns using vanilla JavaScript. This project showcases how to implement a predictable state container with actions, reducers, and subscribers without external dependencies.

## Features

- ✨ Redux-like state management pattern
- 🎯 Predictable state updates through actions and reducers
- 🔄 Reactive UI updates via store subscriptions
- 📱 Responsive design with modern CSS
- 🎨 Beautiful gradient styling with hover effects
- ⚡ Lightweight - no external dependencies

## Project Structure

```
redux-counter/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
└── README.md          # This file
```

## How It Works

### Redux Pattern Implementation

1. **Store**: Central state container that holds the application state
2. **Actions**: Plain objects describing what happened (INCREMENT/DECREMENT)
3. **Reducer**: Pure function that specifies how state changes in response to actions
4. **Subscribers**: Functions that get called when state changes

### Code Architecture

```javascript
// Store creation
const store = createStore(counterReducer, initialState);

// Action dispatching
store.dispatch(incrementAction());

// State subscription
store.subscribe(updateUI);
```

## Getting Started

Since this project uses modern JavaScript features and separate files, you'll need to serve it through a local HTTP server rather than opening the HTML file directly in your browser.

### Option 1: Using Python (Recommended)

If you have Python installed:

```bash
# Navigate to the project directory
cd path/to/redux-counter

# Python 3
python -m http.server 8000

# Python 2 (if using older version)
python -m SimpleHTTPServer 8000
```

Then open your browser and navigate to: `http://localhost:8000`

### Option 2: Using Node.js

If you have Node.js installed:

```bash
# Install http-server globally (one-time setup)
npm install -g http-server

# Navigate to project directory
cd path/to/redux-counter

# Start the server
http-server

# Or specify a port
http-server -p 8000
```

Then open: `http://localhost:8080` (or the port you specified)

### Option 3: Using VS Code Live Server

1. Install the "Live Server" extension in VS Code
2. Open the project folder in VS Code
3. Right-click on `index.html`
4. Select "Open with Live Server"

### Option 4: Using other tools

- **PHP**: `php -S localhost:8000`
- **Ruby**: `ruby -run -e httpd . -p 8000`
- **Node.js serve**: `npx serve .`

## Why Can't I Just Open the HTML File?

Opening the HTML file directly (`file://` protocol) will result in CORS errors because:

- Modern browsers block loading of modules and separate files for security
- The `import`/`export` statements require HTTP/HTTPS protocol
- This is standard behavior for web security

## Browser Compatibility

This application works in all modern browsers that support:
- ES6 Modules
- Arrow functions
- Template literals
- CSS Grid and Flexbox

## Customization

### Adding New Actions

1. Create new action creators:
```javascript
const resetAction = () => ({ type: 'RESET' });
```

2. Update the reducer:
```javascript
case 'RESET':
  return 0;
```

3. Add UI elements and event listeners as needed.

### Styling

The CSS uses modern features like:
- CSS Grid and Flexbox for layout
- CSS Custom Properties (variables)
- Gradient backgrounds
- CSS animations and transitions

Feel free to modify `styles.css` to match your design preferences.

## Learning Resources

This project demonstrates core concepts from:
- [Redux Documentation](https://redux.js.org/)
- [State Management Patterns](https://redux.js.org/understanding/thinking-in-redux/motivation)
- [Flux Architecture](https://facebook.github.io/flux/)

## Contributing

Feel free to fork this project and experiment with:
- Additional counter operations (multiply, divide)
- Multiple counters
- Undo/redo functionality
- Time travel debugging
- Middleware implementation

## License

This project is open source and available under the MIT License.