import React, {useEffect, useState} from 'react';



const AboutUs = () =>{

    const [changeWord, setChangeWord] = useState({
        firstWord: '',
        secondWord: '',
        thirdWord: '',
        intro: true

    })

    useEffect(()=>{

     

        const word = 'Basis Supporting Life'
        const myArray = word.split("");
        const wordTwo = 'Twoje ZDROWIE'
        const myArrayTwo = wordTwo.split("");  
        const wordThree = "NASZ - priorytet..."
        const myArrayThree = wordThree.split("")

        let i =0;
        let y=0;
        let x=0;

       const setTimeId = setInterval(() =>{
            setChangeWord({
                firstWord: changeWord.firstWord += myArray.shift()
            })
            
                i++
                
                    if(i >= word.length){
                        clearInterval(setTimeId);
                    }
                        if(i === word.length){
                           const setTimeWordTwo = setInterval(() =>{
                                setChangeWord({
                                    secondWord: changeWord.secondWord += myArrayTwo.shift()
                                })
                                    y++
                                        if(y >= wordTwo.length){
                                            clearInterval(setTimeWordTwo);
                                        }

                                            if(y === wordTwo.length){

                                            const    setTimeWordThree = setInterval(()=>{
                                                    setChangeWord({
                                                        thirdWord: changeWord.thirdWord += myArrayThree.shift()
                                                    })
                                                        x++
                                                            if(x >= wordThree.length){
                                                                clearInterval(setTimeWordThree);
                                                        }
                                                },150)
                            }     
                         },150) 
                        }
                    
        },150) 


    }, [])

    // useEffect(()=>{

    //     const homePicture = new Array();
    //     homePicture[0] = '/img/home1.jpg'
    //     homePicture[1] = '/img/home2.jpg'

    //     let sec = 1;

    //     let a = 0;
        
    //     function change(){
    //         let ile = homePicture.length;
    //         setChangePhoto(homePicture[a])
    //         a++;
            
    //         if(ile==a){
    //             a=0;
    //         }
            
    //     }
       
    //     setInterval(change, sec *3000)
       
    // }, [])

    




    return(
        <section className='aboutUsContainer' >
        {/* // style={{ 
            // backgroundImage: `url(${changePhoto})`}}> */}
                 <div>{changeWord.firstWord}</div>
                 <div>{changeWord.secondWord}</div>
                 <div>{changeWord.thirdWord}</div>
        </section>
    )
}


export default AboutUs;