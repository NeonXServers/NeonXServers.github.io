import { useEffect } from 'react';
let Redirect;
export default Redirect = ({ url }) => {
    useEffect(() => {
        window.location.href = '' + url;
    }, []);
    return null;
};
