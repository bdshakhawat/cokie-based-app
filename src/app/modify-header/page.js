import { NextResponse } from 'next/server';

export function handler(req) {
  const token = req.headers['authorization'];
  if (token) {
    return new NextResponse().setHeader('Authorization', `Bearer ${token}`);
  }
  return new NextResponse.next();
}

export default function ModifyHeaderPage() {
  return <div>Header Modification Page</div>;
}
