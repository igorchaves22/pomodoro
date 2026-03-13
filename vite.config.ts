import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: "autoUpdate",
            manifest: {
                name: "Pomodoro",
                short_name: "Pomodoro",
                description:
                    "A Pomodoro timer to organize tasks, stay focused, and boost productivity using the Pomodoro technique.",
                theme_color: "#ffffff",
                background_color: "#ffffff",
                display: "standalone",
                scope: "/",
                start_url: "/",
                icons: [
                    {
                        src: "/pwa-192x192.png",
                        sizes: "192x192",
                        type: "image/png"
                    },
                    {
                        src: "/pwa-512x512.png",
                        sizes: "512x512",
                        type: "image/png"
                    }
                ]
            }
        })
    ],
    resolve: {
        alias: {
            "~assets": resolve(__dirname, "src/assets"),
            "~components": resolve(__dirname, "src/components"),
            "~constants": resolve(__dirname, "src/constants"),
            "~contexts": resolve(__dirname, "src/contexts"),
            "~helpers": resolve(__dirname, "src/helpers"),
            "~hooks": resolve(__dirname, "src/hooks"),
            "~pages": resolve(__dirname, "src/pages"),
            "~router": resolve(__dirname, "src/router"),
            "~store": resolve(__dirname, "src/store"),
            "~styles": resolve(__dirname, "src/styles"),
            "~types": resolve(__dirname, "src/types"),
            "~utils": resolve(__dirname, "src/utils")
        }
    }
});
