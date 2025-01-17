import React from "react"
import aboutImg from "../components/assets/images/about.jpg"

import imgs from "../components/assets/images/join1.png"
import { FaBookDead } from "react-icons/fa"
import { AiOutlineCheck } from "react-icons/ai"

export const About = () => {
  return (
    <>
      <section className='about py-16'>
        <div className='container'>
          <div className='heading text-center py-12'>
            <h1 className='text-3xl font-semibold text-black'>Explore Dazzlefield!</h1>
            <span className='text-sm mt-2 block'>Pip-pip and toodle-oo to the gormless lot, cobbled together like a dog’s dinner, knackered but over the moon, you wot mate? Right corker with a pint and a chinwag!</span>
          </div>
          <div className='grid grid-cols-4 gap-5 mt-5 md:grid-cols-2'>
            <AboutCard color='bg-[#2D69F0]' icon={<FaBookDead size={50} />} title='xyz Online courses' desc="...found a place where you belong. " />
            <AboutCard color='bg-[#DD246E]' icon={<FaBookDead size={50} />} title='xyz Online courses' desc="...found a place where you belong. " />
            <AboutCard color='bg-[#8007E6]' icon={<FaBookDead size={50} />} title='xyz Online courses' desc="...found a place where you belong. " />
            <AboutCard color='bg-[#0CAE74]' icon={<FaBookDead size={50} />} title='xyz Online courses' desc="...found a place where you belong. " />
          </div>
        </div>
      </section>
      <AboutContent />
    </>
  )
}
export const AboutCard = (props) => {
  return (
    <div className={`box shadow-md p-5 py-8 rounded-md text-white ${props.color} cursor-pointer transition ease-in-out delay-150 hover:-translate-y-4 duration-300 `}>
      <div className='icon'>{props.icon}</div>
      <div className='text mt-5'>
        <h4 className='text-lg font-semibold my-3'>{props.title}</h4>
        <p className='text-sm'>{props.desc}</p>
      </div>
    </div>
  )
}

export const AboutContent = () => {
  return (
    <section className='mb-16'>
      <div className='container flex md:flex-col'>
        <div className='left w-1/3 md:w-full mr-8 md:mr-0 relative'>
          <img src={aboutImg} alt='aboutImg' className=' rounded-xl' />
       
          <div className='img-group ml-24 mt-3'>
            <img src={imgs} alt='' />
            <span className='text-[14px]'>
              Join over <label className='text-black text-sm'>xyz+</label> students
            </span>
          </div>
        </div>
        <div className='right w-2/3 md:w-full md:mt-16'>
          <div className='heading w-4/5 md:w-full'>
            <h1 className='text-3xl font-semibold text-black'>Achieve Your Goals With Learnify</h1>
            <span className='text-sm mt-2 block leading-6'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam officia, reiciendis sapiente adipisci nulla non consequuntur eos repellendus laborum veritatis obcaecati neque est id porro voluptatum. Fuga iure nulla cum. Lost the plot bobby such a fibber bleeding bits and bobs don't get shirty with me bugger all mate chinwag super pukka william barney, horse play buggered.</span>
            <ul className='my-5'>
              <li className='text-sm flex items-center gap-5'>
                <AiOutlineCheck className='text-green-500' /> Upskill yourselff.
              </li>
              <li className='text-sm flex items-center gap-5 my-2'>
                <AiOutlineCheck className='text-green-500' />
                Access more then hundreds of online courses
              </li>
              <li className='text-sm flex items-center gap-5'>
                <AiOutlineCheck className='text-green-500' />
                Learn the latest skills
              </li>
            </ul>
            <button className='px-5 py-2 border border-gray-300 rounded-md text-sm'>Apply here </button>
          </div>
        </div>
      </div>
    </section>
  )
}
