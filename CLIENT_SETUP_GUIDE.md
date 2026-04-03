# UFLEX Client Setup Guide

This document explains how to run the UFLEX website on a local computer.

## Requirements

Please install the following software first:

1. **VS Code**
   Download: https://code.visualstudio.com/

2. **Node.js**
   Recommended: Node.js 20+ or latest LTS
   Download: https://nodejs.org/

3. **Git**
   Download: https://git-scm.com/downloads

## Step 1: Download the Project from GitHub

Open Terminal and run:

```bash
git clone <YOUR_GITHUB_REPOSITORY_LINK>
```

Example:

```bash
git clone https://github.com/your-username/UFLEX.git
```

## Step 2: Open the Project Folder

Move into the project folder:

```bash
cd UFLEX
```

Then open the folder in VS Code:

```bash
code .
```

If the `code` command does not work, open VS Code manually and choose:

`File > Open Folder > UFLEX`

## Step 3: Install Project Dependencies

Run the following command in Terminal:

```bash
npm i --force
```

This will install all packages required for the project.

## Step 4: Start the Project

Run:

```bash
npm run dev
```

After that, open this URL in the browser:

```text
http://localhost:3000
```

## Useful Commands

Install dependencies:

```bash
npm i --force
```

Start development server:

```bash
npm run dev
```

## Troubleshooting

If `npm i --force` fails:

- Make sure Node.js is installed correctly.
- Close Terminal and open it again.
- Check Node and npm versions:

```bash
node -v
npm -v
```

If `npm run dev` does not start:

- Confirm that dependency installation completed successfully.
- Make sure you are inside the `UFLEX` project folder.
- Try running:

```bash
npm i --force
npm run dev
```

## Client Handover Note

To run the project locally, the client only needs to follow these commands:

```bash
git clone <YOUR_GITHUB_REPOSITORY_LINK>
cd UFLEX
npm i --force
npm run dev
```
