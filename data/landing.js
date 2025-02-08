import {
  BarChart3,
  Receipt,
  PieChart,
  CreditCard,
  Zap,
  BarChart,
} from "lucide-react";

export const statsData = [
  {
    value: "Active",
    label: "Users",
  },
  {
    value: "Seamless",
    label: "Transactions",
  },
  {
    value: "Reliable",
    label: "Uptime",
  },
  {
    value: "Growing",
    label: "Community",
  },
];


// Features Data
export const featuresData = [
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "Advanced Analytics",
    description:
      "Get detailed insights into your spending patterns with AI-powered analytics",
  },
  {
    icon: <Receipt className="h-8 w-8 text-blue-600" />,
    title: "Smart Receipt Scanner",
    description:
      "Extract data automatically from receipts using advanced AI technology",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "Budget Planning",
    description: "Create and manage budgets with intelligent recommendations",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "Multi-Account Support",
    description: "Manage multiple accounts in one place",
  },
  {
    icon: <BarChart className="h-8 w-8 text-blue-600" />,
title: "Financial Insights & Budget Alerts",
description: "Receive monthly reports and budget alerts via email to stay on top of your finances.",

  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "Automated Insights",
    description: "Get automated financial insights and recommendations",
  },
];

// How It Works Data
export const howItWorksData = [
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "1. Create Your Account",
    description:
      "Get started in minutes with our simple and secure sign-up process",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "2. Track Your Spending",
    description:
      "Automatically categorize and track your transactions in real-time",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "3. Get Insights",
    description:
      "Receive AI-powered insights and recommendations to optimize your finances",
  },
];

// Testimonials Data
export const testimonialsData = [
  {
    name: "Amruta Wakshe",
    role: "Student",
    image: "/testimonial(amruta).jpeg",
    quote:
     "ExpenseMate’s AI-powered analytics and automated insights have helped me understand my spending patterns and manage my budget more effectively.",
  },
  {
    name: "Nikita Mali",
    role: "Student",
    image: "/nikki-testimonial.jpeg",
    quote:
    "The smart receipt scanner saves me so much time by automatically extracting data, while the budget planning feature helps me stay on top of my finances.",
  },
  {
    name: "Sadhvi Kanekar",
    role: "Student",
    image: "/sadhvi-testimonial.jpeg",
    quote:
     "I love how ExpenseMate brings everything together—multi-account support, budget alerts, and financial insights—all in one place for easy management.",
  },
];