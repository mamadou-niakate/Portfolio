import {useState} from "react";

export function usePaginatedFetch(url) {
    const [data, setData] = useState({});

    try {
        fetch(url)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error))
    }catch (error) {
        console.error(error)
    }

    return data;
}

//'https://api.github.com/users/hacktivist123/repos'
