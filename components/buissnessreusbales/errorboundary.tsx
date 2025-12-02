// src/components/common/TabErrorBoundary.tsx
"use client";

import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
  error: Error | null;
};

export class TabErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // ✅ This will show up in **production** DevTools console
    console.error("[BusinessTabs ErrorBoundary]", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="mt-6 text-sm text-red-600">
          {/* You can make this more subtle if you want */}
          Something went wrong while loading this section.
        </div>
      );
    }

    return this.props.children;
  }
}
