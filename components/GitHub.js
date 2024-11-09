import React, { useState, useEffect } from "react";
import Link from 'next/link'; // Link is a component


export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>I want to do my final project on Spotify top songs listens tracker app using API</p>
            <Link href="https://github.com/AndrewTurenne/first-nextjs" target="_blank">Here's my repo for this homework project.</Link>
        </div>
    );
}