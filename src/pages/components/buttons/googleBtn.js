"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import styles from '@/styles/GoogleBtn.module.css';


export default function GoogleBtn() {
    return (
        <button
            onClick={() => signIn("google", { callbackUrl: "/questionario" })}
            className={styles['botao-google']}
            >
            <div className={styles['imagem-botao']}>
                <Image src="/assets/icons8-google-logo.svg" alt="Google" width={20} height={20} />
                Login com Google
            </div>
        </button>
    );
}