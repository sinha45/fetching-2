import { useEffect, useState } from 'react';

export const UserDetails = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    return (
        <div>
            <h1 className='text-center text-blue-500 text-xl font-semibold mt-3'>
                This is Our Users Info
            </h1>
            <h1 className='text-center text-blue-500 text-xl font-semibold mt-3'>
                Total Users: {users.length}
            </h1>

            {users.map((user) => {
                console.log(user);

                return (
                    <div key={user.id}>
                        <section className="text-gray-600 body-font overflow-hidden">
    <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span className="font-semibold title-font text-gray-700">UserName: {user.username}</span>
                    <span className="mt-1 text-gray-500 text-sm">email: {user.email}</span>
                </div>
                <div className="md:flex-grow">
                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Address: {user.address.city}</h2>
                    <p className="leading-relaxed">Full Description: street:{user.address.street} <br />number: {user.address.number} <br /> Zipcode: {user.address.zipcode}</p>
                    <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>

        </div>
    </div>

</section>
                    </div>
                );
            })}

        </div>
    );
};





