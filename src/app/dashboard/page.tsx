"use client"
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
export default function Dashboard() {
    const { isSignedIn } = useAuth();
    const router = useRouter();
    if (!isSignedIn) {
        if (typeof window !== "undefined") {
            router.push('/[[...sign-in]]');
        }
        return null;
    }
    return (
        <div>
            <p>Welcome to the Dashboard!</p>
        </div>
    );
}
     