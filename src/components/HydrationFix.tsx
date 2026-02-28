import React, { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

interface HydrationFixProps {
    children: React.ReactNode;
}

export default function HydrationFix({ children }: HydrationFixProps) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
