import React from 'react';

const Container = ({
    children,
    width = 1024
}) => {
    const styling = {
        width: `${width}px`,
        display: "flex",
        justifyContent: "center"
    }
    return <div style={styling}>{children}</div>
}

export default Container;