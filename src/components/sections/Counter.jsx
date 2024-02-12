import CountUp from 'react-countup';




const Counter = ({ start, end, duration, title }) => (
  <div className="w-[250px] h-[80px] lg:w-[350px] lg:h-[160px] lg:bg-slate-100 flex flex-col justify-center px-8 rounded-2xl">
    <h1 className='font-serif font-bold  lg:text-6xl lg:mb-4 flex items-center'>
      <CountUp start={start} end={end} duration={duration} />
      <span className='lg:text-4xl'>+</span>
    </h1>
    <p className='font-mono lg:text-lg'>{title}</p>
  </div>
);


export default CountUp