"use client"
import React, { use } from 'react';
import { useState } from 'react';

const itemList = [
    "Abhishek",
    "Ananya",
    "Bhuvaneshwari",
    "Chandrakant",
    "Deveshwar",
    "Ganeshkumar",
    "Indrani",
    "Jagannath",
    "Kamalakar",
    "Lakshminarayanan",
    "Mohandas",
    "Natarajan",
    "Parvathy",
    "Rajendranath",
    "Saravanan",
    "Tarunendu",
    "Umeshchandra",
    "Vasudev",
    "Yogeshwar",
    "Zubinbharat"
  ];
  
const Input = () => {
    const [text,setText]=useState('');
    const [lists,setLists]=useState();
    const matchText=(input)=>{
        console.log(input);
        const results = [];

        for (const item of itemList) {
            const lowerCaseItem = item.toLowerCase();
            const lowerCaseInput = input.toLowerCase();
    
            // Case 1: All letters together at the Start match
            if (lowerCaseItem.startsWith(lowerCaseInput)) {
                results.push(item);
            }
            // Case 2: All letters together at Middle match
            else if (lowerCaseItem.includes(lowerCaseInput) && !lowerCaseItem.startsWith(lowerCaseInput) && !lowerCaseItem.endsWith(lowerCaseInput)) {
                results.push(item);
            }
            // Case 3: All letters together at End match
            else if (lowerCaseItem.endsWith(lowerCaseInput)) {
                results.push(item);
            }
            // Case 4: All 3 letters in same order not necessarily together match
            else if (lowerCaseItem.split('').every(char => lowerCaseInput.includes(char))) {
                results.push(item);
            }
            // Case 5: All 3 letters in random order match
            else if (lowerCaseInput.split('').every(char => lowerCaseItem.includes(char))) {
                results.push(item);
            }
    
            if (results.length >= 10) {
                break; // Limit results to top 10
            }
        }
    
        return results;
    }
    const onChanges=(e)=>{
  
      const word=e.target.value;
  
    console.log(e.target.value);
      if(word.length===3){
       const user= matchText(word);
       console.log(user);
       setLists(user)
      }
      setText(e.target.value);
    }
  return (
    <div className='h-screen'>
        <div className="text-2xl flex items-center justify-center">Input text</div>
        <div className='flex justify-center'>
        <form action="">
        <input className='w-64 h-10 bg-slate-200 text-black '  onChange={onChanges} ></input>
        <div className='text-xl'>
            {
                lists?.map((name,index)=>( 
                    <li key={index}>{name}</li>
                ))
            }
        </div>
      </form>
        </div>

    </div>
  )
}

export default Input;