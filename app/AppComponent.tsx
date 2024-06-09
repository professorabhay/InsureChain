'use client'
import React from 'react';
import {TonConnectUIProvider} from '@tonconnect/ui-react';

export default function AppComponent({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <TonConnectUIProvider manifestUrl="https://insure-chain.vercel.app/tonconnect-manifest.json">
            {children}
        </TonConnectUIProvider>
    )
}