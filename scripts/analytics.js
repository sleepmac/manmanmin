(() => {
    const measurementId = 'G-Z8333JWTHB';
    if (!/^G-[A-Z0-9]+$/.test(measurementId)) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', measurementId);

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
    document.head.appendChild(script);

    document.addEventListener('click', (event) => {
        const link = event.target.closest('a[data-ga-event]');
        if (!link) return;
        window.gtag('event', link.dataset.gaEvent, { send_to: measurementId });
    });
})();
