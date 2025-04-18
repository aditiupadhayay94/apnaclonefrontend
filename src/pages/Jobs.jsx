import { useEffect, useState } from 'react';
import axios from '../axios';
import { useAuth } from '../context/AuthContext';

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await axios.get('/jobs');
      setJobs(res.data);
    };
    fetchJobs();
  }, []);

  const applyToJob = async (jobId) => {
    try {
      await axios.post('/applications/apply', { jobId });
      alert('Applied successfully');
    } catch (err) {
      alert(err.response?.data?.message || 'Error');
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Available Jobs</h1>
      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job._id} className="border p-4 shadow rounded">
            <h2 className="font-bold text-lg">{job.title}</h2>
            <p className="text-gray-600">{job.company} - {job.location}</p>
            <p>{job.description}</p>
            {user?.role === 'jobseeker' && (
              <button
                onClick={() => applyToJob(job._id)}
                className="bg-green-600 text-white px-4 py-1 mt-2 rounded"
              >
                Apply Now
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
