import { copy, plusCircle } from "lucide-react";
import { useEffect, useState } from 'react'
import toast from "react-hot-toast";
import { useDispatch, useSelector } from 'react-redux';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';
import { useSearchParams } from 'react-router-dom';

const Home = () => {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();// Destructure useSearchparams
    const pasteId = searchParams.get("PasteId"); // Get pasteId from the search params
    const dispatch = useDispatch();
    const allPastes = useSelector((state) => state.paste.pastes);

  
     const creatPaste = () =>{

       const paste = {
        title: title,
        content: value,
        _id: pasteId || 
          Date.now().toString(36) + Math.random().toString(36).substring(2),
          createAt:new Data().toIOString(),
       }
    



       if(pasteId){
        // if pasteid is present, update the paste
        dispatch(updateToPastes(paste));
       }
        else{
            //create
            dispatch(addToPastes(paste));
     }

     //after that creation or updation
     setTitle('');
     setValue('');
     setSearchParams({});
     // navigate("/")

    };

    useEffect(() => {
      if (pasteId){
        const paste = pastes.find((p) => p._id === pasteId);
        if (paste){
          setTitle(paste.title);
          setValue(paste.content);
        }
      }
    }, [pasteId, pastes]);

  return 
    <div>
    <div className= "w-full h-full py-10 max-w-[1200px] mx-auto px-5 1g:px-0">
      <div className= "flex flex-col gap-y-5 items-start">
        <div className= "w-full flex flex-row gap-x-4 justify-between items-center">
        <input
        type='text'
        placeholder='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        //dynamic width based on wether pasteid is  present
        className={'${ 
          PasteId ? "w-[80%] " : "w-[85%]"
        } text-black border border-input rounded-md p-2'}
      
        />

        <button 
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-white  font-medium rounded-lg text-5m px-5 py-2.5 me-2 mb-2
        dark:bg-blue-600 dark:hover:bg-blue-700"
        onClick={createPaste}
        >
        
    
                {pasteId ? "Update Paste" : "Create My Paste"} 
                </button>     
       
    {pasteId && 
      <button
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-white  font-medium rounded-lg text-5m px-5 py-2.5 me-2 mb-2
        dark:bg-blue-600 dark:hover:bg-blue-700"
         onClick=(resetPaste)
         >
         <plusCircle size={20}/>
         </button>}
         </div>

         <div 
         className={'w[-full flex flex-col items-start relative rounded bg-opacity-10 border border-[rgba(128,121,121,0.3)]'}
         >
         <div className="w-full flex gap-x-[6px] items-center select-none group">
          <div className="w-(13px) h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-[rgb(254, 188,46)]"
          />

          <div className="w-(13px) h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-[rgb(45,200.66)]"/>
          </div>
          {/* Circle and copy btn */}
          </div>
          className={'w-fit rounded-t flex items-center justify-between gap-x-4 px-4'}
          
          // Copy button
          <button 
          className={'flex justify-center items-center transition-all duration-300 case-in-out group'}
          onClick={() => {

          }}
          placeholder='enter content here'
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
    </div>
    </div>
    </div>
  
    

  
}

export default Home