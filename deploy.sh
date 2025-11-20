#!/bin/bash

# Loma Beach Resort - Deployment Script
# This script handles the deployment process for the website

echo "🏖️  Loma Beach Resort - Deployment Script"
echo "=========================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Run type checking
echo "🔍 Running type checks..."
npm run type-check

if [ $? -ne 0 ]; then
    echo "❌ Type checking failed"
    exit 1
fi

echo "✅ Type checking passed"

# Run linting
echo "🧹 Running linter..."
npm run lint

if [ $? -ne 0 ]; then
    echo "❌ Linting failed"
    exit 1
fi

echo "✅ Linting passed"

# Build the project
echo "🏗️  Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "✅ Build completed successfully"

# Check if .env file exists
if [ ! -f .env.local ]; then
    echo "⚠️  .env.local file not found. Creating from example..."
    cp env.example .env.local
    echo "📝 Please update .env.local with your actual values"
fi

echo ""
echo "🎉 Deployment preparation completed!"
echo ""
echo "Next steps:"
echo "1. Update .env.local with your production values"
echo "2. Deploy to your hosting platform:"
echo "   - Vercel: vercel --prod"
echo "   - Netlify: netlify deploy --prod"
echo "   - Custom server: npm start"
echo ""
echo "📊 Performance tips:"
echo "- Enable gzip compression on your server"
echo "- Set up CDN for static assets"
echo "- Configure SSL certificate"
echo "- Set up monitoring and analytics"
echo ""
echo "🔗 Useful links:"
echo "- Admin Dashboard: /admin"
echo "- Booking System: /book"
echo "- Contact Form: /contact"
echo ""
echo "Happy deploying! 🚀"
