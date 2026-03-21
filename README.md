# React Window Virtualization Tutorial

A comprehensive tutorial demonstrating different virtualization techniques using `react-window` in a Next.js application. This project showcases how to efficiently render large datasets by only displaying visible items in the viewport.

## 🚀 Features

This tutorial includes four different virtualization examples:

### 1. **Fixed Height Lists**
- Demonstrates basic list virtualization with fixed row heights (25px)
- Includes scroll-to-row functionality with programmatic navigation
- Uses 448 sample names for demonstration
- Perfect for simple lists where all items have the same height

### 2. **Variable Height Lists**
- Shows how to handle lists with different row heights
- States display at 30px height, cities at 25px height
- Demonstrates hierarchical data visualization (US states and cities)
- Uses 93 location items with mixed content types

### 3. **Dynamic Height Lists**
- Advanced example with dynamically measured row heights
- Features collapsible/expandable content with toggle functionality
- Heights are measured automatically as content changes
- Uses Lorem ipsum text of varying lengths (21 items)
- Demonstrates real-world scenarios like comment threads or expandable cards

### 4. **Grid Virtualization**
- 2D virtualization for tabular data
- Displays contact information in a spreadsheet-like grid
- Variable column widths optimized for different data types
- Handles 50 contact records with 10 columns each
- Efficient for large datasets like data tables or spreadsheets

## 🛠 Tech Stack

- **Next.js 16.2.0** - React framework with App Router
- **React 19.2.4** - UI library
- **react-window 2.2.7** - Virtualization library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling and responsive design

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd virtualization-tutorial

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the tutorial.

## 🏗 Project Structure

```
app/
├── components/
│   ├── FixedHeightExample.tsx      # Fixed height list demo
│   ├── VariableHeightExample.tsx   # Variable height list demo
│   ├── DynamicHeightExample.tsx    # Dynamic height list demo
│   ├── DynamicRowComponent.tsx     # Collapsible row component
│   └── GridExample.tsx             # Grid virtualization demo
├── hooks/
│   └── useListState.ts             # State management for dynamic lists
├── layout.tsx                      # App layout
└── page.tsx                        # Main page with tab navigation

public/
├── data.ts                         # Sample datasets
└── model.ts                        # TypeScript type definitions
```

## 🎯 Learning Objectives

After exploring this tutorial, you'll understand:

1. **When to use virtualization** - Performance benefits for large datasets
2. **Fixed vs Variable Heights** - Different approaches for different use cases
3. **Dynamic Height Measurement** - Handling content that changes size
4. **Grid Virtualization** - 2D virtualization for tabular data
5. **Performance Optimization** - Best practices for large list rendering

## 🔧 Key Concepts Demonstrated

### List Virtualization
- Only renders visible items plus a small buffer
- Dramatically improves performance for large datasets
- Maintains scroll position and user experience

### Height Management
- **Fixed**: All items same height (simplest, fastest)
- **Variable**: Predefined heights based on content type
- **Dynamic**: Measured heights that can change at runtime

### Grid Virtualization
- Virtualizes both rows and columns
- Optimizes rendering for large tabular data
- Supports variable column widths

## 📊 Performance Benefits

Virtualization provides significant performance improvements:

- **Memory Usage**: Only DOM nodes for visible items
- **Rendering Speed**: Constant time complexity regardless of dataset size
- **Scroll Performance**: Smooth scrolling even with thousands of items
- **Initial Load**: Faster page load times

## 🎨 Interactive Features

- **Tab Navigation**: Switch between different examples
- **Scroll to Row**: Jump to specific items in fixed height lists
- **Expand/Collapse**: Toggle content in dynamic height lists
- **Responsive Design**: Works on different screen sizes

## 🚦 Getting Started

1. Start with the **Fixed Height** example to understand basic concepts
2. Explore **Variable Height** to see how different item sizes work
3. Try **Dynamic Height** for advanced use cases with changing content
4. Check out **Grid** example for tabular data virtualization
