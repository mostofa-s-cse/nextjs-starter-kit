# Next.js Starter Kit

A modern, production-ready Next.js 15 application built with TypeScript, Redux Toolkit, Tailwind CSS, and comprehensive features. This starter kit includes an advanced data table with server-side pagination, search, sorting, and robust API integration.

## ✨ Features

### Core Technologies

- **Next.js 15** with App Router and Server Components
- **TypeScript** for type-safe development
- **Redux Toolkit** for efficient state management
- **Tailwind CSS** for responsive, utility-first styling
- **Axios** with interceptors for robust API handling
- **ESLint & Prettier** for code quality and formatting
- **Lucide React** for beautiful icons

### Advanced Data Table

- **Server-side pagination** with customizable page sizes (10, 20, 50)
- **Debounced search** (500ms delay) across multiple fields
- **Multi-column sorting** with ascending/descending order
- **Loading states** and comprehensive error handling
- **Responsive design** with mobile-friendly controls
- **Real-time data info** (showing X to Y of Z entries)

### API Service Layer

- **Dual API instances** (public/private) with automatic token handling
- **Global error handling** with status-specific responses
- **Request/response interceptors** for authentication
- **Comprehensive API helpers** for common operations
- **Structured error responses** with success/failure states

### Additional Components

- **Redux Counter** demonstrating state management
- **Post Cards** with interactive features
- **Responsive Layout** with navigation and footer
- **Modern UI Components** with hover states and animations

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

1. **Clone the repository:**

   ```bash
   git clone <your-repo-url>
   cd nextjs-starter-kit
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

### Development

**Start the development server:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

The app will be available at [http://localhost:3000](http://localhost:3000) with hot reload enabled.

### Production Build

```bash
npm run build
# or
yarn build
```

The production-ready files will be in the `.next/` directory.

### Code Quality

```bash
# Lint code
npm run lint
# or
yarn lint

# Fix linting issues
npm run lint:fix
# or
yarn lint:fix

# Format code
npm run format
# or
yarn format

# Check formatting
npm run format:check
# or
yarn format:check
```

## 📁 Project Structure

```
nextjs-starter-kit/
├── public/
│   ├── next.svg                # Next.js logo
│   ├── vercel.svg              # Vercel logo
│   └── favicon.ico             # App favicon
├── src/
│   ├── app/
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout with providers
│   │   └── page.tsx            # Main homepage
│   ├── components/
│   │   ├── Counter.tsx         # Redux counter component
│   │   ├── DataTable.tsx       # Advanced data table
│   │   ├── Layout.tsx          # App layout with nav/footer
│   │   └── Post.tsx            # Post card components
│   ├── services/
│   │   └── api.ts              # API service layer with helpers
│   ├── store/
│   │   ├── index.ts            # Redux store configuration
│   │   ├── provider.tsx        # Redux provider component
│   │   ├── hooks.ts            # Typed Redux hooks
│   │   └── slices/
│   │       ├── counterSlice.ts # Counter state slice
│   │       └── dataTableSlice.ts # Data table state slice
│   └── types/                  # TypeScript type definitions
├── .env.local                  # Environment variables
├── .eslintrc.json              # ESLint configuration
├── .prettierrc                 # Prettier configuration
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
```

## 🛠️ Available Scripts

| Command                | Description                              |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | Start development server with hot reload |
| `npm run build`        | Build for production                     |
| `npm run start`        | Start production server                  |
| `npm run lint`         | Lint TypeScript/JavaScript files         |
| `npm run lint:fix`     | Fix linting issues automatically         |
| `npm run format`       | Format code with Prettier                |
| `npm run format:check` | Check code formatting                    |
| `npm run type-check`   | Run TypeScript type checking             |

## 🔧 API Service Usage

The project includes a comprehensive API service layer with both public and private endpoints:

### Basic Usage

```typescript
import { apiHelpers } from '@/services/api';

// Fetch posts with pagination and search
const result = await apiHelpers.getPosts({
  page: 1,
  limit: 10,
  search: 'React',
  sortBy: 'title',
  sortOrder: 'asc',
});

if (result.success) {
  console.log('Posts:', result.data);
  console.log('Total:', result.total);
} else {
  console.error('Error:', result.error);
}
```

### Public vs Private APIs

```typescript
import { publicApi, privateApi } from '@/services/api';

// Public API (no authentication required)
const publicData = await publicApi.get('/posts');

// Private API (requires authentication token)
const privateData = await privateApi.get('/user/profile');
```

### Authentication

The private API automatically handles authentication tokens stored in `localStorage`. Set your token like this:

```typescript
localStorage.setItem('token', 'your-jwt-token');
```

## 📊 Data Table Features

The `DataTable` component demonstrates advanced data table capabilities:

- **Server-side pagination** with First, Previous, Next, Last controls
- **Debounced search** (500ms delay) to prevent excessive API calls
- **Multi-column sorting** with visual sort indicators
- **Responsive design** that works on mobile devices
- **Loading states** with spinners and visual feedback
- **Error handling** with user-friendly messages
- **Customizable page sizes** (10, 20, 50 items per page)

## 🎨 Styling & Customization

### Tailwind CSS

- **Utility-first** approach for rapid development
- **Responsive design** with mobile-first methodology
- **Custom color palette** and component variants
- **Production optimization** with unused CSS purging

### Component Styling

- **Consistent spacing** using Tailwind's spacing scale
- **Hover states** and **focus indicators** for accessibility
- **Loading animations** with CSS animations
- **Professional color scheme** with proper contrast ratios

## 🚀 Customization Guide

### Adding New API Endpoints

1. Add new functions to `apiHelpers` in `src/services/api.ts`
2. Handle both success and error states
3. Use appropriate API instance (public/private)

### Creating New Components

1. Create component in `src/components/`
2. Use modern React patterns (hooks, functional components)
3. Follow existing patterns for styling and structure

### Adding New Redux State

1. Create new slice in `src/store/slices/`
2. Export actions and selectors
3. Add to store configuration in `src/store/index.ts`

### Styling Guidelines

- Use Tailwind utilities for consistent spacing
- Implement hover and focus states for interactive elements
- Ensure responsive design across all screen sizes
- Maintain consistent color scheme throughout the app

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

This creates optimized files in the `.next/` directory ready for deployment.

### Deployment Platforms

- **Vercel**: Zero-config deployment for Next.js apps
- **Netlify**: Supports Next.js with build plugins
- **AWS Amplify**: Full-stack deployment with CI/CD
- **Digital Ocean**: App Platform with automatic deployments
- **Docker**: Containerized deployment for any platform

### Environment Variables

Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_API_BASE_URL=https://your-api-url.com
NEXT_PUBLIC_ENVIRONMENT=production
NEXT_PUBLIC_JWT_SECRET=your-secret-key-here
```

## 🧪 Testing

The project is set up for testing. You can add tests in:

- `src/components/__tests__/` for component tests
- `src/services/__tests__/` for service tests
- `src/store/__tests__/` for Redux tests

## 📱 Mobile Responsiveness

The application is fully responsive and works seamlessly across:

- **Desktop** (1024px and up)
- **Tablet** (768px to 1023px)
- **Mobile** (below 768px)

## 🔐 Security Features

- **Authentication** with JWT tokens
- **Request/Response interceptors** for security
- **Error handling** without exposing sensitive information
- **Environment variable** management for secrets

## 🎯 Performance Optimizations

- **Next.js 15** with App Router for optimal performance
- **Server-side rendering** for better SEO
- **Code splitting** for smaller bundle sizes
- **Image optimization** with Next.js Image component
- **Lazy loading** for better initial load times

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework for production
- [Redux Toolkit](https://redux-toolkit.js.org/) - The official Redux toolset
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [Axios](https://axios-http.com/) - Promise-based HTTP client
- [Lucide React](https://lucide.dev/) - Beautiful & consistent icons
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - Free fake API for testing

## 📚 Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/) - Learn about Redux Toolkit
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn about Tailwind CSS
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - Learn about TypeScript

---

**Built with ❤️ using Next.js 15, TypeScript, Redux Toolkit, and Tailwind CSS.**
