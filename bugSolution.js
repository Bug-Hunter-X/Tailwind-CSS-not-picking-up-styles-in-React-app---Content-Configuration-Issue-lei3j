```javascript
// ... your Tailwind CSS configuration ...
module.exports = {
  // ... other configurations ...
  content: [ 
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@your-ui-library/**/*.js' // If using a UI library with Tailwind classes
  ],
  theme: {
    extend: {
      // ... your custom theme ...
    }
  },
  plugins: []
}
```