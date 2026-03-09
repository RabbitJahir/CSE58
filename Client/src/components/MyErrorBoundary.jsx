// src/components/MyErrorBoundary.jsx
import React from "react";

class MyErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold">Hmmm.......</h1>
          <p className="mt-2">Please refresh the page or try again later. If still unaccesable, contact me!</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default MyErrorBoundary;