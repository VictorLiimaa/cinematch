"use client";

import { signIn } from "next-auth/react";

export default function GoogleBtn() {
    return (
        <button 
            onClick={() => signIn("google", {callbackUrl: "/questionario"})}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            > 
            Login com Google
        </button>
    );
}