# Payment Transfer Module

A Simple Biometrics authentication app for payment transfer.

Mock Data:
- Username: Jess Pang
- Total Balance: MYR 10,000.00 (Will always reset after initial app)
- User PIN: 1234

Feature:
- Validation for transfer form.
- Biometric authentication prompted upon the payment transfer happens for user authentication.
- Simulate API call for processing the transaction and balance will deduct after api call.
- Implemented proper error handling for various scenarios.
- History tab will display recent transaction history for quick re-sending.

**App will fallback insert PIN for devices without biometric capabilities**
                                **PIN: 1234**

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Make sure you have the following installed:

- Node.js
- Yarn
- React Native CLI
- Xcode (for iOS)
- Android Studio (for Android)

---

## Installation

Clone the repository and install dependencies:

```bash
yarn install
```

---

## Running the App

### Start Metro Bundler

```bash
yarn start
```

---

### iOS

Install iOS dependencies:

```bash
yarn install:ios
```

Run the app on iOS:

```bash
yarn ios

# OR Run in specific simulator
yarn ios --simulator="iPhone 16 Pro"
```

---

### Android

Run the app on Android:

```bash
yarn android
```

---

## Design Decision and challenges

**Design:**
- Redux toolkit for state management
- Formik and yup for textField and button validation
- Redux RTK query for simulate api service call
- Custom usehook for business logic
- MUI theming strategies for shared/re-useable component

**Challenges:**
- Lack of real device for testing
- Minimum time for overall testing or enhance UX


## Troubleshooting

- For iOS: Make sure you’ve run `cd ios && pod install` if needed.
- Ensure your emulator/simulator is running before executing platform-specific commands.

---

## Demo Video URL

-  Link: https://drive.google.com/drive/folders/19LhGG5v4xjzz4ytFwwLr43AhiYPKzihy?usp=share_link