import React from 'react';

interface Props{
    value: number | string
    fn?: () => React.Dispatch<React.SetStateAction<string>>
}

export const CalcButton: React.FC<Props> = ({ value, fn }) => {
    return(
    <button>{value}</button>
    );
}