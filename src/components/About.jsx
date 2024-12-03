import React, {useRef, useEffect} from 'react'


// static Data import 
import { treatmentData } from '../assets/staticData'
import imageCollection from '../assets/images/images';

const About = () => {
    const progressBarParentRef = useRef(null);
    const discountParaRef = useRef(null);
    useEffect(() => {
        const progressBarParent = progressBarParentRef.current;
        const progressCircleContainer = [...progressBarParent.querySelectorAll(".progress-circle")];
        const progressText = [...progressBarParent.querySelectorAll(".progress-text")];
       progressCircleContainer.forEach((circle, index) => {
               let progress = 0;
               const intervalID = setInterval(()=>{
                    progress++;
                    const color = (index + 1) % 2 === 0 ? "#60A0FB": "#83A63F";
                    circle.style.background = `conic-gradient(${color} ${progress * 3.6}deg, gray 0deg)`;
                    progressText[index].textContent = `${progress}%`;
                    if(progress >=100){
                        clearInterval(intervalID);
                    }

               }, 30) 
      
         })  
    }, [])
    useEffect(() => {
         const p = discountParaRef.current;
         let text = p.textContent;
         setInterval(() => {
             text = text.substring(1, text.length) + text[0];
             p.textContent = text;
         }, 1000);
    }, [])

    return (
        <div id='about us' className='h-auto py-[5rem]'>
            <div className='w-[90vw] max-w-[1170px] mx-auto'>
                <div className='text-center'>
                    <p className='text-[#87A843] font-Caveat text-[2rem]'>About us</p>
                    <h1 className=' text-3xl lg:text-5xl font-Roboto-slab font-semibold text-[#3E474C] mt-[1rem] tracking-wide transition-all duration-200 ease-linear'>
                        We Teach Your Body To Recover Itself
                    </h1>
                    <p className='text-sm lg:text-[1rem] text-center w-[65%] mx-auto mt-[3rem] text-[#878A8C] font-Mukta transition-all duration-200 ease-linear'>
                        Our goal is to treat patients using old traditional techniques along with homeopathic drugs prepared from all natural ingredients.
                    </p>
                </div>
                <div ref={progressBarParentRef}  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-[3rem] transition-all duration-200 ease-linear'>
                    {
                        treatmentData.map((item) => {
                            return <div key={item.id} className='flex flex-col items-center py-[1rem]'>
                                <div className='w-[180px] h-[180px] p-[0.75rem] bg-[#f8f8f8] flex justify-center items-center border-[8px] border-[#f1f1f1] shadow shadow-[#ccc] rounded-[50%]'>
                                    <div className={`progress-circle transition-all duration-500 ease-linear ${item.id % 2 === 0 ? "conic-gradient-blue": "conic-gradient-green"} flex justify-center items-center w-full h-full rounded-[50%]`}>
                                        <div className='progess-inner-circle flex justify-center items-center w-[90%] h-[90%] rounded-[50%] bg-white'>
                                              <p className='progress-text text-center font-Mukta text-xl'>
                                                 0%
                                              </p>  
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-[2rem]">
                                    <h3 className='font-Roboto-slab text-xl font-semibold text-[#3E474C] text-center'>{item.title}</h3>
                                    <p className='font-Mukta mt-[1rem] text-[#878A8C] w-[80%] text-center mx-auto text-sm lg:text-[1rem]'>{item.description}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
                <div className='mt-[3rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 transition-all duration-200 ease-linear'>
                    <div className='relative shadow'>
                        <img src={imageCollection.acupuncture2} className='w-full h-[200px] object-cover' alt="()" />
                        <div className='w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center'>
                             <div>
                                 <h1 className='text-3xl text-center text-white capitalize tracking-wide font-Roboto-slab'>We are Always #1</h1>
                                 <p className='w-[90%] mx-auto text-center mt-[1rem] font-Mukta text-white'>Voted 2017’s best Acupuncturist in Philadelphia for Acupuncture treatment and services as reviewed by patients.</p>
                             </div>
                        </div>
                    </div>
                    <div className='border-dashed border-[2px] h-48 lg:h-auto border-[#ccc] flex justify-center items-center'>
                        <p ref={discountParaRef} className='font-Caveat text-xl text-[#87A843] uppercase font-semibold'> Get the treatment from the best</p>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default About
