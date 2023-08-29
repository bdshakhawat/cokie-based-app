import { NextResponse } from 'next/server';

export function handler(req) {
  return new NextResponse().cookie('theme', 'dark');
}

export default function SetCookiePage() {
  return (
    <div>
      <button onClick={() => fetch('/set-cookie')}>Set Cookie</button>
    </div>
  );
}
