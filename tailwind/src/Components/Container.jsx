import React, { Children } from 'react'
import clsx from 'clsx'
export const Container = ({ 
    children,
    className,
}) => {
    return <div className={clsx("max-w-4xl mx-auto px-4 md:py-8", className)}>{children}</div>
}
