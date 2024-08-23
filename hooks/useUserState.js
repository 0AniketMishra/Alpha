// hooks/useFetch.js
import { auth } from '@/firebaseConfig';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

const Fetch = () => {
 
    const [user, loading] = useAuthState(auth);
    const router = useRouter();
    const [approval, setApproval] = useState(1)

      
   
        if (!loading && !user && router.pathname !== '/login') {
            router.push('/login');
          
        }
        if (!loading && user)
            setApproval(2)
 
       
 


    return {approval};
};  

export default Fetch;
