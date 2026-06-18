// SafeIcon component with fallback for missing icon definitions
export function SafeIcon({ icon: Icon, size = 16, className = '', ...props }) {
  if (!Icon || typeof Icon !== 'function') {
    // Render a placeholder square instead of crashing
    return (
      <div
        style={{
          display: 'inline-block',
          width: `${size}px`,
          height: `${size}px`,
          background: 'rgba(74,158,255,0.2)',
          borderRadius: '2px',
          border: '1px solid rgba(74,158,255,0.4)',
          flexShrink: 0
        }}
        {...props}
      />
    );
  }
  return <Icon size={size} className={className} {...props} />;
}
