import React, { BaseSyntheticEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { debounce } from 'throttle-debounce';

type Props = {
    value: string;
    onChange: (query: string) => void;
};

const WrappedHeader = styled.header`
    padding: 30px 0 0;
`;

const WrappedInput = styled.input`
    width: 100%;
    height: 60px;
    padding: 12px 30px;
    font-size: 22px;
    line-height: 30px;
    border: none;
    border-radius: 30px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);

    &:focus {
        outline: none;
    }
`;

const Filter: React.FC<Props> = ({ value, onChange }) => {
    const [query, setQuery] = useState(value);

    const handleChange = debounce(300, false, () => {
        onChange(query);
    });

    useEffect(() => {
        handleChange();

        return () => {
            handleChange.cancel();
        };
    }, [query]);

    return (
        <WrappedHeader>
            <WrappedInput
                type="text"
                placeholder="enter query"
                value={query}
                onChange={(evt: BaseSyntheticEvent) => {
                    setQuery(evt.target.value);
                }}
            />
        </WrappedHeader>
    );
};

export { Filter };
