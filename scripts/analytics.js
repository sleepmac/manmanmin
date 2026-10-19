(() => {
    const measurementId = 'G-Z8333JWTHB';
    const hasGa = /^G-[A-Z0-9]+$/.test(measurementId);

    if (hasGa) {
        window.dataLayer = window.dataLayer || [];
        window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
        window.gtag('js', new Date());
        window.gtag('config', measurementId);

        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
        document.head.appendChild(script);
    }

    // GoatCounter's count.js loads asynchronously; clicks made before it is
    // ready are queued and sent once it loads, the same way gtag queues them.
    const goatcounterQueue = [];
    const goatcounterReady = () => window.goatcounter && typeof window.goatcounter.count === 'function';
    const sendGoatcounter = (event) => window.goatcounter.count({ path: event.name, title: event.title, event: true });
    const flushGoatcounter = () => {
        if (!goatcounterReady()) return;
        goatcounterQueue.splice(0).forEach(sendGoatcounter);
    };
    const goatcounterScript = document.querySelector('script[data-goatcounter]');
    if (goatcounterScript) goatcounterScript.addEventListener('load', flushGoatcounter);

    document.addEventListener('click', (event) => {
        const link = event.target.closest('a[data-event]');
        if (!link) return;

        const tracked = { name: link.dataset.event, title: link.dataset.eventTitle || link.dataset.event };

        if (hasGa) window.gtag('event', tracked.name, { send_to: measurementId });

        if (goatcounterReady()) sendGoatcounter(tracked);
        else goatcounterQueue.push(tracked);
    });
})();
