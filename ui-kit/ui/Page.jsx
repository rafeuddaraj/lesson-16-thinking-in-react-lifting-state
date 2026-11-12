const themes = {
  light: {
    '--bg': '#f8fafc',
    '--text': '#0f172a',
    '--muted': '#64748b',
    '--surface': '#ffffff',
    '--border': '#e2e8f0',
    '--field': '#ffffff',
  },
  dark: {
    '--bg': '#0f172a',
    '--text': '#f1f5f9',
    '--muted': '#94a3b8',
    '--surface': '#1e293b',
    '--border': '#334155',
    '--field': '#0f172a',
  },
}

export default function Page({ title, theme = 'light', children }) {
  return (
    <div style={themes[theme]} className="min-h-screen bg-(--bg) text-(--text)">
      <main className="mx-auto max-w-2xl p-6">
        <h1 className="mb-6 text-3xl font-bold">{title}</h1>
        {children}
      </main>
    </div>
  )
}
