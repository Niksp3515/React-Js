import  { useCallback, useState } from 'react';
import Display from './Display';

const UseCallBack = () => {
    const [data, setData] = useState({
        name: "",
        age: ""
    });
    
    const [alldata, setAlldata] = useState([]);
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    const saveData = useCallback((e) => {
        e.preventDefault();
        setAlldata(prev => [...prev, data]);
        setData({ name: "", age: "" }); 
    }, [data]);
    
    return (
        <div style={{ padding: '20px' }}>
            <form onSubmit={saveData} style={{ marginBottom: '20px' }}>
                <div style={{ marginBottom: '10px' }}>
                    <label style={{ marginRight: '10px' }}>Name:</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={data.name} 
                        onChange={handleChange}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label style={{ marginRight: '10px' }}>Age:</label>
                    <input type="text" name="age" value={data.age} onChange={handleChange} />
                </div>
                <button type="submit">Save Data</button>
            </form>
            <Display alldata={alldata} />
        </div>
    );
};

export default UseCallBack;