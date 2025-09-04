import React, { Children } from 'react'
import clsx from 'clsx'
export const Container = ({ 
    children,
    className,
}) => {
    return <div className={clsx("max-w-6xl mx-auto px-4 md:py-0", className)}>{children}</div>
}
