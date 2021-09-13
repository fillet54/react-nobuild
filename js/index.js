if ('serviceWorker' in navigator) {
    (async () => {

        try {

            const config = {
                globalMap: {
                    'react': 'React',
                    'react-dom': 'ReactDOM'
                }
            };

            const registration = await navigator.serviceWorker.register('sw.js?' + JSON.stringify(config));

            await navigator.serviceWorker.ready;

            const launch = async () => {
                await import("/app/index.jsx");
            };

            // this launches the React app if the SW has been installed before or immediately after registration
            // https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle#clientsclaim
            if (navigator.serviceWorker.controller) {
                await launch();
            } else {
                navigator.serviceWorker.addEventListener('controllerchange', launch);
            }

        } catch (error) {
            console.error('Service worker registration failed', error.stack);
        }

    })();
} else {
    alert('Service Worker is not supported');
}
