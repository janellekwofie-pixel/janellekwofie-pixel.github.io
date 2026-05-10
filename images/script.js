function locateMe() {
    const status = document.querySelector("#status");
    const ml = document.querySelector("#ml");

    ml.href = "";
    ml.textContent = "";

    function success(position) {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;

        status.textContent = "";
        ml.href = `https://www.openstreetmap.org/#map=18/${lat}/${long}`;
        ml.textContent = `You are currently at: ${lat} °,: ${long} °`;

        function error() {
            status.textContent = "Unable to retrieve your location";
        }

        if (!navigator.geolocation) {
            status.textContent = "Geolocation is not supported by your browser";
        } else {
            status.textContent = "Locating…";
            navigator.geolocation.getCurrentPosition(success, error);
        }
    }
}