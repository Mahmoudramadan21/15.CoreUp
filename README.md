# CoreUP - Startup Matchmaking Platform

## Overview

CoreUP is a modern web platform designed to connect startups with investors, accelerators, and corporates. It provides an all-in-one solution for startups to create accounts, complete their profiles, find investors, and apply for opportunities. The platform also supports investors in discovering promising startups and facilitates job seekers in finding opportunities within the startup ecosystem.

## Objectives

- **Accessibility**: Ensure the platform is usable for all users, including those using screen readers, by implementing ARIA attributes, semantic HTML, and proper focus styles.
- **Performance**: Optimize the platform for faster load times using lazy loading, React.memo, and proper image attributes (width, height, loading="lazy").
- **Best Practices**: Follow clean code principles, use SCSS variables and mixins for maintainability, and organize SCSS properties in a consistent order (Layout → Box Model → Typography → Visual → Transitions).

## Features

- **Startup and Investor Matchmaking**: Connect startups with investors through a seamless interface.
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices.
- **Pricing Plans**: Offers multiple plans (Basic, Standard, Premium) for startups to choose from.
- **Testimonials**: Showcases client feedback to build trust.
- **Call to Action (CTA)**: Encourages users to join the platform.
- **Newsletter Subscription**: Allows users to subscribe to updates via the footer.

## Tech Stack

- **Frontend**: React, React Router
- **Styling**: SCSS with a modular structure (variables, mixins)
- **Assets**: Images and icons for visual elements
- **Accessibility**: ARIA attributes, semantic HTML
- **Performance**: Lazy loading, React.memo

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Mahmoudramadan21/15.CoreUp.git
   ```
2. Navigate to the project directory:
   ```bash
   cd coreup
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:3000`.

## Usage

- Navigate to the homepage to explore the platform.
- Use the header navigation to access sections like Startups, Investors, Job Seeker, and Messages.
- Sign up via the "Join Now" button to create an account.
- Explore pricing plans and select one that suits your needs.
- Subscribe to the newsletter in the footer for updates.

## Project Structure

- `src/components/`: Reusable React components (Button, Card, Plan, etc.)
- `src/sections/`: Page sections (Hero, Success, Pricing, etc.)
- `src/styles/`: SCSS files with variables, mixins, and component-specific styles
- `src/assets/`: Images, icons, and other static assets

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -m "Add your message"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## Contact

For inquiries, reach out to:

- Email: [office@coreup.com](mailto:office@coreup.com)
- LinkedIn: [CoreUP on LinkedIn](https://linkedin.com)

## License

© 2025 CoreUP. All rights reserved.
