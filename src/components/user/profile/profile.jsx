import { useEffect, useState, Suspense } from "react";
import { apiService } from "../../../services/api.service";

function Profile() {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        
        setIsLoading(true);
        apiService.get(`https://dummyjson.com/users/1`).then(res => {
           setUser(res);
           setIsLoading(false);
        }).catch(error => {
           throw new Error('API Failed')
           setIsLoading(false);
        });
        
    }, []);

    if(isLoading){
        return <>Fetching data for user....</>
    }

    return (
        <>
          Hey I'm {user?.firstName ?? ''} {user?.lastName ?? ''}
        </>
    );
}

export default Profile;