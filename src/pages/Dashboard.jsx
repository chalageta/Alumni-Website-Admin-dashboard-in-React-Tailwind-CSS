import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go';
import { Stacked,Pie,Button,SparkLine } from '../components';
import { earningData,SparklineAreaData,ecomPieChartData } from '../data/constants';
import { useStateContext } from '../contexts/ContextProvider';
import { IoMdTrain } from 'react-icons/io';
const Dashboard = () => {
  const {currentColor} = useStateContext();
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 
        rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between items-center '>
            <div>
              <p className='text-gray-400 font-bold'>Capital</p>
              <p className='text-2xl'>293000 ETB</p>
            </div>
          </div>
          <div className='mt-6'>
            <Button 
            color="white"
            bgColor={currentColor}
            text="Download" 
            borderRadius= "10px"
            size='md'/>
          </div>
        </div>
        <div className='flex items-center m-3 flex-wrap gap-1 justify-center'>
          {earningData.map((item) => (
            <div key={item.title} className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56
            p-4 pt-8 rounded-2xl  '>
              <button type='button' style={{color: item.iconColor, backgroundColor: item.iconBg}}
               className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'>
                {item.icon}
              </button>
              <p className='mt-4'>
                <span className='text-lg font-semibold'>
                  {item.amount}
                </span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
                <p className='text-sm pt-1 text-gray-400'>
                  {item.title}
                </p>
              </p>

            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Dashboard
