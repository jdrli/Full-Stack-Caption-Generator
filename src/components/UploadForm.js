'use client';

export default function UploadForm() {
  async function upload(ev) {
    ev.preventDefault();
    console.log(ev);
    const files = ev.target.files;
    if (files.legnth > 0){
      const file = files[0];
      const response = await axios.postForm('/api/upload',{
        file, 
      });
      console.log(response.data);
    }
  }
  return (
    <label className="bg-green-500 py-2 px-6 rounded-full font-bold inline-flex gap-2 border-2 border-purple-700/50 hover:bg-sky-700 cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
      <span>Choose File</span>
      <input onChange={upload} type="file" className="hidden" />
    </label>
  );
}