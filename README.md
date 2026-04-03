# Next.js PDF Text Extractor

A beginner-friendly Next.js app using the App Router and Tailwind CSS.

## Features

- Upload a PDF file
- Extract text from every page with `pdfjs-dist`
- Display extracted text in a textarea

## Setup

1. Open a terminal in `C:\Users\Drago\next-pdf-extractor`
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the app in your browser:

```text
http://localhost:3000
```

## Notes

- The app uses the App Router in `app/page.tsx`.
- Text extraction runs in the browser.
- The PDF worker is loaded from a CDN for simplicity.
