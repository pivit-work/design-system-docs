const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default {
    primaryHue: 259,
    primarySaturation: 63,
    darkMode: false,
    logo: (
        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <img src={`${basePath}/logo.webp`} alt="Logo" style={{ height: 28, width: 28, borderRadius: 6 }} />
            <strong>Pivit 디자인 시스템</strong>
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
