import { useRouter } from 'next/router';
import React from 'react'

function index() {
    const router = useRouter();
    // redirect to /course/ to /courses
    React.useEffect(() => {
        router.replace('/courses')
    }, [])
}

export default index