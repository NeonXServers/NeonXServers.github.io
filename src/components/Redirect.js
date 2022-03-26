import { useEffect } from 'react';
export default function Redirect({ url }) {
    useEffect(() => {
        window.location.href = '' + url;
    }, [url]);
    return null;
}
