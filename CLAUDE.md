# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for A. Frank Cairampoma, a Full Stack Developer specializing in web and mobile development. The portfolio showcases professional experience, skills, and projects in an interactive format.

## Architecture

### Core Structure
- **Static HTML/CSS/JS Portfolio**: No build process or package management required
- **Frontend-only**: Pure client-side implementation using vanilla JavaScript
- **Responsive Design**: Mobile-first approach with CSS Grid/Flexbox
- **Component-based CSS**: Modular stylesheets for different sections

### Key Files
- `index.html` - Main portfolio page with all content sections
- `css/styles.css` - Primary stylesheet with CSS custom properties for theming
- `css/command-palette.css` - Styles for the command palette modal
- `css/project.css` - Project-specific styles and modal components
- `js/main.js` - Core functionality (theme toggle, command palette)
- `js/command-palette.js` - Command palette interaction logic 
- `js/project.js` - Project modal system with detailed project data

### Architecture Patterns
- **Vanilla JavaScript Modules**: No frameworks, pure DOM manipulation
- **CSS Custom Properties**: Theme system using CSS variables for dark/light modes
- **Modal System**: JavaScript-driven modals for project details and command palette
- **Event-Driven**: Keyboard shortcuts (Cmd/Ctrl+K) and click handlers throughout

## Key Features

### Command Palette System
The site includes a VS Code-style command palette accessible via `Cmd/Ctrl + K`:
- **Keyboard Navigation**: Arrow keys for selection, Enter to execute
- **Filtered Search**: Real-time filtering of available commands
- **Quick Actions**: Print, social media navigation, shortcuts

### Theme System
- **Dark/Light Toggle**: Persistent theme selection stored in localStorage
- **CSS Custom Properties**: Centralized color management
- **Icon States**: Dynamic SVG icon switching for theme toggle

### Project Modal System
- **Detailed Project Views**: Rich project information with features, tech stack, and links
- **Dynamic Content**: JavaScript-generated modal content from project data object
- **Multiple Link Types**: Demo links, GitHub repositories, download links

## Development Guidelines

### File Organization
- Keep all styles modular and component-specific
- Use semantic HTML throughout
- Maintain accessibility with proper ARIA labels and keyboard navigation
- Spanish language content with English technical terms

### Styling Conventions
- Use CSS custom properties for consistent theming
- Maintain mobile-first responsive design
- Follow BEM-like naming for CSS classes where applicable
- Use semantic color names in CSS custom properties

### JavaScript Patterns
- Use vanilla JavaScript with modern DOM APIs
- Implement proper event cleanup and memory management
- Follow event delegation patterns for dynamic content
- Maintain keyboard accessibility for all interactive elements

### Content Management
- Project data is centralized in `js/project.js` for easy updates
- Social links and contact information are embedded in HTML
- CV/Resume file is stored in `documents/cv.pdf`

## Deployment

This is a static site hosted on GitHub Pages. No build process is required - changes to HTML, CSS, or JS files are directly deployable.