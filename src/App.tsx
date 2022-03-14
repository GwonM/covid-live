import React from "react";
import { key } from "./dev/key";
export default function App(): JSX.Element {
    return (
        <div>
            <h1>App</h1>
            {key}
        </div>
    );
}
