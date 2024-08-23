"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function GoogleBtn() {
    return (
        <button 
            onClick={() => signIn("google", {callbackUrl: "/questionario"})}
            className="botao-google"
            > 
            <div className="imagem-botao">
                <Image src="/assets/icons8-google-logo.svg" alt="Google" width={20} height={20}  />
            Login com Google
            </div>
        </button>
    );
}