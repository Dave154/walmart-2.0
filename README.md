# Walmart 2.0
![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js)  
![Zustand](https://img.shields.io/badge/Zustand-blue?style=for-the-badge)  
![ShadCN](https://img.shields.io/badge/ShadCN-gray?style=for-the-badge)  
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-blue?style=for-the-badge&logo=tailwindcss)  
![Oxylabs](https://img.shields.io/badge/Oxylabs-EE5B24?style=for-the-badge&logoColor=white)  
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)  


Walmart 2.0 is a clone of Walmart's e-commerce platform, designed as a modern web application that leverages Oxylabs for data scraping. While it replicates key features for browsing and exploring products, **payment functionality is not included**.


## Tech Stack

- **Next.js**: Enables server-side rendering and efficient routing.
- **Zustand**: Handles state management for the application.
- **ShadCN**: Provides a library of highly customizable UI components.
- **Tailwind CSS**: Used for creating responsive and utility-first designs.
- **Oxylabs**: Powers the data scraping process for fetching Walmart data.

## Live Demo

Check out the live demo: [Walmart 2.0 on Vercel](https://walmart-2-0-rosy.vercel.app/)  

## Environment Variables

The project requires a `.env.local` file for environment variables. Add the following variables to configure Oxylabs:

```env
OXYLABS_USERNAME=
OXYLABS_PASSWORD=
```

Replace the placeholders with your Oxylabs credentials.

## Features

- **Data Scraping**: Fetches product data from Walmart using Oxylabs.
- **Modern UI**: Built with ShadCN and styled with Tailwind CSS for a seamless user experience.
- **Responsive Design**: Fully responsive layout for desktop and mobile devices.
- **State Management**: Zustand handles global state efficiently.
- **No Payment Integration**: This project focuses on showcasing the product catalog and user interface, excluding payment functionality.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Dave154/walmart-2.0.git
   ```

2. Navigate to the project directory:

   ```bash
   cd walmart-2.0
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env.local` file in the root directory and add your Oxylabs credentials:

   ```env
   OXYLABS_USERNAME=your_username
   OXYLABS_PASSWORD=your_password
   ```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Deployment on Vercel

1. Push your project to a GitHub repository.
2. Connect the repository to your Vercel account.
3. Add the environment variables (`OXYLABS_USERNAME` and `OXYLABS_PASSWORD`) in the **Vercel Dashboard** under the project’s Environment Variables section.
4. Deploy your project.

## Contributing

Contributions are welcome! Submit issues or pull requests to improve the project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
