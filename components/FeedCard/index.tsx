import Image from 'next/image';
import React, { useCallback } from 'react'
import { BiHeart, BiMessage, BiMessageRounded, BiSolidMessage, BiSolidMessageRounded, BiUpload } from 'react-icons/bi';
import { AiOutlineHeart} from 'react-icons/ai';
import { FaRetweet } from 'react-icons/fa';
import { CredentialResponse } from '@react-oauth/google';

const FeedCard:React.FC=()=> {
    const handleLoginWithGoogle= useCallback(
      (cred: CredentialResponse ) => {
 
      },
      [],
    )
    

    
  return (
    <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer">
    <div className='grid grid-cols-12'>


        <div  className='col-span-1'>
            <Image src="https://avatars.githubusercontent.com/u/107296821?v=4"  alt="user" width={50} height={50} />
          
        </div>
        <div  className='col-span-11 p-5'><h5>Prince Pal</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti libero architecto deleniti.</p>

        <div className="flex justify-between mt-5 text-xl items-center p-2 w-[90%]">
            <div>
                <BiMessageRounded/>
            </div>
            <div>
                <FaRetweet/>
            </div>
            <div>
                <AiOutlineHeart/>
            </div>
            <div>
                <BiUpload/>
            </div>

            
        </div></div>
    </div>
    </div>
  )
  }

export default FeedCard;