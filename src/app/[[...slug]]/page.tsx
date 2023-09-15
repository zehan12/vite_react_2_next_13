'use client'
import dynamic from 'next/dynamic';
import '../../../styles/global.css';

const App = dynamic(() => import('../../App'), { ssr: false });

export default function Page() {
    return (<App />)
}