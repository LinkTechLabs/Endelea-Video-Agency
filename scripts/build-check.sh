#!/bin/bash

echo "🚀 Building Endelea Agency for production..."

# Clean any previous builds
rm -rf dist/

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Build the site
echo "🏗️ Building site..."
npm run build

# Check if build was successful
if [ -d "dist" ]; then
    echo "✅ Build successful!"
    echo ""
    echo "📁 Build output:"
    ls -la dist/
    echo ""
    echo "📊 Size analysis:"
    du -sh dist/*
    echo ""
    echo "✨ Ready for deployment!"
else
    echo "❌ Build failed!"
    exit 1
fi
