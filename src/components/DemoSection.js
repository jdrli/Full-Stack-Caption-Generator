export default function DemoSection(){
    return(
        <section className="flex justify-around mt-12 items-center">
        <div className="bg-gray-800/50 w-[240px] h-[480px] rounded-xl">
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
        </div>
        <div className="bg-gray-800/50 w-[240px] h-[480px] rounded-xl">
        </div>
      </section>
    )
}