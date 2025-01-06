import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">Next.js</h1>
      <Button variant="default">Click Me</Button>
    </div>
  );
}