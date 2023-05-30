import React from 'react'

const CountBox = ({ title, value }) => {
  return (
    <div className="grid grid-cols-1 w-[100%] last-of-type:border-r-0 border-r-2 md:border-2 md:border-r-0 md:flex md:flex-col items-center md:w-[150px] h-fit md:rounded-lg md:shadow-md">
      <h4 className="font-spacegrotesk font-bold h-full md:h-fit text-[30px] text-[#5dce99] md:p-3 bg-stone-100 w-full text-center md:truncate">{value}</h4>
      <p className="font-spacegrotesk tracking-tight font-extrabold h-full md:h-fit text-[14px] text-stone-700 bg-stone-200 md:px-3 py-2 w-full rouned-b-lg text-center">{title}</p>
    </div>
  )
}

export default CountBox