/* eslint-disable react/prop-types */

const Display = ({ alldata }) => {
    return (
        <div>
            <h3>Submitted Data:</h3>
            <ul>
                {alldata.map((item, index) => (
                    <li key={index}>
                        {item.name} - {item.age} years old
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Display;