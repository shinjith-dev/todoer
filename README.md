# Todoer

Cross platform task management app

## Demo video

[Demo video on loom](https://www.loom.com/share/f7c250b3b2a941d0b874b5609371c0bc?sid=6e20f2c9-54bf-4fa8-af90-91a484fabd2f)

## Tech Stack

- React - js library
- React Native - native framework
- Expo - react native eco system
  - Expo Router
  - And other many libraries comes woth the ecosystem
- react-native-bottom-sheet - bottom sheet drawer ui
- react-native-picker-select - select input for react native
- @react-native-async-storage/async-storage - query caching
- twrnc - tailwind support for react native
- Nextjs - react framework for web
- Tailwind - styling
- Radix UI Components - components like select, dialog, ...
- MockAPI - API endpoints
- TypeScript - for static type checking
- React Hook Form - forms
  - zod - form validation
- Turborepo - monorepo managing tool
- tabler-icons - icon set

## Run Locally

Clone the project and go to project directory

```bash
  git clone git@github.com:shinjith-dev/todoer.git
  cd todoer
```

Install dependencies

```bash
  yarn
```

## Web

Run below command

```bash
  cd apps/web
  yarn dev
```

Head to `http://localhost:3000` on browser

## Mobile App

_Pre-requesite for running on physical device_

- Android Platform Tools installed
- USB Debugging enabled on your mobile device
- Both systems are connected to same local network and connected by usb
- Ensure that `adb devices` command lists your device
- set all environment variables mentioned below

_or_ 

Instead of running on physical device you can run on an emulator in the pc itself, for that you must install and verify
- Java SDK
- Android Studio
- Emulator with API level 34 (UpsideDownCake)
- set all environment variables mentioned below

If above steps are completed and verified run below command

```bash
  cd apps/native
  yarn dev
```

Scan QR Code generated on the terminal, it will install required version of expo go and starts the app

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

### For Mobile app

```env
  # apps/native/.env

  EXPO_USE_METRO_WORKSPACE_ROOT=1 # it`s a mandatory flag for expo on a monorepo
```
