import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.casadrive.app',
  appName: 'CasaDrive',
  webDir: 'www',
  server: {
    androidScheme: 'https',
    cleartext: true
  },
  android: {
    buildOptions: {
      keystorePath: null,
      keystorePassword: null,
      keyAlias: null,
      keyPassword: null,
      releaseType: 'APK',
    }
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#FFFFFF",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: true,
      androidSpinnerStyle: "large",
      spinnerColor: "#2563EB",
    },
    StatusBar: {
      style: "dark",
      backgroundColor: "#FFFFFF",
      overlaysWebView: false,
    },
    Keyboard: {
      resize: "body",
      style: "dark",
      resizeOnFullScreen: true,
    },
    Geolocation: {
      permissions: ["location"],
    },
    Haptics: {
      enabled: true,
    }
  }
}

export default config;