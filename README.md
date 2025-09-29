<img width="1440" height="1162" alt="Dashboard" src="https://github.com/user-attachments/assets/b10af6d7-5510-4729-8d58-e16a80e61104" />


## ✨ Introduction
AI-powered modern stock market app built with Next.js, Shadcn, Better Auth, and Inngest! Track real-time prices, set personalized alerts, explore company insights, and manage watchlists. The admin dashboard allows managing stocks, publishing news, and monitoring user activity, while event-driven workflows power automated alerts, AI-driven daily digests, earnings notifications, and sentiment analysis.

## ⚙️ Tech Stack
1. Next.js - React Framework which provides server-side rendering
2. TypeScript - Superset of Javascript that imporves code quality for building large scale production ready applications
3. Better Auth - Authentication
4. Finnhub - Real time Financial Data Scraping API
5. Inngest - Platform for event-driven workflows and automated workflows
6. MongoDB - Flexible, high-performance NoSQL database
7. NodeMailer - Node.js library for sending emails easily
8. Shadcn - Open-source library of fully customizable, accessible React components which helps teams rapidly build consistent, visually appealing UIs
9. Tailwind CSS - Utility-first CSS framework

<img width="1897" height="912" alt="jsf" src="https://github.com/user-attachments/assets/d426edc3-d3cf-4cde-bdb1-1cef9fb405da" />

## 🔋 Features
1. Stock Dashboard: Track real-time stock prices with interactive line and candlestick charts, including historical data, and filter stocks by industry, performance, or market cap.
2. Powerful Search: Quickly find the best stocks with an intelligent search system that helps you navigate through Signalist.
3. Watchlist & Alerts: Create a personalized watchlist, set alert thresholds for price changes or volume spikes, and receive instant email notifications to stay on top of the market.
4. Company Insights: Explore detailed financial data such as PE ratio, EPS, revenue, recent news, filings, analyst ratings, and sentiment scores for informed decision-making.
5. Real-Time Workflows: Powered by Inngest, automate event-driven processes like price updates, alert scheduling, automated reporting, and AI-driven insights.
6. AI-Powered Alerts & Summaries: Generate personalized market summaries, daily digests, and earnings report notifications, helping users track performance and make data-driven decisions.
7. Customizable Notifications: Fine-tune alerts and notifications based on user watchlists and preferences for a highly personalized experience.
8. Analytics & Insights: Gain insights into user behavior, stock trends, and engagement metrics, enabling smarter business and trading decisions.

And many more, including code architecture and reusability.

### 🤸 Quick Start
Follow these steps to set up the project locally on your machine.

### Prerequisites
Make sure you have the following installed on your machine:
1. Git
2. Node.js
3. npm (Node Package Manager)

## Cloning the Repository
```bash
git clone https://github.com/adrianhajdin/signalist_stock-tracker-app.git
cd signalist_stock-tracker-app
```
Replace the placeholder values with your real credentials. You can get these by signing up at: MongoDB, Gemini, Inngest, Finnhub.

## Running the Project
```bash
npm run dev
npx inngest-cli@latest dev
```

## Set Up Environment Variables

Create a new file named .env in the root of your project and add the following content:
```bash
NODE_ENV='development'
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# FINNHUB
NEXT_PUBLIC_NEXT_PUBLIC_FINNHUB_API_KEY=
FINNHUB_BASE_URL=https://finnhub.io/api/v1

# MONGODB
MONGODB_URI=

# BETTER AUTH
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000

# GEMINI
GEMINI_API_KEY=

#NODEMAILER
NODEMAILER_EMAIL=
NODEMAILER_PASSWORD=
```
<img width="1850" height="903" alt="jsf2" src="https://github.com/user-attachments/assets/0dc8eedd-b802-4e7d-9cf2-7e1383f2392d" />
<img width="1723" height="902" alt="jsf3" src="https://github.com/user-attachments/assets/283d78b3-bb7a-4c01-9bb7-9d83f5ced51c" />
<img width="1897" height="912" alt="jsf" src="https://github.com/user-attachments/assets/086bef14-7d8a-43a9-94ee-a8747e441bf1" />

Done
