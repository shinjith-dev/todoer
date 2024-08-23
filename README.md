# Todoer

Cross platform task management app

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

## Tech Stack

- React - JS library
- React Native - Native framework
- Expo - React Native eco system
  - Expo Router
  - And other many libraries comes woth the ecosystem
- react-native-bottom-sheet - bottom sheet drawer ui
- react-native-picker-select - Select input for react native
- @react-native-async-storage/async-storage - query caching
- twrnc - tailwind support for react native
- Nextjs - React framework for web
- Tailwind - Styling
- Radix UI Components - components like select, dialog, ...
- Supabase - Database provider
  - Postgres - database
- TypeScript - for static type checking
- React Hook Form - forms
  - zod - form validation
- tabler icons - Icon set

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

Run below command, please ensure that environment variables mentioned below are set

```bash
  cd apps/web
  yarn dev
```

Head to `http://localhost:3000` on browser

## Mobile App

_Pre-requesite_

- Android Platform Tools installed
- USB Debugging enabled on your mobile device
- Both systems are connected to smae local network and connected by usb
- Ensure that `adb devices` command lists your device
- set all environment variables mentioned below

If above steps are completed and verified run below command

```bash
  cd apps/native
  yarn dev
```

Scan QR Code generated on the terminal, it install required version of expo go and starts the app

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

### For Web

```env
  # apps/web/.env

  EXPO_PUBLIC_SUPABASE_URL= # obtained from supabase project dashboard
  EXPO_PUBLIC_SUPABASE_ANON_KEY= # obtained from supabase project dashboard
```

### For Mobile app

```env
  # apps/native/.env

  EXPO_USE_METRO_WORKSPACE_ROOT=1 # it`s a mandatory flag for expo on monorepo
  EXPO_PUBLIC_SUPABASE_URL= # obtained from supabase project dashboard
  EXPO_PUBLIC_SUPABASE_ANON_KEY= # obtained from supabase project dashboard
```
