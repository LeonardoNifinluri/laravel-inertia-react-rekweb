import React from 'react';
import { Head, Link } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center">
      {/* Head Component for setting page title */}
      <Head title="Welcome" />

      {/* Logo */}
      <div className="mb-8">
        <img src="/icon/book.png" alt="Logo" className="w-32 h-32 mx-auto"/>
      </div>

      {/* Welcome text */}
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">
        Welcome to Book Repository
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-600 mb-8">
        Discover amazing book and join us today!
      </p>

      {/* Call-to-Action Buttons */}
      <div className="space-x-4">
        <Link href="/login">
            <PrimaryButton className="ms-4">Log in</PrimaryButton>  
        </Link>
        <Link href="/register" >
            <PrimaryButton className="ms-4">Register</PrimaryButton>
        </Link>
      </div>
    </div>
  );
}
