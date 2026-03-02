import React, { useEffect, useState } from 'react';

export default function Session() {
    const [form, setForm] = useState({
        name: '',
        description: ''   
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const [sessions, setSessions] = useState([]);
    const [editId, setEditId] = useState(null);

    // load sessions from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem('sessions');
        if (stored) {
            setSessions(JSON.parse(stored));
        }
    }, []);

    const saveToStorage = (list) => {
        localStorage.setItem('sessions', JSON.stringify(list));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editId) {
            const updated = sessions.map(s =>
                s.id === editId ? { ...s, name: form.name, description: form.description } : s
            );
            setSessions(updated);
            saveToStorage(updated);
            alert('Updated Successfully');
        } else {
            const newEntry = {
                id: Date.now().toString(),
                name: form.name,
                description: form.description,
                date: new Date().toLocaleDateString()
            };
            const updated = [...sessions, newEntry];
            setSessions(updated);
            saveToStorage(updated);
            alert('Added Successfully');
        }
        setForm({ name: '', description: '' });
        setEditId(null);
    };

    const handleDelete = (id) => {
        const filtered = sessions.filter(s => s.id !== id);
        setSessions(filtered);
        saveToStorage(filtered);
        alert('Session Deleted Successfully');
    };

    const handleEdit = (item) => {
        setForm({ name: item.name, description: item.description });
        setEditId(item.id);
    };

    return (
        <div>
            <form
                className="w-75 mx-auto my-auto mt-5 border p-2"
                method="post"
                onSubmit={handleSubmit}
            >
                <div className="mt-3">
                    <input
                        type="text"
                        name="name"   
                        value={form.name}   
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Session Name"
                    />
                </div>
                <div className="mt-3">
                    <textarea
                        type="text"   
                        name="description"   
                        value={form.description}  
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter Description"
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary mt-4 mb-3 ms-3">
                    Submit
                </button>
            </form>

            <div className="w-75 mx-auto mt-5 border p-2">
                <h1>Sessions</h1>
                <table className="w-100 mx-auto mt-2 border mb-4">
                    <thead>
                        <tr>
                            <th className="pt-1 border border-2 ps-3 pb-1">S.No</th>
                            <th className="pt-1 border border-2 ps-3 pb-1">Name</th>
                            <th className="pt-1 border border-2 ps-3 pb-1">Description</th>
                            <th className="pt-1 border border-2 ps-3 pb-1">Date</th>
                            <th className="pt-1 border border-2 ps-3 pb-1">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                      {sessions.map((item, i) => (
                        <tr key={item.id}>
                         <td>{i + 1}</td>
                         <td>{item.name}</td>
                         <td>{item.description}</td>
                         <td>{item.date || '--'}</td>
                         <td>
                            <button className='btn-danger btn' onClick={() => { handleDelete(item.id); }}>Delete</button>
                            <button className='btn btn-success' onClick={() => { handleEdit(item); }}>Edit</button>
                         </td>
                        </tr>
                      ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}