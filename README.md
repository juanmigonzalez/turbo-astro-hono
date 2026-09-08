# 🚀 Turborepo Monorepo Template: Astro + Hono

A modern, production-oriented monorepo starter featuring **Astro** for the
frontend and **Hono** for the backend API, orchestrated with **Turborepo**.

## ✨ Features

- ⚡ **Astro 7.3** - Lightning-fast static site generation with modern web standards
- 🔥 **Hono 4.13** - Ultra-fast web framework for the Edge, Node.js, and more
- 🏗️ **Turborepo 2.10** - High-performance build system for JavaScript and TypeScript monorepos
- 🔒 **Security First** - Built-in CORS and secure headers (Helmet-like) configuration
- 📦 **pnpm Workspaces** - Efficient package management with shared dependencies
- 🎨 **Shared Tooling** - ESLint, Prettier, and TypeScript configurations shared across projects
- 🚀 **TypeScript** - Full type safety across the entire monorepo
- ⚙️ **Zero Config** - Pre-configured and ready to use out of the box
- 🧪 **Node.js Test Runner** - Fast backend tests without another test framework
- ✅ **GitHub Actions** - Automated lint, test, and build checks

## 🛠️ Tech Stack

### Frontend

- **Astro** 7.3 - Modern static site framework
- **TypeScript** 6.0 - Type-safe development

### Backend

- **Hono** 4.13 - Fast web framework
- **@hono/node-server** - Node.js adapter for Hono
- **TypeScript** 6.0 - Full type safety

### Tooling

- **Turborepo** 2.10 - Monorepo build system
- **pnpm** 11.26 - Fast, disk space efficient package manager
- **ESLint** 10 - Code linting
- **Prettier** 3.9 - Code formatting
- **TypeScript** 6.0 - Type checking

## 📋 Prerequisites

- **Node.js** >= 24.0.0
- **Corepack** (included with supported Node.js installations)

If you use `nvm`, you can run:

```bash
nvm use
```

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/juanmigonzalez/turbo-astro-hono.git
cd turbo-astro-hono
```

### 2. Install dependencies

```bash
corepack enable
pnpm install
```

### 3. Start development servers

```bash
pnpm dev
```

This will start:

- **Frontend** (Astro): http://localhost:3000
- **Backend** (Hono): http://localhost:3001

## 📁 Project Structure

```
turbo-astro-hono/
├── apps/
│   ├── frontend/          # Astro application
│   │   ├── src/
│   │   │   └── pages/
│   │   │       └── index.astro
│   │   ├── public/
│   │   ├── astro.config.mjs
│   │   └── package.json
│   └── backend/           # Hono API
│       ├── src/
│       │   └── index.ts
│       └── package.json
├── package.json           # Root package.json with shared dependencies
├── turbo.json            # Turborepo configuration
├── pnpm-workspace.yaml   # pnpm workspace configuration
├── eslint.config.js      # Shared ESLint configuration
├── .prettierrc           # Shared Prettier configuration
└── tsconfig.json         # Base TypeScript configuration
```

## 📜 Available Scripts

### Root Level

- `pnpm dev` - Start all applications in development mode
- `pnpm build` - Build all applications for production
- `pnpm lint` - Run ESLint on all projects
- `pnpm test` - Run all unit tests once
- `pnpm format` - Format code with Prettier

### Frontend (Astro)

```bash
cd apps/frontend
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm preview  # Preview production build
```

### Backend (Hono)

```bash
cd apps/backend
pnpm dev      # Start development server with hot reload
pnpm build    # Compile TypeScript
pnpm test     # Run backend tests
pnpm start    # Start production server
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in `apps/backend/`:

```env
PORT=3001
CORS_ORIGIN=http://localhost:3000
```

### CORS Configuration

The backend is pre-configured with CORS enabled. Update the `CORS_ORIGIN` environment variable to match your frontend URL in production.

### Secure Headers

The backend includes secure headers middleware (similar to Helmet) configured by default for enhanced security.

## 🏗️ Building for Production

```bash
# Build all applications
pnpm build

# The frontend will be built to apps/frontend/dist/
# The backend will be compiled to apps/backend/dist/
```

## 🧪 Development

### Adding a New Package

1. Create a new directory in `apps/`
2. Add a `package.json` with your dependencies
3. Turborepo will automatically detect it

### Shared Dependencies

Common dependencies like TypeScript, ESLint, and Prettier are shared at the root level. Add project-specific dependencies in their respective `package.json` files.

## 📦 Package Management

This template uses **pnpm** workspaces with a committed lockfile for fast,
reproducible installations across local development and CI.

## 🔍 SEO & Discoverability

This template is optimized for:

- **Monorepo starters** - Turborepo + Astro + Hono
- **Full-stack TypeScript** - Type-safe frontend and backend
- **Modern web frameworks** - Astro static sites with Hono APIs
- **Production-ready** - Pre-configured security and best practices

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this template for your projects.

## 🙏 Acknowledgments

- [Turborepo](https://turbo.build/) - Build system
- [Astro](https://astro.build/) - Web framework
- [Hono](https://hono.dev/) - Web framework
- [pnpm](https://pnpm.io/) - Package manager

## 🔗 Related Templates

Looking for other starter templates?

- [turbo-angular-hono](https://github.com/juanmigonzalez/turbo-angular-hono) - Angular + Hono monorepo template

---

**Made with ❤️ using Turborepo, Astro, and Hono**
