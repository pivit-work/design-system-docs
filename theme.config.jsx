const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default {
    primaryHue: 220,
    primarySaturation: 10,
    darkMode: false,
    nextThemes: {
        defaultTheme: 'light',
        forcedTheme: 'light',
    },
    logo: (
        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <img src={`${basePath}/logo.png`} alt="Pivit" style={{ height: 28 }} />
            <span style={{ fontSize: 14, fontWeight: 500, color: '#667085' }}>Design System</span>
        </span>
    ),
    project: {
        link: 'https://github.com/pivit-work/design-system',
    },
    docsRepositoryBase: 'https://github.com/pivit-work/design-system-docs',
    footer: {
        text: 'Pivit 디자인 시스템 © 2026',
    },
    useNextSeoProps() {
        return {
            titleTemplate: '%s – Pivit 디자인 시스템'
        }
    }
}
