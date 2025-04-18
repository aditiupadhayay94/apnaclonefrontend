import { useEffect, useState } from 'react';
import axios from '../axios';

export default function MyApplication() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      const res = await axios.get('/applications/my-applications');
      setApplications(res.data);
    };
    fetchApplications();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Job Applications</h1>
      {applications.length === 0 ? (
        <p>No applications yet.</p>
      ) : (
        <div className="space-y-4">
          {applications.map((app) => (
            <div key={app._id} className="border p-4 shadow rounded">
              <h2 className="font-bold">{app.jobId.title}</h2>
              <p className="text-gray-600">{app.jobId.company} - {app.jobId.location}</p>
              <p>Status: <span className="text-blue-700">{app.status}</span></p>
              <p>Applied on: {new Date(app.appliedAt).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
