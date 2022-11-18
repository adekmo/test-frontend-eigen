import { Spin } from 'antd';
import React from 'react'

const Loader: React.FC = () => {
    return (
        <div className="example">
            <Spin />
            <p className="text-slate-500">Loading...</p>
        </div>
    )
}

export default Loader