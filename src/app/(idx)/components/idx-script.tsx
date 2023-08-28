'use client'
import { useEffect } from "react";

export default function IdxScript() {
    useEffect(() => {
        const ihomefinder = document.querySelector("#ihomefinder");
        if (!ihomefinder) {
            return;
        }

        const script = document.createTextNode(`ihfKestrel.render()`);
        ihomefinder.appendChild(script);
    }, []);

    return (
        <>
            <div className="section">
                <div className="container">
                    <div
                        id="ihomefinder"
                        dangerouslySetInnerHTML={{
                            __html: `<script>ihfKestrel.render()</script>`,
                        }}
                    />
                </div>
            </div>
        </>
    )
}
