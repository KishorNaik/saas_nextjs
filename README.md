# AI voice assistant LMS - NextJs Sample demo App

## Overview
This is a sample AI-powered voice-assisted Learning Management System (LMS) built with Next.js, designed to demonstrate how intelligent voice interaction can be integrated seamlessly into a modern web application.

## Tech Stack
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Shadcn](https://ui.shadcn.com/)
- [Clerk Authentication & Subscriptions(Powered by Stripe)](https://clerk.com/)
- [Supabase Database](https://supabase.com/) 
- [Lottie Animations](https://lottiefiles.com/)
- [VAPI AI](https://vapi.ai/)
- [SentryError Tracking](https://sentry.io/) (http://localhost:3000/sentry-example-page)
- [react-condition](https://www.npmjs.com/package/@yookue/react-condition)
- [zod](https://zod.dev/)
- [jsmastery/utils](https://www.npmjs.com/package/@jsmastery/utils)

## Architecture
This project embraces the Vertical Slice Architecture (VSA) pattern to encourage separation of concerns, maintainability, and horizontal scalability.
- Each functional feature  is organized as a distinct vertical slice—containing its own components,action, services and hooks.
- Rather than grouping by layer (e.g., all routes together), each slice encapsulates end-to-end logic, promoting autonomy and reducing coupling.
- This architecture enables easier debugging, maintainability, and horizontal scalability, as each slice can be independently tested and deployed.

## Disclaimer
This project is inspired by the original SaaS boilerplate created by [Adrian Hajdin](https://github.com/adrianhajdin/saas-app). While the foundational structure and some base logic were adopted from his repository, significant architectural changes have been made—most notably the implementation of Vertical Slice Architecture—to enhance maintainability, scalability, and modular design.

Credit and thanks to Adrian for the original work that served as a strong starting point.