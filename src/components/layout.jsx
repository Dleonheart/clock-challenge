export function StackLayout({children, gap = 1, justifyItems= 'start'}) {
  const gapIncrement = 8;

  return (
    <div style={{
      display: 'grid',
      gap: `${gapIncrement * gap}px`,
      justifyItems
    }}>
      {children}
    </div>
  );
}

export function InlineLayout({children, gap = 1, justifyItems= 'start'}) {
  const gapIncrement = 8;

  return (
    <div style={{
      display: 'flex',
      gap: `${gapIncrement * gap}px`,
      justifyItems
    }}>
      {children}
    </div>
  );
}
