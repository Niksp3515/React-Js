import  { useState, useEffect } from 'react';

const UseEffect = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const result = await response.json();
            setData(result);
            setLoading(false);
        };

        fetchData();
    }, []); 

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <ul>
            {data.map(item => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    );
};

export default UseEffect;