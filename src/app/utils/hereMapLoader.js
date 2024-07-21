
export default function loadHereMapScripts() {
    return new Promise((resolve, reject) => {
      const script1 = document.createElement('script');
      script1.src = 'https://js.api.here.com/v3/3.1/mapsjs-core.js';
      script1.onload = () => {
        const script2 = document.createElement('script');
        script2.src = 'https://js.api.here.com/v3/3.1/mapsjs-service.js';
        script2.onload = () => {
          const script3 = document.createElement('script');
          script3.src = 'https://js.api.here.com/v3/3.1/mapsjs-ui.js';
          script3.onload = () => {
            const script4 = document.createElement('script');
            script4.src = 'https://js.api.here.com/v3/3.1/mapsjs-mapevents.js';
            script4.onload = resolve;
            script4.onerror = reject;
            document.body.appendChild(script4);
          };
          script3.onerror = reject;
          document.body.appendChild(script3);
        };
        script2.onerror = reject;
        document.body.appendChild(script2);
      };
      script1.onerror = reject;
      document.body.appendChild(script1);
    });
  }
  