<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Copilot Instructions for Next.js Starter Kit

This is a Next.js 15 project with TypeScript, Redux Toolkit, Tailwind CSS, and modern development practices.

## Project Guidelines

- Use TypeScript for all new files and components
- Follow Next.js 15 App Router patterns and conventions
- Use Redux Toolkit for state management with proper slice patterns
- Apply Tailwind CSS for styling with responsive design principles
- Implement proper error handling and loading states
- Use modern React patterns (hooks, functional components)
- Follow the existing code structure and naming conventions

## Component Development

- Create reusable components in `src/components/`
- Use TypeScript interfaces for props and state
- Implement responsive design with Tailwind CSS utilities
- Include proper accessibility attributes
- Add hover states and focus indicators
- Use Lucide React for icons

## State Management

- Create Redux slices in `src/store/slices/`
- Use typed hooks from `src/store/hooks.ts`
- Follow the existing patterns for actions and reducers
- Include proper TypeScript types for state

## API Integration

- Use the API service layer in `src/services/api.ts`
- Handle both success and error states
- Use proper TypeScript interfaces for API responses
- Implement loading states and error handling

## Styling Guidelines

- Use Tailwind CSS utility classes
- Follow the existing color scheme and spacing
- Implement consistent hover and focus states
- Ensure mobile-first responsive design
- Use semantic HTML elements

## Code Quality

- Run prettier for code formatting
- Follow ESLint rules
- Use meaningful variable and function names
- Add TypeScript types for all function parameters and return values
- Implement proper error boundaries where needed
