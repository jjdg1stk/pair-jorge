import React, { useEffect, useState } from 'react'
import useUserList from '../useUserList'
const UserList = () => {
    const data = useUserList()
    return (
        <div>
            {data && data.length > 0 ?
                data.map(el =>
                <p key={el.name}>{el.name} | {el.email} | {el.age}</p>    
                    )
            : null}
        </div>
    )
}

export default UserList
