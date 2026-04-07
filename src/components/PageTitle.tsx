interface PageTitleProps {
  title: string;
  subtitle?: string;
}

export function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <h1 style={{
      fontSize: '24px',
      fontWeight: 700,
      borderBottom: '1px solid rgba(199, 199, 199, 0.5)',
      paddingBottom: '16px',
      marginBottom: '48px',
      color: '#333',
      lineHeight: 1.2,
    }}>
      {title}
      {subtitle && (
        <span style={{ fontSize: '14px', fontWeight: 400, color: '#999', marginLeft: '16px', fontStyle: 'italic' }}>
          {subtitle}
        </span>
      )}
    </h1>
  );
}
