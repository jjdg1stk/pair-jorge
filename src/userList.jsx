import React, { useEffect, useState } from 'react'
import useUserList from './useUserList'
const UserList = () => {
    const { data, hello } = useUserList()
    console.log(data);
    hello("Jorge")
    return (
        <div>
            {!data.loading ?
                data.data.map(el =>
                <p key={el.name}>{el.name} | {el.email} | {el.age}</p>    
                    )
            : <span>Loading</span>}
        </div>
    )
}

export default UserList
