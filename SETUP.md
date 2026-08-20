# Portfolio Setup Guide

## Requirements
- Node.js 18+ with npm

## Installation & Running

```bash
# Install dependencies (exact versions enforced)
npm install

# Start dev server (runs on http://localhost:5174/)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## What's Protected

- ✅ **Error Boundary**: Catches and displays component errors gracefully
- ✅ **Icon Fallbacks**: Missing icon libraries render placeholder squares
- ✅ **Exact Dependencies**: No version drift via locked package.json and .npmrc
- ✅ **Tailwind Config**: Properly configured with content scanning
- ✅ **CSS Setup**: Correct Tailwind v4 imports and layer directives

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 5173 in use | Dev server auto-runs on 5174 |
| 404 Page Not Found | Ensure dev server is running (`npm run dev`) |
| White/blank page | Check browser console for errors (Error Boundary will display) |
| Missing styles | Confirm `tailwind.config.js` exists in root |
| Icon errors | SafeIcon component renders fallback placeholders |

## Architecture

```
src/
  ├── App.jsx                        # Wrapped with ErrorBoundary
  ├── ErrorBoundary.jsx              # Catches & displays errors
  ├── SafeIcon.jsx                   # Icon placeholder on failures
  ├── JonathanHuangPortfolio.jsx     # Main portfolio component
  ├── index.css                      # Tailwind v4 directives
  └── main.jsx                       # React entry point

tailwind.config.js                    # Tailwind configuration
.npmrc                                # npm strict versioning
```
