import { useRouter } from 'next/router';
import { Button } from '../components/ui/button';
export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <img src="/logo.png" alt="IN CATERING" className="w-40 mb-6" />
      <h1 className="text-2xl font-semibold mb-4">Vítej v IN CATERING!</h1>
      <Button onClick={() => router.push('/values')}>Začít onboarding</Button>
    </div>
  );
}
