# Calendar App

A modern calendar application built with Next.js 14, featuring a sleek dark mode interface and intuitive event management.

## Features

- 🌙 Beautiful dark mode interface
- 📅 Monthly calendar view with event management
- ⚡ Real-time event updates with Redux
- 🕒 Time-based event scheduling
- 📱 Fully responsive design
- 🎨 Gradient headers and modern UI

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Typography**: [Geist Font](https://vercel.com/font)
- **Type Safety**: TypeScript

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/calendar-app.git
```

2. Install dependencies:
```bash
cd calendar-app
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── Calendar.tsx    # Main calendar component
│   ├── DayCell.tsx    # Individual day cell
│   ├── EventForm.tsx  # Event creation/editing form
│   └── Header.tsx     # Calendar header
├── redux/             # Redux state management
│   ├── store.ts
│   ├── calendarSlice.ts
│   └── eventSlice.ts
├── types/             # TypeScript types
└── utils/            # Utility functions
```

## Features in Detail

### Calendar View
- Monthly calendar with day cells
- Current day highlighting
- Event indicators
- Smooth transitions

### Event Management
- Create and edit events
- Set event times
- Delete events with confirmation
- Time-sorted event display

### User Interface
- Dark mode optimized
- Responsive design
- Clean and modern aesthetics
- Intuitive navigation

## Development

The app is built with modern web technologies and follows best practices:

- TypeScript for type safety
- Redux for state management
- Tailwind CSS for styling
- Component-based architecture
- Responsive design principles

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
