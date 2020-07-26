import React from 'react';
import { UserType, PostType } from '../../types';
import styled from 'styled-components';
import Highlighter from 'react-highlight-words';

type Props = {
    post: PostType;
    user?: UserType;
    query: string;
};

const WrappedHeading = styled.h3`
    margin: 0 0 20px;
    font-size: 22px;
    line-height: 27px;
    color: #333;

    .highlighted {
        background-color: yellow;
    }
`;

const WrappedParagrapth = styled.p`
    margin: 0;
    color: rgba(51, 51, 51, 0.6);
`;

const WrappedUser = styled.div`
    margin: 15px 0 0;

    p {
        margin: 0;
    }
`;

const Post: React.FC<Props> = ({ post, user, query }) => {
    const { title, body } = post;

    return (
        <>
            <WrappedHeading>
                <Highlighter
                    highlightClassName="highlighted"
                    searchWords={[query]}
                    autoEscape={true}
                    textToHighlight={title}
                />
            </WrappedHeading>
            {body.split('\n').map((paragraph, idx) => (
                <WrappedParagrapth key={idx}>
                    <Highlighter
                        highlightClassName="highlighted"
                        searchWords={[query]}
                        autoEscape={true}
                        textToHighlight={paragraph}
                    />
                </WrappedParagrapth>
            ))}
            {user && (
                <WrappedUser>
                    <p>
                        <Highlighter
                            highlightClassName="highlighted"
                            searchWords={[query]}
                            autoEscape={true}
                            textToHighlight={user.username}
                        />
                    </p>
                    <p>
                        <Highlighter
                            highlightClassName="highlighted"
                            searchWords={[query]}
                            autoEscape={true}
                            textToHighlight={user.name}
                        />
                    </p>
                </WrappedUser>
            )}
        </>
    );
};

export { Post };
