"use client";
import { useEffect } from "react";
import loadHereMapScripts from "../utils/hereMapLoader";

const MapPage = () => {
  useEffect(() => {
    const initializeMap = async () => {
      await loadHereMapScripts();

      const platform = new H.service.Platform({
        apikey: process.env.NEXT_PUBLIC_HERE_API_KEY,
      });
      const defaultLayers = platform.createDefaultLayers();
      const mapContainer = document.getElementById("map");
      mapContainer.style.width = "80vw";
      mapContainer.style.height = "90vh";
      const map = new H.Map(mapContainer, defaultLayers.vector.normal.map, {
        center: { lat: 37.773972, lng: -122.431297 },
        zoom: 13,
        pixelRatio: window.devicePixelRatio || 1,
      });

      window.addEventListener("resize", () => map.getViewPort().resize());
      const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
      const ui = H.ui.UI.createDefault(map, defaultLayers);

      // Return cleanup function
      return () => {
        window.removeEventListener("resize", () => map.getViewPort().resize());
      };
    };

    initializeMap();
  }, []);

  return <div id="map" style={{ width: "80vw", height: "90vh", overflow: "hidden" }} />;
};

export default MapPage;